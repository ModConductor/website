import { rememberedTheme, themeStorageKey, type Theme } from "./theme-preference";

function updateControl(button: HTMLButtonElement, theme: Theme): void {
  button.setAttribute("aria-checked", String(theme === "dark"));
  button.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

export function enhanceThemeControl(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!button) return;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = (): Theme => system.matches ? "dark" : "light";
  const currentTheme = (): Theme => rememberedTheme(localStorage) ?? systemTheme();
  updateControl(button, currentTheme());
  button.addEventListener("click", (): void => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, next);
    document.documentElement.dataset["theme"] = next;
    updateControl(button, next);
  });
  system.addEventListener("change", (): void => {
    if (rememberedTheme(localStorage) !== null) return;
    updateControl(button, systemTheme());
  });
  button.classList.replace("hidden", "inline-flex");
}
