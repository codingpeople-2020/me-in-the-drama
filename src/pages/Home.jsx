import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

function Home() {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-J6LhGYfu9C41KjsI" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />

      <div className="start-container" style={{backgroundColor: "#f3f4f6"}}>
        <h1 className="start-title">🎬 드라마 속 내 모습은?</h1>
        <p className="start-description">몇 가지 질문을 통해 당신은 드라마 속 <br />어떤 캐릭터인지 알아보세요!</p>
        <Link to="/quiz">
          <button className="start-button">테스트 시작하기</button>
        </Link><br /><br />
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

export default Home;

