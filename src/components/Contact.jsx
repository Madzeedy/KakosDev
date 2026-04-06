import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-label">GET IN TOUCH</span>

          <h1 className="contact-title">
            Contact <span>Us</span>
          </h1>

          <p className="contact-description">
            Ready to move your cargo efficiently? Our team is here to help. Tell
            us about your logistics requirements and we’ll respond within 24
            hours.
          </p>

          {/* OFFICE 1 */}
          <div className="contact-block">
            <h4>HEAD OFFICE</h4>
            <p>
              KN 168 St, Kigali <br />
              Kigali/Rwanda
            </p>
            <p className="phone">+250 (0) 782321335</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        {/* RIGHT SIDE MAP */}
        <div className="contact-right">
          <h3>Our Location</h3>
          <p className="form-subtitle">Visit our office in Kigali</p>

          <div className="map-container">
            <iframe
              title="Company Location"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              src="https://www.google.com/maps?q=-1.9766282,30.0522985&hl=en&z=16&t=k&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
