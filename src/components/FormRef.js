
import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmationRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = confirmationRef.current.value;

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Password Confirmation:", passwordConfirmation);

    alert("Form submitted successfully!");
  };

  return (
    <Card>
      <h2>Form using useRef</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>

          <input
            type="text"
            id="full_name"
            ref={fullNameRef}
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            ref={emailRef}
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            ref={passwordRef}
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
            ref={confirmationRef}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;

