import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailsPage from "./ProductDetailsPage";
import PricingPage from "./PricingPage";
import HowItWorks from "./HowItWorks";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/products/:productId"
            component={ProductDetailsPage}
          />
          <Route exact path="/pricing" component={PricingPage} />
          <Route exact path="/working" component={HowItWorks} />
        </BrowserRouter>
      </div>
    );
  }
}

export default MainComponent;
