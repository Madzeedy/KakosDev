import React, { useState } from "react";

function QuoteFormModal({ setShowQuote }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    shipmentType: "",
    weight: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Quote request submitted successfully.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          origin: "",
          destination: "",
          shipmentType: "",
          weight: "",
          message: "",
        });
        setShowQuote(false);
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => setShowQuote(false)}>
          &times;
        </button>
        <h2>Request a Quote</h2>
        <p>Tell us about your shipment and we will get back to you quickly.</p>

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-grid">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="origin"
              placeholder="Pickup Location"
              value={formData.origin}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Delivery Location"
              value={formData.destination}
              onChange={handleChange}
              required
            />
            <select
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              required
            >
              <option value="">Shipment Type</option>
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
              <option value="road">Road Transport</option>
              <option value="express">Express Delivery</option>
            </select>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional details about the shipment"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="contact-btn">
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteFormModal;
