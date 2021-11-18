---
sidebar_position: 2
---

# Adding a browser action

A browser action is a button that your extension adds to the browser's toolbar. The button has an icon, and may optionally have a popup whose content is specified using HTML, CSS, and JavaScript.

If you supply a popup, then the popup is opened when the user clicks the button, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's background scripts when the user clicks the button.

You can also create and manipulate browser actions programmatically using the browserAction API.

```json
"browser_action": {
  "default_popup": "popup/geo.jsx",
}
```

```jsx
# ./src/popup/geo.jsx
import React from "react";
import ReactDOM from "react-dom";
import Panel from "./components/Panel.jsx";

browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
	ReactDOM.render(
		<Panel tab={windowInfo.tabs.find((tab) => tab.active)} />,
		document.body
	);
});
```
