import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold mb-3">About This Project</h2>
      <p className="text-secondary fs-5">
        This is a full-stack MERN project built to manage inventory easily. It allows
        users to add, delete, and view product details — using React, Node.js, Express,
        and MongoDB.
      </p>
      <p className="mt-3">
        Created by <strong>Indira</strong> as a college project, designed to run completely offline.
      </p>
    </div>
  );
}
