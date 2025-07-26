import React from "react";
import { Link } from "react-router-dom";
import AdFitUnit from '../components/AdFitUnit';

const MoreTests = () => {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />
      <div className="more-tests-container" style={{backgroundColor: "#f3f4f6"}}>
        <Link to="/">
            <button style={{ marginTop: "30px", backgroundColor: "#ec4899", color: "#fff", padding: "12px 20px", borderRadius: "8px" }}>
            🏠 HOME
            </button>
        </Link>
      </div>
      <footer>
          <ul className="footer-nav">
            <li><Link style={{ color:"#999" }} to="/about">About Us</Link></li>
            <li><Link style={{ color:"#999" }} to="/privacy">Privacy Policy</Link></li>
            <li><Link style={{ color:"#999" }} to="/terms">Terms of Service</Link></li>
            <li><Link style={{ color:"#999" }} to="/contact">Contact Us</Link></li>
          </ul>
          <p className="copy">© 2025. CodingPeople All rights reserved</p>
     </footer>
    </div>
  );
};

export default MoreTests;