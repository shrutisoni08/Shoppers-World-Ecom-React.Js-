import React, { useState } from "react";
import Ratting from "../Components/Ratting";
import { Link } from "react-router";
import img1 from "../assets/images/categoryTab/01.jpg";
import img2 from "../assets/images/categoryTab/02.jpg";
import img3 from "../assets/images/categoryTab/03.jpg";
import img4 from "../assets/images/categoryTab/04.jpg";
import img5 from "../assets/images/categoryTab/05.jpg";
import img6 from "../assets/images/categoryTab/06.jpg";
import img7 from "../assets/images/categoryTab/07.jpg";
import img8 from "../assets/images/categoryTab/08.jpg";

import icon1 from "../assets/images/shape-img/icon/01.png";
import icon2 from "../assets/images/shape-img/icon/01.png";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: img1,
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: img2,
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: img3,
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: img4,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: img5,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: img6,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: img7,
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: img8,
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);
  //   category based filtering
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  return (
    <>
      <div className="course-section style-3 padding-tb">
        {/* bg shapes */}
        <div className="course-shape one">
          <img src={icon1} alt="" />
        </div>
        <div className="course-shape two">
          <img src={icon2} alt="" />
        </div>
        {/* main section */}
        <div className="container">
          {/* seaction header */}
          <div className="section-header">
            <h2>{title}</h2>
            <div className="course-filter-group">
              <ul className="lab-ul">
                <li onClick={() => setItems(ProductData)}>All</li>
                <li onClick={() => filterItem("Shoes")}>Shoes</li>
                <li onClick={() => filterItem("Bags")}>Bags</li>
                <li onClick={() => filterItem("Phones")}>Phones</li>
                <li onClick={() => filterItem("Beauty")}>Beauty</li>
              </ul>
            </div>
          </div>
          {/* section body */}
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
              {items.map((product) => (
                <div key={product.id} className="col">
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={product.imgUrl} alt="" />
                        <div className="cousre-category">
                          <div className="course-cate">
                            <a href="#">{product.cate}</a>
                          </div>
                          <div className="course-review">
                            <Ratting />
                          </div>
                        </div>
                      </div>

                      {/* content */}
                      <div className="course-content">
                        <Link to={`/shop/${product.id}`}>
                          <h5>{product.title}</h5>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/" className="ca-name">
                              {product.brand}
                            </Link>
                          </div>
                          <div className="course-price">{product.price}</div>
                        </div>
                      </div>
                    </div>
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

export default CategoryShowCase;
