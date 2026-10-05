These components are optional and apply to supported Skyrim profiles. Other games use their own setup and loader requirements.

**Skyrim setup** does not install all components automatically. Each component needs an explicit choice before **Apply**.

## SKSE

SKSE must match the installed Skyrim runtime. The newest SKSE release is not necessarily compatible with your game.

1. Open **Skyrim setup** for the selected profile.
2. Select SKSE for installation.
3. Read the selected release and runtime compatibility result.
4. If no compatible release is selected, resolve the runtime mismatch first.
5. Select **Apply** for the choices that you intend to install.
6. Check the completed setup status before Play.

The **Install latest SKSE** choice can appear with a compatibility warning. Do not select it unless you accept that mismatch.

When an update is offered, check its runtime requirements before you select the update action.

## ENBSeries

ENBSeries needs an archive that you supply. It is not an automatic download of a preset.

1. Get the correct ENBSeries archive from its project source.
2. Open **Skyrim setup**.
3. Select ENBSeries for installation.
4. Select **Choose ENBSeries archive**.
5. Choose the compatible archive.
6. Select **Apply**.
7. Check the setup result.

An ENB preset can have separate requirements. Read the preset instructions before you add its files.

## FNIS

FNIS produces animation files for the selected profile. Animation-mod changes can require another run.

1. Open **Skyrim setup**.
2. Select FNIS for installation if your mods require it.
3. Complete any requested source or download action.
4. Select **Apply**.
5. Open the FNIS tool controls.
6. Select **Run FNIS**.
7. Read the last run's output, errors, and exit code.
8. Check the generated output before Play.

FNIS output belongs to the profile. A failed run or warning is not proof of usable animation files.

After an animation change, select **Run FNIS** again. The rerun uses the current profile inputs and updates its private output.

If Play asks for an FNIS run, resolve the output status first. Continue without it only if you understand the effect on your mods.

## Remove a component

1. Open **Skyrim setup**.
2. Clear the installed component's choice to select removal.
3. Read the resulting choices.
4. Select **Apply**.
5. Check the result before Play.

Removal can break mods that depend on the component. Keep the required components for the selected profile.

## Related topics

- [Tools and generated output](../tools/).
- [Plugin and file order](../load-order/).
- [Tool failure checks](../troubleshooting/#tools-and-generated-files).
