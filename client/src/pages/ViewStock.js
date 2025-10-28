import React from "react";

export default function ViewStock({ products, onDelete }) {
  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">🌸 Current Stock 🌸</h2>
      {products.length === 0 ? (
        <div className="alert alert-info text-center">No stocks available</div>
      ) : (
        <div className="row">
          {products.map((p, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card shadow p-3">
                <h5>{p.name}</h5>
                <p>Quantity: {p.quantity}</p>
                <p>Price: ₹{p.price}</p>
                <button onClick={() => onDelete(p.name)} className="btn btn-outline-danger w-100">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
