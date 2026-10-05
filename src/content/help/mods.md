Use mods from sources that you trust. Check each mod's game version, dependencies, and installation instructions before you install it.

## Local archives

1. Open **Archives**.
2. Select **Add archive**.
3. Choose a supported archive file.
4. Check its installation result or review screen.
5. If a review is required, select the mod options and file layout.
6. Select **Install** when the review permits installation.
7. Open **Mods**.
8. Enable the installed mod for the selected profile.

A straightforward archive can install directly. FOMOD, BAIN, and unusual layouts can require choices or a file review.

If the archive contains several mods, check each item in the bundle. Earlier installed items remain installed if a later item fails.

New mods can start disabled. Check the enabled state before you select Play.

### Existing mod folder

1. Open **Mods**.
2. Select **Add mod folder**.
3. Enter the mod details.
4. Choose a mod folder inside the workspace.
5. Select **Add mod**.

This action is not the archive picker. Use **Archives → Add archive** for downloaded ZIP or other supported archive files.

## Nexus Mods

1. Open the application preferences.
2. Open the **Nexus Mods** account controls.
3. Connect your account with the offered account or personal API key route.
4. Open **Archives → Nexus Mods**.
5. Find the mod for the selected game.
6. Select the required file and **Download**.
7. Complete any download action requested by Nexus Mods.
8. Check the archive installation result.
9. Enable the mod in **Mods**.

Do not share your API key, account tokens, or authenticated download links.

### Non-premium accounts

Nexus Mods restricts direct API downloads for non-premium accounts. A browser download or an authorized `nxm://` link can be required.

1. Open the mod page when a direct download is unavailable.
2. Complete the download on Nexus Mods.
3. If the site offers a mod-manager link, use it with Mod Conductor's Nexus link handling enabled.
4. Otherwise, use **Add archive** for the downloaded file.

A Nexus connection does not remove the site's account limits or download requirements.

## Thunderstore

1. Open the Thunderstore browser for a compatible game.
2. Select the correct **Community**.
3. Find the package.
4. Check the selected version and dependencies.
5. Start the offered download.
6. Check the installation result.
7. Enable the installed mod in **Mods**.

Dependencies can add more packages. Check the resulting library and the loader requirements before launch.

## Groups and separators

1. Open **Installed mods**.
2. Select the mods that belong together.
3. Open the organization actions.
4. Select **Group selected**.
5. Enter a name and select **Add**.

Use **Add separator** for a named division in the organization view. **Show organization order** returns to that view after a priority view.

Groups and separators organize the library. They do not replace plugin order or file priority.

## Disable or delete

To stop a mod in one profile, clear its enabled control. The mod remains in the library.

To remove a mod from the workspace:

1. Select the mod in **Installed mods**.
2. Select **Delete mod**.
3. Read the affected-profile warning.
4. Select **Delete** only if you want to remove the mod.
5. Wait for the result.

Deletion removes the mod and its Mod Conductor files. Original archives, source folders, and saves remain unchanged.

Profiles that use the mod are undeployed. Other mods stay installed. Do not treat deletion as a per-profile disable action.

## Related topics

- [Set plugin and file order](../load-order/).
- [Manage tool output](../tools/#generated-output).
- [Resolve archive and download problems](../troubleshooting/#mods-and-downloads).
