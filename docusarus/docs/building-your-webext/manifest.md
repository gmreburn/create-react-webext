---
sidebar_position: 1
---

# Manifest

The [`manifest.json`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file is the only file that every extension using WebExtension APIs must contain. The file is located in the `src` directory and must exist for the project to build.

You specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality (such as background scripts, content scripts, and browser actions). The build system can resolve HTML, JavaScript and TypeScript paths relative to the `src` directory.

It is a [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)-formatted file, with one exception: it is allowed to contain "//"-style comments.
