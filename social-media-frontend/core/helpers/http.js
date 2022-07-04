import axios from "axios";
import { API_URL } from "../config/environment.ts";
import { userLogout } from "../services/auth.service";
import { getToken } from "../utils/utils";

const isServer = typeof window === "undefined";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 200000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${!isServer && getToken()}`;
    return config;
  },
  (err) => {
    console.log(err);
  }
);
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      // userLogout();
      // location.reload();
    }
  }
);
