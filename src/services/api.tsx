import axios from "axios";

export const api = axios.create({
  baseURL: "https://knz-cars-deploy.onrender.com",
  timeout: 10000,
});
