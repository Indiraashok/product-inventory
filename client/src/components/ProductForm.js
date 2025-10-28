import React, { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", category: "", price: "", quantity: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Name and Price required!");
    onAdd(form);
    setForm({ name: "", category: "", price: "", quantity: "", description: "" });
  };

  return (
    <div className="container my-4">
      <div className="card shadow p-4">
        <h3 className="text-center text-primary mb-3">Add Product</h3>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
          <input className="form-control mb-2" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
          <input className="form-control mb-2" type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
          <input className="form-control mb-2" type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
          <textarea className="form-control mb-3" name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </form>
      </div>
    </div>
  );
}
