
import React from "react";
import Card from "./Card";

function Form() {
  return (
    <Card>
      <h2>Form</h2>

      <form id="info-form">
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
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
            name="password_confirmation"
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;

