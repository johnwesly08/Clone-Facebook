import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/auth" });

export const registerUser = async (UserData) => {
  try {
    const response = await API.post("auth/register", UserData);
    return response;
  } catch (error) {
    console.error("Error during Registration", error.message);
    throw error;
  }
};

export const loginUser = async (UserData) => {
  try {
    const response = await API.post("auth/login", UserData);
    return response;
  } catch (error) {
    console.error("Error during Login", error.message);
    throw error;
  }
};