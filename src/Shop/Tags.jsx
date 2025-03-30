import React from "react";

const title = "Most Popular Tags";

const tagsList = [
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
  {
    link: "#",
    text: "videohive",
  },
  {
    link: "#",
    text: "audiojungle",
  },
  {
    link: "#",
    text: "3docean",
  },
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
];

const Tags = () => {
  return (
    <>
      <div className="widget widget-tags">
        <div className="widget-header">
          <h3 className="title">{title}</h3>
        </div>
        <ul className="widget-wrapper">
          {tagsList.map((val, i) => (
            <li key={i} className="d-flex ">
              <a href={val.link}>{val.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tags;
