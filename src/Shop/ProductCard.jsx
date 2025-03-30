import React from "react";
import { Link } from "react-router";
import Ratting from "../Components/Ratting";

const ProductCard = ({ gridList, products }) => {
  return (
    <>
      <div
        className={`shop-product-wrap row justify-content-center ${
          gridList ? "grid" : "list"
        }`}
      >
        {products.map((product, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>
                {/* product link */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to="/cart-page">
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>
              {/* product content */}

              <div className="product-content">
                <h6>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h6>
                <p className="productRating">
                  <Ratting />
                </p>
                <p>${product.price}</p>
              </div>
            </div>

            {/* list style */}
            <div className="product-list-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>
                {/* product link */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to="/cart-page">
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>
              {/* product content */}

              <div className="product-content">
                <h6>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h6>
                <p className="productRating">
                  <Ratting />
                </p>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
