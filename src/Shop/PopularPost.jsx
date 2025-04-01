import React from "react";
import { Link } from "react-router";
import img1 from "../assets/images/blog/10.jpg";
import img2 from "../assets/images/blog/11.jpg";
import img3 from "../assets/images/blog/12.jpg";
import img4 from "../assets/images/blog/09.jpg";

const title = "Most Popular Post";
const postList = [
  {
    id: 1,
    imgUrl: img1,
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: img2,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: img3,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: img4,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];

const PopularPost = () => {
  return (
    <>
      <div className="widget widget-post">
        <div className="widget-header">
          <h3 className="title">{title}</h3>
        </div>
        <ul className="widget-wrapper">
          {postList.map((blog, i) => (
            <li key={i} className="d-flex flex-wrap justify-content-between">
              <div className="post-thumb">
                <Link to={`/blog/${blog.id}`}>
                  <img src={blog.imgUrl} alt="" />
                </Link>
              </div>
              <div className="post-content">
                <Link to={`/blog/${blog.id}`}>
                  <h5>{blog.title}</h5>
                </Link>
                <p>{blog.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopularPost;
