import React, { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });

  const handleChange = async (e) => {
    const {name, value} = e.target;
    setFormData((prev)=> ({
    ...prev, [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.credential || formData.password) {
        alert("Enter all the fields");
        return; 
    }

    try {
      const response = await loginUser(formData);
      console.log("Login Successful", response.data);
    } catch (err) {
      console.error("Login Failed", err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="credential"
          placeholder="UserName or Email"
          value={formData.credential}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
