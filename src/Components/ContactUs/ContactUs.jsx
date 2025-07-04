import React from "react";
import "./ContactUs.scss";
export default function ContactUs() {
  return (
    <div className="contactUs">
      <div>Contact US</div>
      <p style={{ marginBottom: 22 }}>Get your commission advance today!</p>
      <p className="linkText">
        <a href="mailto:info@rocketadvance.ca">info@rocketadvance.ca</a>
      </p>
      <p>
        <a href="tel:18005183577">1-800-518-3577</a>
      </p>
    </div>
  );
}
