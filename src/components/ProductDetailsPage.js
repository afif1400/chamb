import React, { Component } from "react";
import axios from "axios";
import { Style } from "react-style-tag";
import image from "../assets/images/150x150.png";
import NavBar from "./NavBar";
import { returnNode } from "react-style-tag/lib/Style";
import Footer from "./Footer";

class ProductDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
      photo: "",
      specifications: [],
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/" +
          this.props.match.params.productId
      )
      .then((result) => {
        console.log(result.data);
        this.setState({
          productDetails: result.data,
          photo: result.data.photos[0],
          specifications: result.data.specifications,
        });
      });
  }

  previewImage = (photo) => {
    let preview = document.querySelector(".img");
    console.log(photo);
    preview.src = photo;
  };

  render() {
    console.log(this.props);
    console.log("state", this.state.productDetails);
    return (
      <div>
        <NavBar />
        {this.state.productDetails ? (
          <div className="productDetail">
            <div
              style={{
                backgroundColor: "#f4f9fd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                className="imgBox"
                style={{
                  padding: "5px",
                  width: "120px",
                  margin: "5px auto",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={this.state.productDetails.user_pic}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p style={{ margin: "5px auto" }}>
                {this.state.productDetails.posted_by}
              </p>
              <button
                style={{
                  outline: "none",
                  border: "none",
                  padding: "10px",
                  backgroundColor: "#fbb72c",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "100%",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                View Store
              </button>
            </div>
            <div style={{ backgroundColor: "#fff" }}>
              <div style={{ padding: "10px", margin: "10px" }}>
                <img
                  className="img"
                  src={this.state.photo}
                  style={{
                    width: "100%",
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.3)",
                  }}
                />
              </div>
              <div
                className="displayImages"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(50px,1fr))",
                  gridGap: "10px",
                  margin: "10px",
                }}
              >
                {this.state.productDetails.photos ? (
                  this.state.productDetails.photos.map((photo) => {
                    return (
                      <img
                        src={photo}
                        style={{
                          width: "100%",
                          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.3)",
                        }}
                        onClick={() => this.previewImage(photo)}
                      />
                    );
                  })
                ) : (
                  <p>no images</p>
                )}
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  Description
                </p>
                <p
                  style={{
                    margin: "20px",
                    fontWeight: "500",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {this.state.productDetails.description}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  Specifications
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        condition
                      </td>
                      <td>{this.state.specifications.condition}</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        Material
                      </td>
                      <td>{this.state.specifications.material}</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        Measurements
                      </td>
                      <td>{this.state.specifications.measurements}</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        SKU Number
                      </td>
                      <td>{this.state.specifications.sku_number}</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        Warranty
                      </td>
                      <td>{this.state.specifications.warranty}</td>
                    </tr>
                  </table>
                  <Style>
                    {`
                      td{
                        padding:5px;
                        
                        box-shadow:0 1px 4px 0 rgba(0,0,0,0.4);
                        }
                      `}
                  </Style>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "10px 20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "20px", fontWeight: "500", margin: "0" }}>
                  {this.state.productDetails.product_name}
                </p>
                <p style={{ marginTop: "0", fontWeight: "500", color: "grey" }}>
                  By <span>{this.state.productDetails.posted_by}</span>
                </p>
                <p style={{ fontSize: "18px", margin: "2px 0" }}>Price</p>
                <p
                  style={{
                    margin: "0",
                    color: "#09294c",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  $
                  <span>
                    {this.state.productDetails
                      ? this.state.productDetails.price
                      : 0}
                  </span>
                </p>
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    padding: "10px",
                    backgroundColor: "#fbb72c",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "100%",
                    margin: "10px auto",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                >
                  Contact Company
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>loading</p>
        )}

        <Style>{`
            .productDetail{
                display:grid;
                grid-template-columns:25% 50% 25%;
                grid-template-rows:auto-fit;
                padding:30px;
                margin-top:60px;
            }
            @media (max-width:720px){
             .productDetail{
                 display:grid;
                 grid-template-columns:1fr;
                 grid-template-rows:auto-fit;
              }
              }
            
          `}</Style>
        <Footer />
      </div>
    );
  }
}

export default ProductDetailsPage;
