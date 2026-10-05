A workspace holds your mod library and profiles. A profile selects a game installation and keeps its own order, settings, and private files.

## Create a workspace

1. Open Mod Conductor.
2. Select **Create workspace**.
3. Enter a name.
4. Select a writable folder if you need a different workspace location.
5. Create the workspace.

To use an existing workspace, select **Open workspace** and choose its folder.

Keep the workspace outside the game installation folder. Keep a separate backup before you import an existing setup.

## Select a game and folder

1. Select **Create profile**.
2. Enter a **Profile name**.
3. Select your **Game**.
4. Select the source under **Installation**.
5. For Steam, select **Find in Steam…**.
6. If the search finds several installations, select the correct **Steam folder**.
7. Check the **Game folder**.

The search does not install the game. The selected folder must contain the correct game installation.

### Folder override

1. If discovery finds no suitable folder, enter the path in **Game folder** or use its folder button.
2. Check the selected game and installation source again.

A folder override changes the path for this profile. It does not prove that an unsupported game is compatible.

If the game is absent from the catalog, use **Add game**. Read [Games](../games/) before you continue.

## Linux launch setup

Native Linux games do not need Proton. A Windows Steam game needs a Proton selection. Other Windows installations use Wine.

### Steam Proton

1. Start the unmodified game once through Steam.
2. Return to the profile setup.
3. Select **Select Proton…**.
4. Choose the **Proton data folder** for this installation.
5. Choose the installed Proton runtime.
6. Check the displayed Proton details.
7. Accept the selection.

The data folder contains the prefix for this game. It is not the game folder or the Proton runtime folder.

If discovery is incomplete, use the folder controls to select existing paths. Do not choose an unrelated game's prefix.

A profile can retain incomplete Linux setup. Profile creation alone does not mean that Play is ready.

### Wine

1. Select the non-Steam installation source.
2. Select the **Wine executable**.
3. Select the **Wine prefix** for the game.

Use the prefix that contains the game and its required Windows settings. Do not create or replace a prefix through these instructions.

## First launch

1. Finish the profile setup with **Create profile**.
2. Check the selected profile and its setup status.
3. Resolve any installation or runtime problem.
4. Select **Play**.

Mod Conductor applies the selected profile before it starts the game. A failed check stops the launch and displays the problem.

Test the profile before you add mods. For Skyrim, optional components have a separate [Skyrim setup](../skyrim/).

## Related topics

- [Install your first mod](../mods/).
- [Change profiles and manage saves](../profiles/).
- [Resolve setup problems](../troubleshooting/#game-and-profile-setup).
