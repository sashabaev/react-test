import axios from "./api";
import { Book } from "../types";

export const getBooks = () => {
  return axios.get(`/books`);
};

export const getPaging = (limit: number, page: number) => {
  let data = {
    limit: limit,
    page: page
  }
  return axios.post(`/books/paginate`, data);
};

export const addBook = (book: Book) => {
  return axios.post(`/books`, book)
};

export const updateBook = (book: Book) => {
  return axios.put(`/books`, book);
};

export const deleteBook = (id: string) => {
  return axios.delete(`books/` + id);
};