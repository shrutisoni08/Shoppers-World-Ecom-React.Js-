import { StrictMode } from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "./assets/css/icofont.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Home/Home.jsx";
import Blog from "./Blog/Blog.jsx";
import BlogPage from "./Blog/BlogPage.jsx";
import Shop from "./Shop/Shop.jsx";
import ProductDisplay from "./Shop/ProductDisplay.jsx";
import Cart from "./Shop/Cart.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Login from "./Components/Login.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Signup from "./Components/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogPage /> },
      { path: "/shop", element: <Shop /> },
      { path: "shop/:id", element: <ProductDisplay /> },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
