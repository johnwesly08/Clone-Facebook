import React, { Fragment, useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }required
        />

        <button type="submit">Register</button>
      </form>
    </Fragment>
  );
}