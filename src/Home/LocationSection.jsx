import React from "react";
import { Link } from "react-router";
import avatar1 from "../assets/images/clients/avater.jpg";

const title = "More Then 60,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: avatar1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Joined From USA",
  },
];

const LocationSection = () => {
  return (
    <>
      <div className="clients-section style-2 padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
          </div>
          {/* main content */}
          <div className="section-wrapper">
            <div className="clients">
              {clientsList.map((val, i) => (
                <div className="client-list" key={i}>
                  <Link to="/signup" className="client-content">
                    <span>{val.text}</span>
                  </Link>
                  <div className="client-thumb">
                    <img src={val.imgUrl} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSection;
