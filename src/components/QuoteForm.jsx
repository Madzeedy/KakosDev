import React, { useState } from "react";

function QuoteForm({ setShowQuote }) {
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

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Quote request submitted successfully!");
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
      } else {
        setSuccess("Error submitting quote. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSuccess("Error submitting quote. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => setShowQuote(false)}>
          &times;
        </button>
        <h2 className="quote-title">
          Request a <span className="highlight">Quotation</span>
        </h2>

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-grid">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Company (optional)</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />

            <label>Pickup Location *</label>
            <input
              type="text"
              name="origin"
              placeholder="Pickup Location"
              value={formData.origin}
              onChange={handleChange}
              required
            />

            <label>Delivery Location *</label>
            <input
              type="text"
              name="destination"
              placeholder="Delivery Location"
              value={formData.destination}
              onChange={handleChange}
              required
            />

            <label>Shipment Type *</label>
            <select
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Shipment Type
              </option>
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
              <option value="road">Road Transport</option>
              <option value="express">Express Delivery</option>
            </select>

            <label>Weight (kg) *</label>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
              min="0"
              step="any"
              required
            />
          </div>

          <label>Additional Details</label>
          <textarea
            name="message"
            placeholder="Additional details about the shipment"
            value={formData.message}
            onChange={handleChange}
          />

          {success && <p className="form-success">{success}</p>}

          <div className="button-wrapper">
            <button type="submit" className="contact-btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Quote Request →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
