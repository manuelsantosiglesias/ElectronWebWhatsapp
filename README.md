# ElectronWebWhatsapp

A simple app with electron for webwhatsapp with educational purposes.

## How to run?

Just node index.js and run

## How to package?

Just use electron-packager to do a binary.

Install local with:
npm install electron-packager --save-dev

Or install global with:
npm install electron-packager -g

electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
Arch and platform can be omited.

Examples:

Darwin
electron-packager . ElectronWebWhatsapp --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds

Linux (x86/x86_64)
electron-packager . ElectronWebWhatsapp --overwrite --platform=linux --arch=x64 --prune=true --out=release-builds

Windows
electron-packager . ElectronWebWhatsapp --overwrite --asar=true --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Electron Webwhatsapp\"

Can be done with electron-forge on future release
