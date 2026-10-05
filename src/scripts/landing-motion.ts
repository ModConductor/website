export function enhanceLandingMotion(): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;
  const animations = Array.from(document.querySelectorAll<HTMLElement>("[data-landing-enter]"), (element, index) => element.animate([
    { opacity: 0.8, transform: "translateY(10px)", offset: 0 },
    { opacity: 1, transform: "translateY(-1px)", offset: 0.7 },
    { opacity: 1, transform: "translateY(0.4px)", offset: 0.88 },
    { opacity: 1, transform: "translateY(0)", offset: 1 },
  ], { duration: 540 - index * 35, delay: index * 55, fill: "backwards", easing: "ease-out" }));
  reduced.addEventListener("change", (): void => {
    if (!reduced.matches) return;
    for (const animation of animations) animation.cancel();
  });
}
