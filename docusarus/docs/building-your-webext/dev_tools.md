# Extend the browser's dev tools

You can use WebExtensions APIs to extend the browser's built-in developer tools. To create a devtools extension, include the "devtools_page" key in manifest.json:

```json
"devtools_page": "devtools/my-page.jsx"
```

The value of this key is a URL pointing to an HTML, JavaScript or TypeScript file that will be bundled with your extension. The URL should be relative to the `manifest.json` file itself.

The file defines a special page in the extension, called the devtools page.

```jsx
# ./src/devtools/my-page.jsx
import React from "react";
import ReactDOM from "react-dom";
import MyPage from "./components/MyPage.jsx";

browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
	ReactDOM.render(
		<MyPage tab={windowInfo.tabs.find((tab) => tab.active)} />,
		document.body
	);
});
```
