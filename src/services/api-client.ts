import axios from "axios";

export const instance = axios.create({
  // test API
  baseURL: "https://64dfcdea71c3335b2583147b.mockapi.io",
});
