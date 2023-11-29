// ProductManager.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProdMan.css";

const ProdMan = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    quantity: "",
    category: "",
    unitprice: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:3001/products", formData);
      fetchData();
      setFormData({
        id: "",
        name: "",
        quantity: "",
        category: "",
        unitprice: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="product-manager">
      <h2>Product Manager</h2>
      <div className="product-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <label>Unit Price:</label>
        <input
          type="text"
          name="unitprice"
          value={formData.unitprice}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h3>Product List</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.quantity} - {product.category} - $
              {product.unitprice}
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProdMan;
