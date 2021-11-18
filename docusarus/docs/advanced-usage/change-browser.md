# Change the browser

Create React WebExt will load the extension in your system's default browser.

```shell
npm start
```

You can specify a browser in the `package.json`:

```diff
 "scripts": {
-    "start": "react-webext-scripts start",
+    "start": "react-webext-scripts start:firefox",
}
```
