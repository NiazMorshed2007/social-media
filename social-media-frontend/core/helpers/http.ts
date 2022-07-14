import axios from "axios";
import { API_URL } from "../config/environment";
import { getToken } from "../utils/utils";

const isServer = typeof window === "undefined";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 200000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${!isServer && getToken()}`,
  },
});

// http.interceptors.request.use(
//   (config) => {
//     config.data = { commonBody };
//     return config;
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// http.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // userLogout();
//       // location.reload();
//     }
//   }
// );
