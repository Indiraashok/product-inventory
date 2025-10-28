import React from "react";

export default function History({ history }) {
  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">🌼 Stock Removal History 🌼</h2>
      {history.length === 0 ? (
        <div className="alert alert-warning text-center">No history yet</div>
      ) : (
        <ul className="list-group mx-auto" style={{ maxWidth: "400px" }}>
          {history.map((item, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              <span>{item}</span>
              <span className="text-danger">Removed</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
