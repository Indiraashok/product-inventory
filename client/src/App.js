import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddStock from "./pages/AddStock";
import ViewStock from "./pages/ViewStock";
import History from "./pages/History";

export default function App() {
  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);

  const handleAdd = (item) => setProducts([...products, item]);

  const handleDelete = (name) => {
    const removed = products.find((p) => p.name === name);
    setHistory([...history, removed.name]);
    setProducts(products.filter((p) => p.name !== name));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStock onAdd={handleAdd} />} />
        <Route path="/view" element={<ViewStock products={products} onDelete={handleDelete} />} />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </Router>
  );
}
