import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { Style } from "react-style-tag";

class SimpleSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      carouselProducts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data")
      .then((result) => {
        console.log(result);
        this.setState({
          carouselProducts: result.data[0].carouselCards,
        });
      });
  }

  render() {
    console.log(this.state.carouselProducts);
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.state.carouselProducts ? (
          this.state.carouselProducts.map((card) => {
            return (
              <div
                className="product-card"
                style={{ margin: "10px !important", float: "left" }}
              >
                <div className="badge">Hot</div>
                <div className="product-tumb">
                  <img src={card.preview_image} alt="" />
                </div>
                <div className="product-details">
                  <span>{card.category}</span> by
                  <span className="product-catagory">{card.posted_by}</span>
                  <h4>
                    <a href="">{card.name}</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, possimus nostrum!
                  </p>
                  <div className="product-bottom-details">
                    <div className="product-price">{card.price}</div>
                    <div className="product-links">
                      <a href="">
                        <i className="fa fa-heart" />
                      </a>
                      <a href="">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                  </div>
                </div>
                <Style>{`
                .product-card {
                  width: 100%;
                  position: relative;
                  box-shadow: 0 2px 7px #dfdfdf;
                  
                  background: #fafafa;
              }
              
              .badge {
                  position: absolute;
                  left: 0;
                  top: 20px;
                  text-transform: uppercase;
                  font-size: 13px;
                  font-weight: 700;
                  background: red;
                  color: #fff;
                  padding: 3px 10px;
              }
              
              .product-tumb {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  
                  padding: 50px;
                  background: #f0f0f0;
              }
              
              .product-tumb img {
                  max-width: 100%;
                  max-height: 100%;
              }
              
              .product-details {
                  padding: 30px;
              }
              
              .product-catagory {
                  display: block;
                  font-size: 12px;
                  font-weight: 700;
                  text-transform: uppercase;
                  color: #ccc;
                  margin-bottom: 18px;
              }
              
              .product-details h4 a {
                  font-weight: 500;
                  display: block;
                  margin-bottom: 18px;
                  text-transform: uppercase;
                  color: #363636;
                  text-decoration: none;
                  transition: 0.3s;
              }
              
              .product-details h4 a:hover {
                  color: #fbb72c;
              }
              
              .product-details p {
                  font-size: 15px;
                  line-height: 22px;
                  margin-bottom: 18px;
                  color: #999;
              }
              
              .product-bottom-details {
                  overflow: hidden;
                  border-top: 1px solid #eee;
                  padding-top: 20px;
              }
              
              .product-bottom-details div {
                  float: left;
                  width: 50%;
              }
              
              .product-price {
                  font-size: 18px;
                  color: #fbb72c;
                  font-weight: 600;
              }
              
              .product-price small {
                  font-size: 80%;
                  font-weight: 400;
                  text-decoration: line-through;
                  display: inline-block;
                  margin-right: 5px;
              }
              
              .product-links {
                  text-align: right;
              }
              
              .product-links a {
                  display: inline-block;
                  margin-left: 5px;
                  color: #e1e1e1;
                  transition: 0.3s;
                  font-size: 17px;
              }
              
              .product-links a:hover {
                  color: #fbb72c;
              }
              
              
                `}</Style>
              </div>
            );
          })
        ) : (
          <p>not found</p>
        )}
      </Slider>
    );
  }
}

export default SimpleSlider;
