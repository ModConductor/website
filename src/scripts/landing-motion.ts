export function enhanceLandingMotion(): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;

  const pending = new Set(Array.from(document.querySelectorAll<HTMLElement>("[data-landing-reveal]"))
    .filter((region) => region.getBoundingClientRect().top >= window.innerHeight));
  const active = new Map<HTMLElement, Animation>();

  const finish = (): void => {
    if (pending.size > 0 || active.size > 0) return;
    observer.disconnect();
    document.removeEventListener("focusin", showFocusedRegion);
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
      animation.cancel();
      active.delete(region);
    }
    finish();
  };

  const stopMotion = (): void => {
    if (!reduced.matches) return;
    pending.clear();
    for (const animation of active.values()) animation.cancel();
    active.clear();
    finish();
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
        { opacity: 0, transform: `translateY(${distance}px)`, offset: 0 },
        { opacity: 1, transform: "translateY(-8px)", offset: 0.68 },
        { opacity: 1, transform: "translateY(3px)", offset: 0.84 },
        { opacity: 1, transform: "translateY(-1px)", offset: 0.94 },
        { opacity: 1, transform: "translateY(0)", offset: 1 },
      ], { duration: 650, easing: "ease-out" });
      active.set(region, animation);
      animation.addEventListener("finish", (): void => {
        active.delete(region);
        finish();
      }, { once: true });
    }
    finish();
  }, { rootMargin: "0px 0px -48px 0px" });

  document.addEventListener("focusin", showFocusedRegion);
  reduced.addEventListener("change", stopMotion);
  for (const region of pending) observer.observe(region);
  finish();
}
