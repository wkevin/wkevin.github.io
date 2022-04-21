import React from "react";
import "./styles.history.css";
import { Fade } from "react-awesome-reveal";

const COLORS = {
  framework: "#fc85c6",
  plan: "#83e7fc",
  milestone: "#83fc83",
};

const items = [
  {
    label: "四川大学",
    description: "",
    color: COLORS.framework,
    datetime: "1997.09 - 2001.07",
  },
  {
    label: "重庆邮电学院",
    description: "",
    color: COLORS.milestone,
    datetime: "2022.09 - 2025.07",
  },
  {
    label: "中兴通讯",
    description: "",
    color: COLORS.milestone,
    datetime: "2005.07 - ",
  },
].map((item) => {
  return (
    <li key={item.title}>
      <Fade triggerOnce direction={"up"}>
        <div className="fadediv">
          <div className="icon" style={{ backgroundColor: item.color }}>
            <span className={item.icon}></span>
          </div>
          <div className="content">
            <div className="title">{item.label}</div>
            <div className="description">{item.description}</div>
          </div>
          <div>{item.datetime}</div>
        </div>
      </Fade>
    </li>
  );
});

export default function HomepageHistory() {
  return (
    <div id="roadmap" className="container anchorify">
      <h2 style={{ textAlign: "center", position: "relative" }}>My History</h2>

      <ul className="roadmap-legend">
        <li>
          <span style={{ backgroundColor: COLORS.framework }}></span> 教育
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.milestone }}></span> 工作
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.plan }}></span> 项目
        </li>
      </ul>
      <ul className="roadmap">{items}</ul>
    </div>
  );
}
