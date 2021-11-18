---
sidebar_position: 3
---

# Adding a page action

A page action is an icon that your extension adds inside the browser's URL bar.

Your extension may optionally also supply an associated popup whose content is specified using HTML, CSS, and JavaScript.

If you supply a popup, then the popup is opened when the user clicks the icon, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's [background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages) when the user clicks the icon.

You can also create and manipulate page actions programmatically using the [pageAction API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction).

Page actions are like browser actions, except that they are associated with particular web pages rather than with the browser as a whole. If an action is only relevant on certain pages, then you should use a page action and display it only on relevant pages. If an action is relevant to all pages or to the browser itself, use a browser action.

While browser actions are displayed by default, page actions are hidden by default. They can be shown for a particular tab by calling [pageAction.show()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show), passing in the tab's id. You can also change this default behavior using the show_matches property.

```json
"page_action": {
  "default_popup": "popup/geo.jsx"
}
```

The value of the default_popup key is a URL pointing to an HTML, JavaScript or TypeScript file that will be bundled with your extension. The URL should be relative to the `manifest.json` file itself.

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
