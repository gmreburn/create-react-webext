---
sidebar_position: 4
---

# Adding a sidebar

A [sidebar](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) is a pane that is displayed at the left-hand side of the browser window, next to the web page. The browser provides a UI that enables the user to see the currently available sidebars and to select a sidebar to display.

The sidebar_action key enables you to define the default properties for the sidebar. You can change these properties at runtime using the [sidebarAction](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) API.

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar/index.jsx",
}
```

```jsx
# ./src/sidebar/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar.jsx";

browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
	ReactDOM.render(
		<Sidebar tab={windowInfo.tabs.find((tab) => tab.active)} />,
		document.body
	);
});
```
