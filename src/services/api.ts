import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.28.173.100:3000/api",
});
