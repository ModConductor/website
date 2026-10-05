Mod Conductor 0.2.0 provides Windows and Linux packages for x86-64 computers. These instructions use the released files.

## Release files

1. Open [Downloads](../../download/).
2. Select the package for your system.
3. Keep the complete package together after extraction.

The [release page](https://github.com/ModConductor/ModConductor/releases/tag/v0.2.0) includes SHA-256 checksums. Windows packages are unsigned.

Do not bypass a security warning for a file from an unknown source. Check the release source before you continue.

## Windows

### Installer

1. Download `ModConductor-0.2.0-win-x64-setup.exe`.
2. Open the installer.
3. Follow the installer prompts.
4. Open Mod Conductor from the installed shortcut.

### Portable ZIP

1. Download `modconductor-v0.2.0-win-x64.zip`.
2. Extract the ZIP into a folder that you can write to.
3. Open `mod_conductor.exe` inside the extracted folder.

Do not move only the executable. It needs the other files in the package.

### Scoop

If you use Scoop, add the [project bucket](https://github.com/alsi-lawr/scoop-bucket). Run these commands in PowerShell:

```powershell
scoop bucket add alsi-lawr https://github.com/alsi-lawr/scoop-bucket
scoop install alsi-lawr/modconductor
```

The public manifest points to the 0.2.0 portable ZIP.

## Linux

### AppImage

1. Download `modconductor-0.2.0-linux-x64.AppImage`.
2. Open a terminal in the download folder.
3. Run these commands:

```sh
chmod +x modconductor-0.2.0-linux-x64.AppImage
./modconductor-0.2.0-linux-x64.AppImage
```

If the AppImage cannot mount, check the FUSE requirements for your distribution. The portable archive is another route.

### Debian or Ubuntu

Open a terminal in the download folder. Install the released package:

```sh
sudo apt install ./ModConductor_0.2.0-1_amd64.deb
```

Open Mod Conductor from the application menu.

### Fedora

Open a terminal in the download folder. Install the released package:

```sh
sudo dnf install ./modconductor-0.2.0-1.fc44.x86_64.rpm
```

This RPM targets Fedora 44. Compatibility with other RPM distributions is not confirmed.

### Portable archive

Open a terminal in the download folder. Extract and start the released archive:

```sh
tar -xzf modconductor-v0.2.0-linux-x64.tar.gz
./modconductor-v0.2.0-linux-x64/bin/modconductor
```

Keep `bin` and `app` inside the extracted folder. The launcher needs both folders.

### Homebrew on Linux

If you use Homebrew on Linux, install the [project cask](https://github.com/alsi-lawr/homebrew-tap/blob/master/Casks/modconductor.rb):

```sh
brew tap alsi-lawr/tap
brew install --cask alsi-lawr/tap/modconductor
```

This cask installs the Linux AppImage. It does not provide a macOS application.

## Nix

The upstream flake provides an `x86_64-linux` package and application. Nix needs support for flakes and `nix-command`.

To run the upstream application without a profile installation:

```sh
nix run github:ModConductor/ModConductor#modconductor
```

For a declarative NixOS installation, add this input to your existing flake:

```nix
inputs.modconductor.url = "github:ModConductor/ModConductor";
```

Pass `modconductor` from the flake inputs into your NixOS module arguments. For example, use `specialArgs = { inherit modconductor; };`.

Add the package to that module:

```nix
{ modconductor, ... }:
{
  environment.systemPackages = [
    modconductor.packages.x86_64-linux.default
  ];
}
```

For Home Manager, use the same package in `home.packages` and pass the input with `extraSpecialArgs`.

Apply the configuration through your usual declarative workflow. Keep the flake lock file to retain the selected source revision.

## Other package indexes

Availability was checked on October 5, 2026.

| Route | Public status | Available alternative |
| --- | --- | --- |
| WinGet | No public manifest confirmed | Windows installer or Scoop |
| Chocolatey | No public version in the feed | Windows installer or Scoop |
| AUR | `modconductor-bin` is not listed | AppImage or portable archive |
| nixpkgs | No public package confirmed | Upstream Nix flake |

A package recipe in a release does not mean that its package index accepted it.

## Next steps

- [Create your first profile](../first-profile/).
- [Check installation problems](../troubleshooting/#installation).
