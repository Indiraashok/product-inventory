import React, { useState } from "react";

export default function AddStock({ onAdd }) {
  const [stock, setStock] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => setStock({ ...stock, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(stock);
    setStock({ name: "", quantity: "", price: "" });
    alert("Stock added!");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">🌷 Add New Stock 🌷</h2>
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" placeholder="Item Name" name="name" value={stock.name} onChange={handleChange} required />
          <input className="form-control mb-3" placeholder="Quantity" name="quantity" value={stock.quantity} onChange={handleChange} required />
          <input className="form-control mb-3" placeholder="Price" name="price" value={stock.price} onChange={handleChange} required />
          <button className="btn btn-danger w-100">Add</button>
        </form>
      </div>
    </div>
  );
}
