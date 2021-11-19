# Create React WebExt [![Generic badge](https://img.shields.io/badge/Experimental-yes-blue.svg)](https://shields.io/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

**WARNING - This concept is under development and not ready for public use. Please contact me if you are interested in contributing to this project.**

Create React web extensions with no build configuration.

- [Creating A Web Extension](#creating-a-webext) – How to create a new web extension.
- [React Web Extension User Guide](https://gmreburn.github.io/create-react-webext/docs/getting-started/intro/) - How to develop web extensions bootstrapped with Create React WebExt.

Create React WebExt works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/gmreburn/create-react-webext/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/gmreburn/create-react-webext/discussions).

## Quick Overview

```sh
npx create-react-app my-app --template webext
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Your web extension will open in a new web browser window.<br>
When you’re ready to deploy to production, create a package with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating a web extension

**You’ll need to have Node 14.0.0 or later version on your local development machine**. We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new web extension, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app --template webext
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

<!--
npm does not pass value of "--template"

### npm

```sh
npm init react-app my-app --template webext
```

_`npm init <initializer>` is available in npm 6+_
-->

### Yarn

```sh
yarn create react-app my-app --template webext
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
└── src
	├── icons
	│	├── logo48.png
	│	└── logo96.png
	└── manifest.json
```

No configuration or complicated folder structures, only the files you need to build your web extension.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the web extension in development mode.<br>
Opens a new web browser window with the extension loaded.

The extension will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the extension for production to `./my-app-1.0.0.xpi`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your extension is ready to be published.

## User Guide

You can find detailed instructions on using Create React WebExt and many tips in [its documentation](https://gmreburn.github.io/create-react-webext).

## How to Update to New Versions?

Please refer to the [User Guide](https://gmreburn.github.io/create-react-webext/docs/updating-to-new-releases) for this and other information.

## Philosophy

- **Less to learn:** Create React WebExt was designed from the ground up to get your extension up and running quickly. You don't need to learn and configure many build tools. Instant reloads help you focus on development.

- **Focus on What Matters:** Create React WebExt lets you focus on your extension, and we'll do the chores. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.

- **No Lock-In:** Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your extension. If you ever want an advanced configuration, you can ”eject” and edit config files directly.

<!--
## What’s Included?

Your environment will have everything you need to build a modern single-page React web extension:

- React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) criteria. (_Note: Using the service worker is opt-in as of `react-scripts@2.0.0` and higher_)
- Hassle-free updates for the above tools with a single dependency.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.
-->

<!--
## Popular Alternatives

Create React WebExt is a great fit for:

- **Learning React** in a comfortable and feature-rich development environment.
- **Starting new single-page React applications.**
- **Creating examples** with React for your libraries and components.

Here are a few common cases where you might want to try something else:

- If you want to **try React** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://reactjs.org/docs/try-react.html).

- If you need to **integrate React code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html).

- If you need to **publish a React component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#react-components-and-libraries), as well as [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/).

- If you want to do **server rendering** with React and Node.js, check out [Next.js](https://nextjs.org/) or [Razzle](https://github.com/jaredpalmer/razzle). Create React WebExt is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

- If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/). Unlike Create React WebExt, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.

- Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [React preset](https://neutrino.js.org/packages/react/).

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, [follow this guide](https://reactjs.org/docs/add-react-to-an-existing-app.html).
-->

<!--
## Contributing

We'd love to have your helping hand on `create-react-webext`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.
-->

<!--
## Supporting Create React WebExt

Create React WebExt is a community maintained project and all contributors are volunteers. If you'd like to support the future development of Create React WebExt then please consider donating to our [Open Collective](https://opencollective.com/create-react-app).
-->

## License

Create React WebExt is open source software [licensed as MIT](https://github.com/gmreburn/create-react-webext/blob/main/LICENSE). The Create React App logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
