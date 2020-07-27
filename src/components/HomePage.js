import React, { Component } from "react";
import NavBar from "./NavBar";
import cover from "../assets/images/chamb-cover.jpg";
import { Style } from "react-style-tag";
import axios from "axios";
import createIcon from "../assets/images/create-icon.jpg";
import getIcon from "../assets/images/get-icon.jpg";
import xpannIcon from "../assets/images/xpann-icon.jpg";
import exitingIcon from "../assets/images/exciting_img-01.jpg";
import exitingIcon2 from "../assets/images/exciting_img-02.jpg";
import pcIcon from "../assets/images/supplier-pc-img.png";
import SimpleSlider from "./ReactSlick";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      landingProducts: [],
    };
  }

  componentWillMount() {
    axios
      .get(" https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data")
      .then((result) => {
        this.setState({
          landingProducts: result.data[0].landingSection,
        });
        console.log(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <NavBar />
        <div
          className="banner"
          style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
        >
          <div className="banner-2">
            <div
              style={{
                transition: "0.6s",

                zIndex: "2",
                width: "100%",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "36px",
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Find Your next Product here
              </h2>
              <div
                style={{
                  display: "flex",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="text"
                  style={{
                    padding: "10px",
                    margin: "10px",
                    outline: "none",
                    background: "transparent",
                    border: "0",
                    borderBottom: "2px solid #fff",
                    fontSize: "18px",
                    color: "#fff",
                    width: "100%",
                    fontFamily: "sans-serif",
                    fontWeight: "300 !important",
                  }}
                  placeholder="Search Something You Want"
                />

                <input
                  type="submit"
                  style={{
                    backgroundColor: "#fbb72c",
                    outline: "none",
                    border: "none",
                    width: "200px",
                    height: "50px",
                    margin: "10px",
                    color: "#222",
                    opacity: "1",
                    display: "inline-block",
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    fontWeight: "500",
                    borderRadius: "5px",
                  }}
                />
              </div>
              {this.state.landingProducts ? (
                <div
                  className="product-box"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    padding: "20px",
                    transition: "0.6s",
                    overflow: "hidden",
                    gridGap: "10px",
                  }}
                >
                  {this.state.landingProducts.map((product) => {
                    return (
                      <Link
                        to={"/products/" + product.id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="products"
                          style={{
                            background: "#616161",
                            height: "100%",
                            margin: "10px",
                            borderBottom: "3px solid #fff",
                            transition: "0.6s",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              fontFamily: "sans-serif",
                              fontWeight: "500",
                              fontSize: "24px",
                            }}
                          >
                            {product.name}
                          </p>
                          <img
                            src={product.preview_image}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p>no products</p>
              )}
            </div>
          </div>
        </div>
        <section
          className="sec"
          id="services"
          style={{ background: "#f4f9fd" }}
        >
          <div className="content">
            <div className="services">
              <div className="box">
                <div id="iconBx">
                  <img src={xpannIcon} />
                </div>
                <div id="content">
                  <h2>"Chamb" Your Business</h2>
                  <p style={{ color: "rgba(0,0,0,0.6)" }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud.
                  </p>
                </div>
              </div>
              <div className="box">
                <div id="iconBx">
                  <img src={createIcon} />
                </div>
                <div id="content">
                  <h2>Create and Add</h2>
                  <p style={{ color: "rgba(0,0,0,0.6)" }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud.
                  </p>
                </div>
              </div>
              <div className="box">
                <div id="iconBx">
                  <img src={getIcon} />
                </div>
                <div id="content">
                  <h2>Get Inspired</h2>
                  <p style={{ color: "rgba(0,0,0,0.6)" }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="sec"
          id="services"
          style={{
            margin: "50px auto",
            background: "#f4f9fd",
          }}
        >
          <div className="content" style={{ verticalAlign: "middle" }}>
            <div className="info">
              <div className="box" style={{ margin: "auto", padding: "50px" }}>
                <div id="iconBx">
                  <img src={exitingIcon} />
                </div>
                <div id="content">
                  <p style={{ textAlign: "left", fontSize: "26px" }}>
                    Explore <span style={{ fontWeight: "bold" }}>exciting</span>{" "}
                    and exotic products tailored to you.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.7)",
                      fontWeight: "400",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    asperiores consectetur cumque dolorem eaque excepturi facere
                    fugit inventore iste iusto maxime molestias numquam
                    perspiciatis porro quaerat.
                  </p>
                </div>
              </div>
              <div
                className="box"
                style={{ margin: "auto", padding: "0 50px" }}
              >
                <div id="iconBx">
                  <img src={exitingIcon2} />
                </div>
                <div id="content">
                  <p style={{ textAlign: "left", fontSize: "26px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      List your products on
                    </span>
                    chamb and grow connections
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.7)",
                      fontWeight: "400",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    asperiores consectetur cumque dolorem eaque excepturi facere
                    fugit inventore iste iusto maxime molestias numquam
                    perspiciatis porro quaerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="sec"
          id="services"
          style={{
            margin: "50px auto",
            background: "#f4f9fd",
          }}
        >
          <div
            className="pc"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <div className="box" style={{ padding: "50px" }}>
              <p>SUPPLIER</p>
              <div id="content">
                <p style={{ textAlign: "left", fontSize: "30px", margin: "0" }}>
                  Grow your store
                  <p style={{ fontWeight: "300", margin: "0" }}>
                    With a new sales channel
                  </p>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "rgba(0,0,0,0.7)",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  asperiores consectetur cumque dolorem eaque excepturi facere
                  fugit inventore iste iusto maxime molestias numquam
                  perspiciatis porro quaerat.
                </p>
              </div>
            </div>
            <div>
              <img src={pcIcon} style={{ width: "100%" }} />
            </div>
          </div>
        </section>
        <section>
          <SimpleSlider />
        </section>
        <Footer />
        <Style>{`
           .banner{
                    position:relative;
                    margin-top:60px;
                    max-width:100%;
                    min-height:100vh;
                    transition:0.5s;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-evenly;
                    align-items:center;
                    overflow:hidden;
                }
            
                 .banner-2::before{
                  content:"";
                  position:absolute;
                  width:100%;
                  height:100%;
                  background:#222;
                  opacity:0.6;
                  padding-bottom:100px;    
                }
                .banner-2{
                    width:100%;
                    min-height:inherit;
                    transition:0.5s;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-evenly;
                    align-items:center;
                    padding-bottom:100px;
                }
                input[type=text]::placeholder{
                    color:#fff;
                    font-family:sans-serif;
                    font-size:20px;
                    font-weight:300;
                                        
                    }
                .products:hover{
                    background:#f0f0f0 !important;
                    transition:0.6s;
                    }
                .products:hover p{
                    color:#222 !important;
                    }
                    
                sec{
                    padding:100px;
                    display:flex;
                    justify-content:center;
                    align-content:center;   
                    }
                        
                    .sec .content{
                       
                        position:relative;
                       
                        width:100%;
                        align-content:center;
                    }
                    
                    .mxw800p{
                        max-width:800px;
                        margin:0 auto;
                    }
                    .services{
                        position:relative;
                        display:grid;
                        grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
                        grid-gap:30px;
                        max-width:100%;
                        margin-top:40px;    
                    }
                    
                    
                    .services .box{
                        background:#fff;
                        padding:20px;
                        box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                        border-radius:3px;
                    }
                    
                    .services .box .iconBx{
                        margin-top:25px;
                        
                    }
                    
                    .services .box .iconBx img{
                        max-width:150px;
                        margin-bottom:15px;
                    }
                    
                    .services .box h2{
                        font-size:22px;
                        margin-bottom:10px;
                      
                        font-weight:400;
                    }
                    
                    .info{
                        position:relative;
                        display:grid;
                        grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
                        grid-gap:30px;
                        max-width:100%;
                        margin-top:40px;    
                    }
                   .info{
                        
          `}</Style>
      </div>
    );
  }
}

export default HomePage;
