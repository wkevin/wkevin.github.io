import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHistory from "@site/src/components/HomepageHistory";

function HomepageHeader({ siteConfig }) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src={require("@site/static/img/logo.svg").default} />
        <h1 className="hero__title" style={{ fontSize: 85 }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{ fontSize: 35 }}>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ME Team is your friends."
    >
      <HomepageHeader siteConfig={siteConfig} />
      <main>
        <HomepageFeatures />
        {/* <HomepageHistory siteConfig={siteConfig} /> */}
      </main>
    </Layout>
  );
}
