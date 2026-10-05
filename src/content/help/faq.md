## Which systems are supported?

The 0.2.0 desktop release provides Windows and Linux files for x86-64 computers. The Linux Homebrew cask is not a macOS package.

See [Installation](../install/) for the available routes and package-index status.

## Is every Unity or Unreal game supported?

No. The generic routes apply to compatible games and loader workflows. The engine type alone does not prove compatibility.

Check the game, loader, mod version, and installation requirements in [Games](../games/).

## Does Play change game files?

Mod Conductor applies the selected profile files and deployment before it starts the game. A failed check stops launch and displays the problem.

Check deployment status and keep important backups. See [First profile](../first-profile/#first-launch).

## Does Mod Conductor change original mod archives?

Mod Conductor keeps saved mod versions. A file edit creates a new version and retains the original version.

Mod deletion removes its managed files. Original archives and source folders remain unchanged.

## Does Optimise fix file conflicts?

No. LOOT proposes changes to plugin order only. Filename priority and loose-file winners remain separate choices.

See [Load order](../load-order/).

## Do Nexus downloads require premium?

Nexus Mods limits direct API downloads for non-premium accounts. Use the requested browser action, an authorized mod-manager link, or a local archive.

The application does not bypass those limits. See [Nexus Mods](../mods/#nexus-mods).

## Are Skyrim components installed automatically?

No. Select the required SKSE, ENBSeries, or FNIS choices and use **Apply**. ENBSeries needs an archive that you supply.

Check compatibility first. See [Skyrim components](../skyrim/).

## Can I run other tools?

Yes. Add an executable and select Native, Wine, or Proton as appropriate. Set its arguments, working directory, and output folder.

See [Tools](../tools/). Tool compatibility still depends on the selected game and runtime.

## Does Stop waiting stop the tool?

No. It stops the wait for the run, not necessarily the external process. Check the process before another run.

## Does Mod Conductor manage Steam Cloud?

No. Save controls use qualified local paths. They do not change Steam Cloud data or guarantee cloud synchronization.

See [Profiles and saves](../profiles/#save-files).

## Does a .mcprof file include everything?

No. Import can require exact mod archives and available Nexus downloads. Save games are an optional export choice.

The game installation is separate. See [Profile export and import](../profiles/#export-a-profile).

## Which game archives can I inspect?

The application can browse selected BSA and BA2 archives. Support depends on their version and compression format.

An unsupported archive is not evidence of a damaged game. Check its format before a repair or replacement.
