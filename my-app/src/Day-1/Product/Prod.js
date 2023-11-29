import React, { Component } from "react";
import "./Prod.css";

class Prod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      unitPrice: 0,
      quantity: 0,
      totalAmount: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calculateTotalAmount = () => {
    const { unitPrice, quantity } = this.state;
    let totalAmount = unitPrice * quantity;

    // Apply 10% discount if quantity is more than 10 units
    if (quantity > 10) {
      totalAmount *= 0.9;
    }

    this.setState({ totalAmount });
  };

  render() {
    const { productName, unitPrice, quantity, totalAmount } = this.state;

    return (
      <div className="product-details-container">
        <h1>Product Details</h1>
        <div className="input-container">
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Unit Price:</label>
          <input
            type="number"
            name="unitPrice"
            value={unitPrice}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.calculateTotalAmount}>Calculate Total</button>
        {totalAmount > 0 && (
          <div className="result-container">
            <h2>Result:</h2>
            <p>Product Name: {productName}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Prod;
