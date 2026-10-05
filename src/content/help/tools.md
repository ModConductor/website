The **Tools** area supports saved executables, run details, and generated output. Use tools from sources that you trust.

## Add an executable

1. Open **Tools**.
2. Open **Executables** and select **Add executable**.
3. Enter a **Name**.
4. Select the **Executable**.
5. Select its **Runtime**.
6. Set the **Working directory** required by the tool.
7. Add each argument as a separate argument entry.
8. Select an **Output folder** if the tool needs managed output.
9. Add required environment variables.
10. Select **Save**.

**Native**, **Wine**, and **Proton** are different runtime choices. On Linux, a Windows executable needs an appropriate Windows runtime.

Wine and Proton use the selected profile's launch configuration. Check the profile's runtime paths before you run a Windows tool.

Do not put a complete shell command in **Executable**. Select the executable file and use the separate argument entries.

## Arguments

The argument controls support `{game}` for the profile game folder and `{output}` for its output folder.

Supply only the arguments that the tool documents. An output-folder choice does not redirect arbitrary writes by itself.

Do not publish environment values that contain credentials. Saved tool settings can contain sensitive paths or values.

## Run and rerun

1. Select the executable.
2. Select **Run**.
3. Open **Run details**.
4. Read the output and exit status.
5. Check the generated files before you use them.

To rerun a finished tool, select it and select **Run** again. Check the active profile and arguments before each run.

**Stop waiting** stops the wait for a run. It does not mean that the external process stopped.

Use **Recent runs** to inspect saved run records. Removal of an executable does not remove those records or stop an active tool.

## Generated output

Managed output is separate from the original mod archives. The selected profile owns its generated files.

1. Select the output folder in the tool settings.
2. Configure the tool to write to that folder.
3. Run the tool.
4. Inspect the output in the generated-output controls.
5. Review unfinished or failed output before deployment.
6. Apply the offered output action only after you check its files.

A zero exit code does not prove that the output is correct. Read the tool's messages and check the files that it produced.

FNIS has dedicated [run and rerun controls](../skyrim/#fnis). Use those controls for the profile's FNIS output.

## Related topics

- [Set up Wine or Proton](../first-profile/#linux-launch-setup).
- [Generated-file problems](../troubleshooting/#tools-and-generated-files).
- [Profiles and private files](../profiles/).
