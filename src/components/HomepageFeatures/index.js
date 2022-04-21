import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "智能制造",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <li>稳定：保证健壮性、可维护性、和方便的故障定位、Log信息等</li>
      </>
    ),
  },
  {
    title: "IoT",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <li>开放：打破产品、部门、科室、团队之间的壁垒，协同工作</li>
      </>
    ),
  },
  {
    title: "AR/XR",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <li>开放：打破产品、部门、科室、团队之间的壁垒，协同工作</li>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
