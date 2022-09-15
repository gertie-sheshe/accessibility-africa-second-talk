import React from "react";
import "./form.modules.css";

function BadFormPage() {
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="section">
      <h1>Personal Details Form:</h1>
      <form className="form" onSubmit={onHandleSubmit}>
        <label htmlFor="firstname">First Name (required): </label>
        <input
          className="input"
          id="firstname"
          type="text"
          required
          aria-describedby="firstname-description"
        />
        <p id="firstname-description">Enter first name e.g Gertrude</p>

        <label htmlFor="lastname">Last Name (required): </label>
        <input
          className="input"
          id="lastname"
          type="text"
          required
          aria-describedby="lastname-description"
        />
        <p id="lastname-description">Enter last name e.g Nyenyeshi</p>

        <label htmlFor="email">Email (required): </label>
        <input
          className="input"
          type="email"
          id="email"
          required
          aria-describedby="email-description"
        />
        <p id="email-description">Enter email e.g user@test.com</p>

        <label htmlFor="location">Location (required): </label>
        <input
          className="input"
          type="location"
          id="location"
          aria-describedby="location-description"
        />
        <p id="location-description">Enter your location e.g Nairobi</p>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default BadFormPage;
