import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Products from "./components/Product";
import productStock from "./data.json";

// Startegy: Always have one before starting.
// ProductStock needs to filter the product list based on state and SearchBar needs to display the search text and checked state.
// The common owner component is Filterable ProductStock.

// Below I only need to pass the product stock because I am connecting the search bar in the product.js and that will also render it.

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products products={productStock} />
      </div>
    );
  }
}

export default App;
