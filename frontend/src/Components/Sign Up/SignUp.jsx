import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign-up successful!");
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <div className="form-content">
          <h1>Sign up now</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label>Subscribe to our newsletter</label>
            </div>
            <button type="submit" className="btn-primary">
              SIGN UP
            </button>
          </form>
          <p className="or-text">or sign up with:</p>
          <div className="social-icons">
            <span className="icon">f</span>
            <span className="icon">G</span>
            <span className="icon">T</span>
            <span className="icon">Git</span>
          </div>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <div className="image-wrapper">
        <img
          src="https://via.placeholder.com/600x600"
          alt="Sign up illustration"
        />
      </div>
    </div>
  );
}
