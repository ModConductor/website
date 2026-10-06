Start with the visible problem and the selected profile. Do not delete game files or replace a workspace to bypass an error.

## Installation

| Problem | Check | Next step |
| --- | --- | --- |
| Windows warns about an unsigned file | Download source and release filename | Use the official release. Do not bypass an unknown-source warning. |
| Portable package cannot start | Complete extraction, including engine and libraries | Extract the complete package into a writable folder. |
| AppImage cannot mount | FUSE support on the distribution | Use the distribution's FUSE guidance or the portable archive. |
| Package command cannot find Mod Conductor | Public index availability | Use [the available installation routes](../install/#other-package-indexes). |

Do not rename a package for another processor architecture. The published desktop files target x86-64.

## Game and profile setup

1. Check the selected game, edition, and installation source.
2. Check **Game folder** against the real installation.
3. If Steam discovery fails, use the folder override.
4. On Linux, check the Proton data folder and runtime, or the Wine executable and prefix.
5. Complete the displayed setup problem before Play.

A Proton data folder belongs to a particular game installation. If you changed the game folder, check the Proton selection again.

For an added game, check its detected engine and mod-loader requirements. A recognized engine does not guarantee compatibility.

## Mods and downloads

1. Check the mod's game edition and required dependencies.
2. Check whether the archive needs installer choices or a file-layout review.
3. For Nexus Mods, check account connection and the requested browser download action.
4. For Thunderstore, check the game community and package version.
5. Read the failed action's message before you retry.

If a Nexus direct download is unavailable, use the mod page or import the downloaded archive. Do not share authenticated links.

For a bundle, check each item's result. A failure in a later item does not undo earlier installed mods.

## Deployment and launch

1. Check the active profile.
2. Read the deployment problem.
3. Open **Help → Diagnostics** and select **Open problem** for a relevant finding.
4. Read the proposed change and affected paths.
5. Preview the change before you apply or continue a restore.
6. Check deployment status again before Play.

Do not overwrite a conflicting game file without a preview. Keep a backup when a proposed action affects files that you need.

If Optimise reports a dependency problem, resolve it before Play. LOOT does not repair file-priority conflicts.

## Tools and generated files

1. Check the executable file and selected runtime.
2. Check the working directory and individual arguments.
3. Open **Run details** and read the output and exit status.
4. Inspect unfinished or failed generated output.
5. After a correction, rerun the tool and check its new result.

For FNIS, read the last run and select **Run FNIS** after animation changes. Do not treat a warning as a completed animation setup.

**Stop waiting** does not guarantee that the external process stopped. Check the tool before you start another run.

## Saves and profile files

1. Check whether the save belongs to **Profile** or **Global**.
2. Check the displayed local path and companion files.
3. Read any missing-plugin warning for the save.
4. For `.mcprof` import, supply the exact archives that the dialog requests.
5. Keep a backup before any deletion or restore.

Mod Conductor does not manage Steam Cloud. A cloud conflict needs attention in the game or Steam as well.

## Report a problem

1. Open the [project issue tracker](https://github.com/ModConductor/ModConductor/issues).
2. Check for an existing report.
3. State your Mod Conductor version, operating system, game edition, and installation source.
4. Describe the action and the expected result.
5. Include the visible error and steps that reproduce it.
6. Remove account data, credentials, private paths, and personal saves from attachments.

## Related topics

- [First profile](../first-profile/).
- [Mods and archives](../mods/).
- [Profiles and saves](../profiles/).
