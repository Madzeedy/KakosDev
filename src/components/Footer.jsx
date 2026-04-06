import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT - BRAND */}
        <div className="footer-brand">
          <h3>Global Logistics</h3>
          <p>
            Delivering reliable logistics and transport solutions with
            precision, efficiency, and global reach.
          </p>
        </div>

        {/* RIGHT - CONTACT + SOCIAL */}
        <div className="footer-contact">
          <h4>Email Address</h4>

          <p className="footer-email">contact@globallogistics.com</p>

          <div className="footer-socials">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://tiktok.com">TikTok</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Africa Logistics. All rights reserved.</p>
        <a href="https://google.com">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
