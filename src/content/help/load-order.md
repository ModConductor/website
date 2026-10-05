The mixed **Load order** view combines plugins with their source mods and non-plugin files. The selected profile owns its saved order.

## Plugins and files

| Setting | Purpose |
| --- | --- |
| Plugin order | Controls the order of game plugins, where the game supports plugins |
| File priority | Selects the winning copy when enabled mods supply the same file path |
| Groups and separators | Organize the mod library for navigation |

A plugin's position and a file's priority are separate choices. A group name does not decide either choice.

## Change the mixed order

1. Open **Mods** and select **Load order**.
2. Select a plugin or source entry.
3. Use **Move selected entries up** or **Move selected entries down**.
4. Expand a source mod to inspect its files.
5. Select **Inspect selected entry** to check its details.
6. Check the resulting order and file winners before launch.

Only entries that support a move can change position. Keep required plugin dependencies in the order that the game needs.

## Optimise

For supported Bethesda games, **Optimise** uses LOOT to sort plugin order. It does not optimize every file or every game.

1. Check the current profile and its plugin requirements.
2. Select **Optimise**.
3. Wait for the result.
4. Open **LOOT details** and read the plugin moves and messages.
5. Resolve reported dependencies or compatibility problems before Play.

Optimise checks the result and applies a valid plugin order automatically. It does not wait for a separate confirmation.

LOOT changes plugin order only. It does not change filename priority, source-mod order, or the winner of a loose-file conflict.

Do not use a successful sort as proof that all mods are compatible. Read each mod's requirements and the reported warnings.

## File conflicts

Two mods can supply different contents for the same path. The winning copy depends on the profile's file choices and source priority.

1. Inspect the conflicting path and its available copies.
2. Choose the source that the mod instructions require.
3. Preview any file change before you apply it.
4. Check deployment status after the change.

A filename priority rule remains separate from a LOOT sort. Check file winners again if you change the enabled sources.

## Related topics

- [Install and organize mods](../mods/).
- [Run FNIS after animation changes](../skyrim/#fnis).
- [Profile launch and deployment problems](../troubleshooting/#deployment-and-launch).
