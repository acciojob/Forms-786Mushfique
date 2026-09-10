
import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <Card>
      <h2>Form using useState</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>

          <input
            type="text"
            id="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="password_confirmation">
            Confirm Password
          </label>

          <input
            type="password"
            id="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;

