import React, { useState } from "react";
import { Link } from "react-router";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="widget widget-search">
        <form className="search-wrapper mb-3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            defaultValue={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="icofont-search"></i>
          </button>
        </form>
        {/* search result */}
        <div>
          {searchTerm &&
            filterProducts.map((product) => (
              <Link className="flex g-3 p-2">
                <div>
                  <div className="pro-thumb h-25">
                    <img
                      className="flex-{grow|shrink}-0"
                      src={product.img}
                      alt=""
                      width={70}
                    />
                  </div>
                </div>
                <div className="prodcut-content">
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>{product.price}</h6>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
