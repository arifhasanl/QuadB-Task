import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const TicketBook = ({ movieName, movieId }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const phone = from.phoneNumber.value;
    const allData = {
      name,
      phone,
      movieId,
      movieName,
    };
    localStorage.setItem(movieId, JSON.stringify(allData));
    alert("Ticket confrim successfully!");
  };
  return (
    <div className="container mb-4">
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketBook;
