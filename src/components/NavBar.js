import React, { Component } from "react";
import { Style } from "react-style-tag";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links">
              <a
                href="/working"
                style={{
                  fontWeight: "300",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                How it works
              </a>
              <a
                href="/pricing"
                style={{
                  fontWeight: "300",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Pricing
              </a>
              <a
                href="/"
                style={{
                  fontWeight: "300",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Sign Up
              </a>
              <a
                className="login"
                href="/"
                style={{
                  fontWeight: "300",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  background: "#fbb72c",
                  color: "#fff",
                  borderRadius: "3px",
                }}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        <Style>
          {`
                 .nav {
                  height: 70px;
                  width: 100%;
                  background-color: #fff;
                  position: fixed;
                  z-index:3;
                  top:0;  
                  box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);
                
                }
                
                .nav > .nav-header {
                  display: inline;
                }
                
                .nav > .nav-header > .nav-title {
                  display: inline-block;
                  font-size: 22px;
                  color: #222;
                  padding: 20px ;
                }
                
                .nav > .nav-btn {
                  display: none;
                
                }
                
                .nav > .nav-links {
                  display: flex;
                  flex-direction:row;
                  float: right;
                  font-size: 18px;
                  font-family:sans-serif;
                  padding:15px;
                  height:55px;
                 
                }
                
                .nav > .nav-links > a {
                  padding:10px 10px ;
                  text-decoration: none;
                  color: #222;
                  height:20px;
                }
                .nav .nav-links > .login:hover{
                    color:#fff !important;
                    }
                 .nav > .nav-links > span  {
                  height:30px;
                  text-decoration: none;
                  padding:0 10px;
                  color: #222;
                }
                
                .nav > .nav-links > a:hover {
                  color:#0c2c4e !important;
                  transition:0.6s;
                  text-decoration:underline ;
                }
                
                .nav > #nav-check {
                  display: none;
                }
                
                @media (max-width:720px) {
                  .nav > .nav-btn {
                    display: inline-block;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                  }
                  .nav > .nav-btn > label {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    padding: 13px;
                  }
                  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
                    background-color: rgba(0, 0, 0, 0.3);
                  }
                  .nav > .nav-btn > label > span {
                    display: block;
                    width: 25px;
                    height: 10px;
                    border-top: 2px solid #222;
                  }
                  .nav > .nav-links {
                    position: absolute;
                    display: flex;
                    flex-direction:column;
                    width: 100%;
                    background-color: #fff;
                    height: 0px;
                   
                   
                    transition: all 0.3s ease-in;
                    overflow-y: hidden;
                    top: 50px;
                    left: 0px;
                  }
                 
                  .nav > .nav-links > a {
                    display: block;
                    width: 100%;
                    padding:15px !important;
                    overflow:hidden;
                  }
                  .nav > .nav-links > i {
                    display: block;
                    width: 100%;
                    padding:0 10px;
                    font-size:20px;
                  }
                  .nav > #nav-check:not(:checked) ~ .nav-links {
                    height: 0px;
                    overflow:hidden;
                  }
                  .nav > #nav-check:checked ~ .nav-links {
                   
                    height: calc(100vh - 60px);
                    overflow-y: auto;
                    transition:0.5s;
                    overflow-x:hidden;
                    box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);
                  }
                }


                    `}
        </Style>
      </div>
    );
  }
}

export default NavBar;
