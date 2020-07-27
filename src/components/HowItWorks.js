import React, { Component } from "react";
import { Style } from "react-style-tag";
import worksIcon from "../assets/images/works-icon-01.png";
import workTcon2 from "../assets/images/works-icon-02.png";
import workIcon3 from "../assets/images/works-icon-03.png";
import icon1 from "../assets/images/icon-b1.png";
import icon2 from "../assets/images/icon-b2.png";
import icon3 from "../assets/images/icon-b3.png";
import icon4 from "../assets/images/icon-b4.png";
import icon5 from "../assets/images/icon-b5.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="howitworks">
          <div style={{ padding: "20px" }}>
            <p style={{ fontSize: "50px", fontWeight: "300", margin: "0" }}>
              How it works if
            </p>
            <p
              style={{
                fontSize: "50px",
                fontWeight: "400",
                margin: "0",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              you're a buyer
            </p>
            <p style={{ fontSize: "24px", fontWeight: "300" }}>
              We explained the buying proces of Chamb in three simple steps. See
              how it works, benefits and FAQ.
            </p>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Sign up for free
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                margin: "10px 15px",
              }}
            >
              <input
                type="text"
                placeholder="Enter your email here"
                style={{
                  padding: "10px 20px",
                  outline: "none",
                  margin: "0 10px",
                  fontSize: "16px",
                  border: "none",
                  width: "100%",
                  borderRadius: "5px",
                  height: "30px",
                }}
              />
              <input
                type="submit"
                style={{
                  padding: "5px 15px",
                  outline: "none",
                  marginLeft: "-90px",
                  border: "4px solid #fff",
                  borderRadius: "5px",
                  height: "50px",
                  fontSize: "16px",
                  backgroundColor: "#fbb72c",
                  color: "#fff",
                }}
              />
            </div>
          </div>
          <div>
            <div className="grid-2">
              <p className="number">01</p>
              <div style={{ marginBottom: "30px" }}>
                <div>
                  <img src={worksIcon} />
                </div>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>SIGN UP</p>
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    marginBottom: "0",
                  }}
                >
                  Small Or Big,
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "300",
                    marginTop: "0",
                  }}
                >
                  We have the solution
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    color: "grey",
                    lineHeight: "25px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam at distinctio enim, eveniet illum ipsam magnam optio?
                  Aut earum illo magnam! At, debitis inventore magni, minima
                  necessitatibus nemo nobis nulla pariatur repellendus, ut vel
                  voluptatibus! Aliquam consequatur impedit nesciunt non!
                </p>
              </div>
            </div>
            <div className="grid-2">
              <p className="number" style={{ color: "#0a294d" }}>
                02
              </p>
              <div style={{ marginBottom: "30px" }}>
                <div>
                  <img src={workTcon2} />
                </div>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>SEARCH</p>
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    marginBottom: "0",
                  }}
                >
                  We revolutionized,
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "300",
                    marginTop: "0",
                  }}
                >
                  searching
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    color: "grey",
                    lineHeight: "25px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam at distinctio enim, eveniet illum ipsam magnam optio?
                  Aut earum illo magnam! At, debitis inventore magni, minima
                  necessitatibus nemo nobis nulla pariatur repellendus, ut vel
                  voluptatibus! Aliquam consequatur impedit nesciunt non!
                </p>
              </div>
            </div>
            <div className="grid-2">
              <p className="number" style={{ color: "#3ca7ff" }}>
                03
              </p>
              <div style={{ marginBottom: "30px" }}>
                <div>
                  <img src={workIcon3} />
                </div>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                  CONTACT & BUY
                </p>
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    marginBottom: "0",
                  }}
                >
                  Contact sellers,
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "300",
                    marginTop: "0",
                  }}
                >
                  and start buying
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    color: "grey",
                    lineHeight: "25px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam at distinctio enim, eveniet illum ipsam magnam optio?
                  Aut earum illo magnam! At, debitis inventore magni, minima
                  necessitatibus nemo nobis nulla pariatur repellendus, ut vel
                  voluptatibus! Aliquam consequatur impedit nesciunt non!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "40px" }}>
          <section className="sec" id="services">
            <div className="content">
              <div className="services">
                <div className="box">
                  <div id="iconBx">
                    <img src={icon1} />
                  </div>
                  <div id="content">
                    <h2>"Chamb" Your Business</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div id="iconBx">
                    <img src={icon2} />
                  </div>
                  <div id="content">
                    <h2>Create and Add</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div id="iconBx">
                    <img src={icon3} />
                  </div>
                  <div id="content">
                    <h2>Get Inspired</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec" id="services">
            <div className="content">
              <div className="services">
                <div className="box">
                  <div id="iconBx">
                    <img src={icon4} />
                  </div>
                  <div id="content">
                    <h2>"Chamb" Your Business</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div id="iconBx">
                    <img src={icon5} />
                  </div>
                  <div id="content">
                    <h2>Create and Add</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div id="iconBx">
                    <img src={icon3} />
                  </div>
                  <div id="content">
                    <h2>Get Inspired</h2>
                    <p style={{ color: "rgba(0,0,0,0.6)" }}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <Style>
          {`
                  .howitworks{
                    display:grid;
                    grid-template-columns:0.75fr 1fr;
                    height:auto-fit;
                    padding:80px;
                    transition:0.6s;

                    }
                  .grid-2{
                    display:grid;
                    grid-template-columns:0.5fr 1fr;
                    transition:0.6s;
                    }
                   .number {
                    font-size:130px;
                    font-weight:900;
                    color:#42c89b;
                    } 
                    
                    @media (max-width:1024px){
                        .howitworks{
                            display:grid;
                            grid-template-columns:1fr;
                            transition:0.6s;
                            }
                        .grid-2{
                           margin-top:50px;
                           transition:0.6s;
                            }    
                        }
                    @media (max-width:720px){
                        .grid-2{
                            display:grid;
                            grid-template-columns:1fr;
                            height:10% auto;
                            transition:0.6s;
                        }
                        .number{
                            margin:0;
                            font-size:70px;
                            transition:0.6s;
                        }
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
                        background:transparent;
                        padding:20px;
                        
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
                        
                  `}
        </Style>
      </div>
    );
  }
}

export default HowItWorks;
