import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeader from "../Components/PageHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDetails from "./ProductDetails";
import Review from "./Review";
import PopularPost from "../Shop/PopularPost";
import Tags from "../Shop/Tags";

const ProductDisplay = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    fetch("https://shoppers-world.netlify.app/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  //   console.log(product);
  const result = product.filter((p) => p.id === id);
  // console.log(result);
  return (
    <>
      <div>
        <PageHeader
          title={"OUR SHOP SINGLE"}
          curPage={"Shop / Selected Product"}
        />

        <div className="shop-single padding-tb aside-bg">
          <div className="container">
            <div className="row justify-content-center">
              {/* Left side */}
              <div className="col-lg-8 col-12">
                <article>
                  <div className="product-details">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-12">
                        <div className="product-thumb">
                          <div className="swiper-container pro">
                            <Swiper
                              spaceBetween={30}
                              slidesPerView={1}
                              loop={result.length > 1}
                              autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                              modules={[Autoplay]}
                              navigation={{
                                prevEl: "pro-single-prev",
                                nextEl: "pro-single-next",
                              }}
                              className="mySwiper"
                            >
                              {result.map((item, i) => (
                                <SwiperSlide key={i}>
                                  <div className="single-thumb">
                                    <img src={item.img} alt="" />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <div className="pro-single-prev">
                              <i className="icofont-rounded-right"></i>
                            </div>
                            <div className="pro-single-next">
                              <i className="icofont-rounded-left"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="post-content">
                          <div>
                            {result.map((item) => (
                              <ProductDetails key={item.id} item={item} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="review">
                    <Review />
                  </div>
                </article>
              </div>

              {/* Right side */}
              <div className="col-lg-4 col-12">
                <aside className="ps-lg-4">
                  <PopularPost />
                  <Tags />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
