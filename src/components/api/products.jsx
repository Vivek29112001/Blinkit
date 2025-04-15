import axios from "axios";
const BASE_URL="https://dummyjson.com/products?limit=10";
export const fetchAllProducts =()=> axios.get(BASE_URL)
export const fetchProductById =(id)=> axios.get(`${BASE_URL}/${id}`) 
