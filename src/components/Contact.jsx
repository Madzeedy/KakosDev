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
            Ready to move your cargo efficiently? Our team is here to help. Tell us about your logistics requirements and we’ll respond within 24 hours.
          </p>

          {/* OFFICE 1 */}
          <div className="contact-block">
            <h4>HEAD OFFICE</h4>
            <p>
              xxxxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
              Kigali/Rwanda
            </p>
            <p className="phone">+250 (0) 782321335</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <h3>Request a Quote</h3>
          <p className="form-subtitle">
            Tell us about your project requirements.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Company" />
              <select>
                <option>Select a destination</option>
                <option>Tanzania</option>
                <option>DRC</option>
                <option>Rwanda/District</option>
              </select>
            </div>

            <textarea
              placeholder="Tell us about your project: location, delivery conditions, timeline..."
              rows="5"
              required
            />

            <p className="form-note">
              By submitting this form, you agree to be contacted about your inquiry.
            </p>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;