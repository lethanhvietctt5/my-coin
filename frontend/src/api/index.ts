import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default api;
