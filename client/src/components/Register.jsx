import React, { useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dob: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation Regex Patterns
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "First Name is required";
    } else if (formData.fname.length < 3 || formData.fname.length > 50) {
      newErrors.fname = "First Name must be between 3 and 50 characters";
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "Last Name is required";
    } else if (formData.lname.length < 3 || formData.lname.length > 50) {
      newErrors.lname = "Last Name must be between 3 and 50 characters";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.dob);
      if (selectedDate > today) {
        newErrors.dob = "Date of Birth cannot be in the future";
      }
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (
      formData.phoneNumber.length < 7 ||
      formData.phoneNumber.length > 15
    ) {
      newErrors.phoneNumber = "Phone Number must be between 7-15 digits";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid Email format";
    }

    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, including uppercase, lowercase, number & special char.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const response = await registerUser(formData);
      setLoading(false);
      setSuccess(true);
      console.log(response.data);
    } catch (err) {
      setLoading(false);
      setErrors({ api: "Registration failed. Please try again." });
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.fname}
        onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
      />
      {errors.fname && <p className="error">{errors.fname}</p>}

      <input
        type="text"
        value={formData.lname}
        placeholder="Last Name"
        onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
      />
      {errors.lname && <p className="error">{errors.lname}</p>}

      <input
        type="date"
        value={formData.dob}
        max={new Date().toISOString().split("T")[0]} // Prevents future dates
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
      />
      {errors.dob && <p className="error">{errors.dob}</p>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      {errors.api && <p className="error">{errors.api}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      {success && <p className="success">Registration Successful!</p>}
    </form>
  );
}