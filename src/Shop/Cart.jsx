import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../../public/assets/images/shop/del.png";
import CheckOut from "./CheckOut";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // fetch cart items from local storage
    const storageCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storageCartItems);
  }, []);
  // calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  //   handle quantity increase
  const handleIncrease = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //   clear cart data
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // update new cart
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  // cart subtotal
  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);
  //   order total
  const orderTotal = cartSubTotal;
  return (
    <>
      <div className="">
        <PageHeader title={"Shop Cart"} curPage={"Cart"} />
        <div className="shop-cart padding-tb">
          <div className="container">
            <div className="section-wrapper">
              {/* cart top */}
              <div className="cart-top">
                <table>
                  <thead>
                    <tr>
                      <th className="cat-product">Product</th>
                      <th className="cat-price">Price</th>
                      <th className="cat-quantity">Quantity</th>
                      <th className="cat-toprice">Total</th>
                      <th className="cat-edit">Edit</th>
                    </tr>
                  </thead>
                  {/* table body */}
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="product-item cat-product">
                          <div className="p-thumb">
                            <Link to="/shop">
                              <img src={item.img} alt="" />
                            </Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className="cat-price">{item.price}</td>
                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div
                              className="des qtybutton"
                              onClick={() => handleDecrease(item.id)}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="cart-plus-minus-box"
                              name="qtybutton"
                              value={item.quantity}
                              readOnly
                            />
                            <div
                              className="inc qtybutton"
                              onClick={() => handleIncrease(item.id)}
                            >
                              +
                            </div>
                          </div>
                        </td>
                        <td className="cat-toprice">
                          ${calculateTotalPrice(item)}
                        </td>
                        <td className="cat-edit">
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Cart top  */}
              {/* cart bottom */}
              <div className="cart-bottom">
                {/* checkout box */}
                <div className="cart-checkout-box">
                  <form className="coupon">
                    <input
                      className="cart-page-input-text"
                      type="text"
                      id="coupon"
                      name="coupon"
                      placeholder="Enter your coupon code"
                    />
                    <input type="submit" value="Apply coupon" />
                  </form>

                  <form className="cart-checkout">
                    <input type="submit" value="Update Cart" />
                    <CheckOut />
                  </form>
                </div>
                {/* checkout box */}

                {/* shopping box */}
                <div className="shiping-box">
                  <div className="row gap-1">
                    <div className="col-md-6 col-12">
                      <div className="calculate-shiping">
                        <h3>Calculate shiping</h3>
                        <div className="outline-select">
                          <select>
                            <option value="in">India</option>
                            <option value="uk">United Kingdom (UK)</option>
                            <option value="us">United States (USA)</option>
                            <option value="bd">Bangladesh</option>
                            <option value="np">Nepal</option>
                          </select>
                          <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </div>
                        <div className="outline-select shiping-select">
                          <select>
                            <option value="in">New Delhi</option>
                            <option value="uk">London</option>
                            <option value="us">New York</option>
                            <option value="bd">Dhaka</option>
                          </select>
                          <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="Postcode/ZIP"
                          className="cart-page-input-text"
                        />
                        <button type="submit">Update Adress</button>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="cart-overview">
                        <h3>Cart Total</h3>
                        <ul className="lab-ul">
                          <li>
                            <span className="pull-left">Cart Subtotal</span>
                            <p className="pull-right">$ {cartSubTotal}</p>
                          </li>
                          <li>
                            <span className="pull-left">Shipping</span>
                            <p className="pull-right">Free Shipping</p>
                          </li>
                          <li>
                            <span className="pull-left">Order Total</span>
                            <p className="pull-right">
                              $ {orderTotal.toFixed(2)}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
