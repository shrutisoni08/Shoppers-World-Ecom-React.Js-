import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router";
import PageHeader from "../Components/PageHeader";
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";
import blogimg from "../assets/images/blog/single/02.jpg"
import blogimg2 from "../assets/images/blog/single/01.jpg"


const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const BlogPage = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Blog Page"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-container-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt="Blog Image"
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3 className="title">{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Voluptates excepturi
                                  veritatis ad odit eveniet expedita eos
                                  repellendus rem iusto a recusandae blanditiis
                                  sint, aliquid vel deserunt veniam harum! Id
                                  minus facilis modi doloribus aspernatur
                                  recusandae nisi expedita rem saepe quaerat.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem, eveniet
                                    necessitatibus? Ab totam itaque sed odio
                                    quis. Cumque labore iure eos porro magni
                                    non, dolore harum tempore. Officia,
                                    asperiores maxime?
                                  </p>
                                  <cite>
                                    <a href="#">...Melisa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Quasi odio atque doloremque
                                  mollitia voluptates! Aut cum nulla sequi vel
                                  dolore, eum nesciunt exercitationem, obcaecati
                                  voluptas dolores, sed delectus! Possimus
                                  voluptatibus quaerat suscipit qui neque
                                  cumque, harum explicabo quod dignissimos
                                  itaque voluptatum earum minima error odio
                                  minus nisi cum eius? Quo voluptatem quod fugit
                                  enim similique ut necessitatibus illo quasi
                                  fugiat?
                                </p>
                                <img
                                  src={blogimg2}
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Fuga at tempore voluptas,
                                  vel rem iusto corrupti adipisci nemo quo
                                  cumque et ex expedita aliquid doloribus
                                  facilis eveniet libero quibusdam sequi nam
                                  atque debitis ratione error quas officia!
                                  Dolores accusamus vel nisi repellat amet,
                                  beatae deserunt quis illum, distinctio ad sed.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src={blogimg}
                                    alt=""
                                  />
                                  <a href="#" className="video-button popup">
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Sequi laborum tempora omnis
                                  corrupti quisquam rem ipsa. Est, fugiat!
                                  Deleniti porro iste beatae ullam amet
                                  laboriosam, ipsam voluptas deserunt dolorum
                                  atque, ratione quod veritatis voluptatibus
                                  esse quos officia possimus incidunt. Est
                                  aliquid error ipsum nulla repudiandae cum
                                  accusamus obcaecati, hic eos!
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          Next Blog <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
