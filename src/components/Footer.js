import React, { Component } from "react";
import cover from "../assets/images/chamb-cover.jpg";
import { Style } from "react-style-tag";

class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="footer"
          style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
        >
          <div className="footer-inner">
            <div
              style={{
                padding: "30px",
                zIndex: "2",
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <p
                style={{ fontSize: "22px", color: "#fff", margin: "10px 5px" }}
              >
                Start a free account today
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  margin: "5px 10px",
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
                    minWidth: "250px",
                    borderRadius: "25px",
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
                    borderRadius: "25px",
                    height: "50px",
                    backgroundColor: "#fbb72c",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ margin: "5px" }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  Question? Call us on 12 34 56 78 for help
                </p>
                <span style={{ color: "#fff" }}>
                  Easy setup - no payment fees - up to 100 products for free
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                zIndex: "2",
                flexWrap: "wrap",
                justifyContent: "start",
                gridGap: "30px",
                width: "100%",
                margin: "0 20px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "20px",
                  borderLeft: "2px solid #fff",
                  paddingLeft: "5px",
                }}
              >
                SELL ON CHAMB
                <br />
                <span style={{ fontSize: "16px", color: "grey" }}>Pricing</span>
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "20px",
                  borderLeft: "2px solid #fff",
                  paddingLeft: "5px",
                }}
              >
                BUY ON CHAMB
                <br />
                <span style={{ fontSize: "16px", color: "grey" }}>
                  How it works suppliers
                </span>
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "20px",
                  borderLeft: "2px solid #fff",
                  paddingLeft: "5px",
                }}
              >
                COMPANY
                <br />
                <span style={{ fontSize: "16px", color: "grey" }}>
                  Contact us
                </span>
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "20px",
                  borderLeft: "2px solid #fff",
                  paddingLeft: "5px",
                }}
              >
                INDUSTRIES
                <br />
                <span style={{ fontSize: "16px", color: "grey" }}>
                  Textiles Furniture
                </span>
              </p>
            </div>
          </div>
        </div>
        <Style>{`
               .footer{
                    position:relative;
                    margin-top:60px;
                    max-width:100%;
                    min-height:50vh;
                    transition:0.5s;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-evenly;
                    align-items:center;
                    overflow:hidden;
                }
            
                 .footer-inner::before{
                  content:"";
                  position:absolute;
                  width:100%;
                  height:100%;
                  background:#222;
                  opacity:0.8;
                  padding-bottom:100px;    
                }
                .footer-inner{
                    width:100%;
                    min-height:inherit;
                    transition:0.5s;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-evenly;
                    align-items:center;
                    
                }
                
                
              
              
              `}</Style>
      </div>
    );
  }
}

export default Footer;
