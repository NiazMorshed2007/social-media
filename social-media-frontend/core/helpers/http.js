import axios from "axios";
import { API_URL } from "../config/environment";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 200000,
  headers: {
    "Content-Type": "application/json",
  },
});
