import React from "react";

export default function ProductList({ products, onDelete }) {
  return (
    <div className="container my-4">
      <h3 className="text-primary mb-3">Product List</h3>
      {products.length === 0 ? (
        <div className="alert alert-info">No products available</div>
      ) : (
        <div className="row">
          {products.map((p) => (
            <div key={p._id} className="col-md-4 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">Category: {p.category}</p>
                  <p className="card-text">Price: ₹{p.price}</p>
                  <p className="card-text">Quantity: {p.quantity}</p>
                  <p className="text-muted small">{p.description}</p>
                  <button onClick={() => onDelete(p._id)} className="btn btn-danger btn-sm w-100">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
