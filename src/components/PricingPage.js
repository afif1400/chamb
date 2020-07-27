import React, { Component } from "react";
import { Style } from "react-style-tag";
import NavBar from "./NavBar";
import Footer from "./Footer";

class PricingPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="pricing-table">
          <div className="pricing-card">
            <h3 className="pricing-card-header">
              Chamb Free
              <p style={{ fontSize: "14px", marginBottom: "0" }}>No binding</p>
            </h3>

            <div className="price">Free</div>
            <ul>
              <li>Logo and Branding</li>
              <li>Unlimited products</li>

              <li>Analytics</li>
            </ul>
            <a href="#" className="order-btn">
              Sign Up
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">
              Chamb Pro
              <p style={{ fontSize: "14px", marginBottom: "0" }}>No binding</p>
            </h3>
            <div className="price">
              <sup>$</sup>15<span>/trl. per. mth</span>
            </div>
            <ul>
              <li>Logo and Branding</li>
              <li>Unlimited number of products</li>
              <li>Better search</li>
              <li>Google AdWords - 10%</li>
              <li>Verified by third party</li>
              <li>Support</li>
            </ul>
            <a href="#" className="order-btn">
              Sign Up
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">
              Chamb Growth{" "}
              <p style={{ fontSize: "14px", marginBottom: "0" }}>No binding</p>
            </h3>
            <div className="price">
              <sup>$</sup>50<span>/trl. per. mth</span>
            </div>
            <ul>
              <li>Logo and Branding</li>
              <li>Unlimited number of products</li>
              <li>Better search</li>
              <li>Google AdWords - 10%</li>
              <li>Verified by third party</li>
            </ul>
            <a href="#" className="order-btn">
              Sign Up
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">
              Custom Solution{" "}
              <p style={{ fontSize: "14px", marginBottom: "0" }}>No binding</p>
            </h3>
            <div className="price">
              Custom<span>/mth</span>
            </div>
            <ul>
              <li>Logo and Branding</li>
              <li>Unlimited number of products</li>
              <li>Better search</li>
              <li>Google AdWords - 10%</li>
            </ul>
            <a href="#" className="order-btn">
              Sign Up
            </a>
          </div>
        </div>
        <Footer />
        <Style>{`
                
                .pricing-table{
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-around;
                  width: min(1600px, 100%);
                  margin:70px auto;
                }
                
                .pricing-card{
                  display:flex;
                  flex-direction:column;
                  width:300px;
                  background-color: #fff;
                  margin: 20px 10px;
                  text-align: center;
                  cursor: pointer;
                  overflow: hidden;
                  color: #2d2d2d;
                  transition: 0.3s ease;
                  
                }
                
                .pricing-card-header{
                  background-color: #fbb72c;
                  display: inline-block;
                  color: #fff;
                  padding: 12px 0;
                  width:100%;
                  
                  font-size: 16px;
                  text-transform: uppercase;
                  font-weight: 600;
                  transition: .4s linear;
                }
                
              
                
                .price{
                  font-size: 50px;
                  color: #fbb72c;
                  margin: 40px 0;
                  transition: .2s linear;
                }
                
                .price sup, .price span{
                  font-size: 22px;
                  font-weight: 700;
                }
                
             
                .pricing-card li{
                  font-size: 16px;
                  padding: 10px 0;
                  text-transform: uppercase;
                }
                
                .order-btn{
                  display: inline-block;
                  margin-bottom: 40px;
                  margin-right:10%;
                  margin-left:10%;
                  margin-top: auto;
                  border: 2px solid #fbb72c;
                  color: #fbb72c;
                  padding: 18px 40px;
                  border-radius: 8px;
                  text-transform: uppercase;
                  font-weight: 500;
                  transition: .3s linear;
                }
                
                .order-btn:hover{
                  background-color: #fbb72c;
                  color: #fff;
                }
                
                @media screen and (max-width:1100px){
                  .pricing-card{
                    flex: 33.3%;
                    margin:0 50px;
                  }
                }
                @media screen and (max-width:700px){
                  .pricing-card{
                    flex: 50%;
                    margin:0 60px;
                  }
                }
                `}</Style>
      </div>
    );
  }
}

export default PricingPage;
