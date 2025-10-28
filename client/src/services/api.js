import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// get all products
export const getProducts = () => axios.get(API_URL);

// add a new product
export const addProduct = (data) => axios.post(API_URL, data);

// delete product
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

// update product
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
