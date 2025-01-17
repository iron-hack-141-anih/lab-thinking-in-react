import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class Products extends Component {
  constructor(props) {
    // The constructor is a method for creating and initializing an object created with a class which for me is set.state.
    super(props); // I am passing this through super because I want to access this.props in constructor.

    this.state = {
      products: this.props.products.data,
      search: "",
      checkBox: false
    };
  }

  // Since I am defining a state for search to filter the product list, this function will change the state which I will prop into the list.
  onSearch = search => {
    this.setState({ search });
  };

  // Our state will live in the product table

  onCheck = event => {
    const productStock = this.state.products.filter(
      product => product.stocked === true
    );
    if (!this.state.checkBox) {
      this.setState({
        checkBox: true,
        products: productStock
      });
    } else {
      this.setState({
        checkBox: false,
        products: this.props.products.data
      });
    }
  };

  // Using a better code than the if statement I could come up with, map is a better way to go around this issue.

  // if (inStockOnly && !product.stocked) {
  //     return;
  //   }
  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow
  //         category={product.category}
  //         key={product.category} />
  //     );
  //   }

  render() {
    const productStock = this.state.products
      // Makes sense this is why the last search bar didnt work buddy, case sensitivity is important.
      .filter(product =>
        product.name.toLowerCase().includes(this.state.search.toLowerCase())
      )
      // Copying a map function to validate search. Definelty need to use map function more, and get a deeper understanding of syntax here.
      .map((product, index) => {
        return (
          <tr key={index}>
            <td className={!product.stocked ? "red" : ""}>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      });
    return (
      <div className="container">
        <h1>Ani's Store</h1>
        <SearchBar onSearch={this.onSearch} onCheck={this.onCheck} />
        <table className="table">
          {/* Th Didnt work for me, while Thead expands it to all the space available. */}
          <thead>
            <tr className="bg-success text-white">
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{productStock}</tbody>
        </table>
      </div>
    );
  }
}
