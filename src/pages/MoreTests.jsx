import React from "react";
import { Link } from "react-router-dom";
import AdFitUnit from '../components/AdFitUnit';

// const tests = [
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   },
//   {
//     title: "내 안의 동물은?",
//     image: "/images/animal-test-site.jpg", // public/images에 넣으세요
//     url: "https://animal-test-site.vercel.app",
//   }
// ];

const MoreTests = () => {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />
      <div className="more-tests-container" style={{backgroundColor: "#f3f4f6"}}>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>🎯 더 재미있는 테스트</h1>
          <ul className="tests-section">
            <li>
              <a href="https://animal-test-site.vercel.app" target="_blank" rel="noopener noreferrer" >
                <img src="../public/images/animal-test-site.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <img src="../public/images/preparing.png" alt="" />
              </a>
            </li>
            <li>
              <AdFitUnit unit="DAN-Dk5xGFbyCTemvHn2" width="300" height="250" />
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <img src="../public/images/preparing.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <img src="../public/images/preparing.png" alt="" />
              </a>
            </li>
            <li>
              <AdFitUnit unit="DAN-9HKG7rSoFDtQDakt" width="300" height="250" />
            </li>
          </ul>
        <Link to="/">
            <button style={{ marginTop: "30px", backgroundColor: "#ec4899", color: "#fff", padding: "12px 20px", borderRadius: "8px" }}>🏠 HOME</button>
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