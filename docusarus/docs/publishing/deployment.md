---
sidebar_position: 1
---

# Publish your extension

Publishing your extension is a great way to help the community discover your addon. Create React WebExt will bundle your extension for major browser vendors.

```shell
npm run build
```

Outputs:

- `./my-app-1.0.0-src.zip` - the source code for the extension. Required by must extension marketplaces.
- `./addon/my-app-1.0.0.zip` - the unsigned bundled addon that can be loaded in supported browsers.

Create React WebExt will use the title and version properties defined in `./src/manifest.json` and `./package.json` for the build output.

```json
// ./src/manifest.json
{
	"name": "my-app",
	"version": "1.0.0"
}
```
