import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Less to learn",
		Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Create React WebExt was designed from the ground up to get your
				extension up and running quickly. You don't need to learn and configure
				many build tools. Instant reloads help you focus on development.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				Create React WebExt lets you focus on your extension, and we&apos;ll do
				the chores. Instant reloads help you focus on development. When it's
				time to deploy, your bundles are optimized automatically.
			</>
		),
	},
	{
		title: "No Lock-In",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				Under the hood, we use webpack, Babel, ESLint, and other amazing
				projects to power your extension. If you ever want an advanced
				configuration, you can ”eject” and edit config files directly.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
