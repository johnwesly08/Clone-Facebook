import React, { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.credential || !formData.password) {
      setError("Enter all fields");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await loginUser(formData);
      console.log("Login Successful", response.data);
      setSuccess(true);
    } catch (err) {
      setError("Login Failed. Check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="credential"
        placeholder="Username or Email"
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

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Login Successful!</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
