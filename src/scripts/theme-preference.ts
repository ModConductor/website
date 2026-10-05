export type Theme = "light" | "dark";
export const themeStorageKey = "mod-conductor-theme";

export function rememberedTheme(storage: Storage): Theme | null {
  const value = storage.getItem(themeStorageKey);
  return value === "light" || value === "dark" ? value : null;
}
