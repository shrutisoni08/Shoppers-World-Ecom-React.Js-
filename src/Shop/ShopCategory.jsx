import React from "react";
import Data from "../products.json";
const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widegt-header">
        <h5 className="ms-2">All Category</h5>
      </div>
      <div className="">
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button
              onClick={() => filterItem(val)}
              className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
              key={id}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
