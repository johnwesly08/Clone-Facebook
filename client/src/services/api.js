import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const registerUser = async (UserData) => {
  return axios.post("auth/register", UserData);
};

export const loginUser = async (UserData) => {
  return axios.post("auth/login", UserData);
};
