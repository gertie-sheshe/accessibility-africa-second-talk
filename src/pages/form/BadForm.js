import React from "react";
import "./form.modules.css";

function BadFormPage() {
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="section">
      <h1>Personal Details Form:</h1>
      <form className="form" onSubmit={onHandleSubmit}>
        <input
          className="input"
          type="text"
          required
          placeholder="First Name e.g Gertrude"
        />
        <input
          className="input"
          type="text"
          required
          placeholder="Last Name e.g Nyenyeshi"
        />

        <input
          className="input"
          type="email"
          required
          placeholder="Enter Your Email e.g me@them.com"
        />
        <input
          className="input"
          type="location"
          placeholder="Enter Your Location e.g Nairobi"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BadFormPage;
