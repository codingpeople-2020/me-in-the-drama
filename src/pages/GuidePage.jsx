// src/pages/GuidePage.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import results from "../data/results";
import AdFitUnit from '../components/AdFitUnit';

function GuidePage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const result = results[type];

  if (!result) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>결과를 찾을 수 없어요 😢</h2>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    );
  }

  const { guide } = result;

  return (
    <div className="container">
        <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />
        <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />
        <div className="guide-container" style={{backgroundColor: "#f3f4f6"}}>
        <h1 className="guide-title"><span style={{ color: "#4f46e5", backgroundColor: "#e5f4f9", padding: "4px 8px" }}>{guide.title}!</span></h1>
        <img className="guide-image" src={result.image} alt={result.name}/>

        <section className="guide-tip-section">
            <h2 className="guide-tip-title">&lt; 활용 TIP &gt;</h2>
            <ul>
                {guide.tips.map((tip, index) => (
                <li className="guide-tip-description" key={index}>{tip}</li>
                ))}
            </ul>
        </section>

        <section className="guide-compatibility-section">
            <h2 className="guide-compatibility-title">&lt; 궁합 정보 &gt;</h2>
            <div>
            <p className="guide-compatibility-subtitle">💞 GOOD MATCH</p>
            <p className="guide-compatibility-type"><strong><span style={{ color: "#065f46", backgroundColor: "#d1fae5", padding: "4px 8px" }}>{guide.compatibility.good.character}</span></strong></p>  
            <p className="guide-compatibility-description">{guide.compatibility.good.reason}</p>
            <p className="guide-compatibility-subtitle">💥 BAD MATCH</p>
            <p className="guide-compatibility-type"><strong><span style={{ color: "#991b1b", backgroundColor: "#fee2e2", padding: "4px 8px" }}>{guide.compatibility.bad.character}</span></strong></p>
            <p className="guide-compatibility-description">{guide.compatibility.bad.reason}</p>
            </div>
        </section>

        <div style={{paddingTop: "24px"}}>
            <button
            onClick={() => navigate(`/result/${type}`)}
            style={{
                background: "#24a5aa",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold"
            }}
            >
            결과 페이지로 돌아가기
            </button>
        </div>
        <div className="ad-box">
          <AdFitUnit unit="DAN-lETwh64uekCxNfZg" width="320" height="50" />
        </div>
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
}

export default GuidePage;