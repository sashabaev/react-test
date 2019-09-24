import axios from "./api";
import { Product } from "../types";

export const getProducts = () => {
  return axios.get(`/books`);
};

export const addProduct = (book: Product) => {
  return axios.post(`/books`, book)
};

export const updateProduct = (book: Product) => {  
  return axios.put(`/books/` + book.id, book);
};

export const deleteProduct = (id: string) => {
  return axios.delete(`books/`+ id);
};