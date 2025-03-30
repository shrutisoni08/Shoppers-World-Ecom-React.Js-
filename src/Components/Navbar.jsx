import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // authInfo
  const {user} = useContext(AuthContext);
 console.log(user);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* Header top section */}
        <div className={`header-top d-md-none ${socialToggle ? "oper" : ""}`}>
          <div className="container">
            <div className="header-top-area">
              <Link to="/signup" className="lab-btn me-3">
                <span>Create Account</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Header bottom section */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              {/* Logo */}
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/images/logo/logo.png" className="w-25 h-auto" alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Menu area */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>

                {/* Login & Sign-up */}
                <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                  Create Account
                </Link>
                <Link to="/login" className="d-none d-md-block">
                  Log In
                </Link>

                {/* Menu toggler */}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {/* Social toggler */}
                <div
                  className="ellepsis-bar d-md-none"
                  onClick={() => setSocialToggle(!socialToggle)}
                >
                  <i className="icofont-info-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
