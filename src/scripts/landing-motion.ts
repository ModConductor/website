export function enhanceLandingMotion(): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;

  const regions = Array.from(document.querySelectorAll<HTMLElement>("[data-landing-reveal]"));
  const pending = new Set(regions.filter((region) => region.getBoundingClientRect().top >= window.innerHeight));
  const active = new Map<HTMLElement, Animation>();

  const finish = (): void => {
    if (pending.size > 0 || active.size > 0) return;
    observer.disconnect();
    document.removeEventListener("focusin", showFocusedRegion);
    document.removeEventListener("pointerdown", holdPointerTarget, true);
    document.removeEventListener("pointerup", releasePointerTargets);
    document.removeEventListener("pointercancel", releasePointerTargets);
    reduced.removeEventListener("change", stopMotion);
  };

  const showFocusedRegion = (event: FocusEvent): void => {
    if (!(event.target instanceof Node)) return;
    for (const region of pending) {
      if (!region.contains(event.target)) continue;
      pending.delete(region);
      observer.unobserve(region);
    }
    for (const [region, animation] of active) {
      if (!region.contains(event.target)) continue;
      const pointerFocus = animation.playState === "paused"
        && event.target instanceof Element && !event.target.matches(":focus-visible");
      if (pointerFocus) continue;
      animation.cancel();
      active.delete(region);
    }
    finish();
  };

  const holdPointerTarget = (event: PointerEvent): void => {
    if (event.button !== 0 || !event.isPrimary || !(event.target instanceof Node)) return;
    for (const [region, animation] of active) {
      if (!region.contains(event.target)) continue;
      const effect = animation.effect;
      if (!(effect instanceof KeyframeEffect) || !(effect.target instanceof Element)) continue;
      const transform = getComputedStyle(effect.target).transform;
      animation.pause();
      effect.setKeyframes([{ opacity: 1, transform }, { opacity: 1, transform }]);
    }
  };

  const releasePointerTargets = (): void => {
    // Keep the pressed target still until native click activation has run.
    requestAnimationFrame((): void => {
      for (const [region, animation] of active) {
        if (animation.playState !== "paused") continue;
        animation.cancel();
        active.delete(region);
      }
      finish();
    });
  };

  const stopMotion = (): void => {
    if (!reduced.matches) return;
    pending.clear();
    for (const animation of active.values()) animation.cancel();
    active.clear();
    finish();
  };

  const trackAnimation = (region: HTMLElement, animation: Animation): void => {
    active.set(region, animation);
    animation.addEventListener("finish", (): void => {
      active.delete(region);
      finish();
    }, { once: true });
  };

  // Observe the stationary wrapper, not the content that moves out of view.
  const observer = new IntersectionObserver((entries): void => {
    for (const entry of entries) {
      if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
      const region = entry.target;
      if (!pending.delete(region)) continue;
      observer.unobserve(region);
      const content = region.firstElementChild;
      if (!(content instanceof HTMLElement) || region.contains(document.activeElement)) continue;

      const distance = Math.max(24, window.innerHeight - content.getBoundingClientRect().top + 24);
      const animation = content.animate([
        { opacity: 0, transform: `translateY(${distance}px)`, offset: 0, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
        { opacity: 0.92, transform: "translateY(-3px)", offset: 0.72, easing: "ease-in-out" },
        { opacity: 1, transform: "translateY(1px)", offset: 0.86, easing: "ease-in-out" },
        { opacity: 1, transform: "translateY(-0.25px)", offset: 0.94, easing: "ease-in-out" },
        { opacity: 1, transform: "translateY(0)", offset: 1 },
      ], { duration: 1200 });
      trackAnimation(region, animation);
    }
    finish();
  }, { rootMargin: "0px 0px -48px 0px" });

  document.addEventListener("focusin", showFocusedRegion);
  document.addEventListener("pointerdown", holdPointerTarget, true);
  document.addEventListener("pointerup", releasePointerTargets);
  document.addEventListener("pointercancel", releasePointerTargets);
  reduced.addEventListener("change", stopMotion);
  for (const region of regions) {
    if (pending.has(region) || region.contains(document.activeElement)) continue;
    const content = region.firstElementChild;
    if (!(content instanceof HTMLElement)) continue;
    const entrance = content.querySelector("h1") === null
      ? { travel: 120, overshoot: 7, duration: 1800 }
      : { travel: 80, overshoot: 5, duration: 1600 };
    trackAnimation(region, content.animate([
      { opacity: 0, transform: `translateY(${entrance.travel}px)`, offset: 0, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
      { opacity: 0.92, transform: `translateY(-${entrance.overshoot}px)`, offset: 0.72, easing: "ease-in-out" },
      { opacity: 1, transform: `translateY(${entrance.overshoot / 3}px)`, offset: 0.86, easing: "ease-in-out" },
      { opacity: 1, transform: `translateY(-${entrance.overshoot / 10}px)`, offset: 0.94, easing: "ease-in-out" },
      { opacity: 1, transform: "translateY(0)", offset: 1 },
    ], { duration: entrance.duration }));
  }
  for (const region of pending) observer.observe(region);
  finish();
}
