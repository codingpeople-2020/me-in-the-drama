// src/pages/ResultPage.jsx

import { useParams, useNavigate, Link } from "react-router-dom";
import results from "../data/results";
import { useEffect } from "react";
import AdFitUnit from '../components/AdFitUnit';

function ResultPage() {
  const { type } = useParams(); // URL의 동물 타입
  const navigate = useNavigate();
  const result = results[type];

  useEffect(() => {
    if (!result) return;

    // 페이지 제목 설정
    document.title = `드라마 속 내 모습은? 나는 ${result.name}!`;

    if (!document.querySelector("#kakao-sdk")) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.id = "kakao-sdk";
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("59e0d034dc053f41ba8cf6637da5bcd8"); // 여기에 본인 키
          // console.log("Kakao SDK initialized");
        }
      };
      script.onerror = () => {
        // console.error("Kakao SDK 로딩 실패");
      };
      document.head.appendChild(script);
    } else {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("59e0d034dc053f41ba8cf6637da5bcd8");
        // console.log("Kakao SDK initialized (from existing)");
      }
    }
  }, [result]);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `드라마 속 내 모습은? 나는 ${result.name}?`,
          description: `${result.drama} (${result.actor}) - ${result.description}`,
          imageUrl: window.location.origin + result.image,
          link: {
            mobileWebUrl: 'https://me-in-the-drama.vercel.app',
            webUrl: 'https://me-in-the-drama.vercel.app',
          },
        },
        buttons: [
          {
            title: "나도 테스트해보기",
            link: {
              mobileWebUrl: 'https://me-in-the-drama.vercel.app',
              webUrl: 'https://me-in-the-drama.vercel.app',
            },
          },
        ],
      });
    }
  };

  if (!result) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>결과를 찾을 수 없어요!</h2>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    );
  }

  return (
    <div className="container">
      <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />
      <div className="result-container" style={{backgroundColor: "#f3f4f6"}}>
        <h1 className="result-title">드라마 속 당신은?<br /> <span style={{ color: "#8b5cf6", backgroundColor: "#e5f4f9", padding: "4px 8px" }}>{result.name}!</span></h1>
        <img  className="result-image" 
          src={result.image}
          alt={result.name}
        />
        <p className="result-drama">
          {result.drama}
        </p>
        <p className="result-actor">
          {result.actor}
        </p>
        <p className="result-description">
          {result.description}
        </p>

        <div className="button-box">
          <button className="tip-button" onClick={() => navigate(`/guide/${type}`)}  style={{ marginBottom: "10px" }}>활용법 보기</button> <br />
          <button className="kakao-share-button" onClick={shareKakao} style={{ marginRight: "10px" }}>카카오톡 공유하기</button>
          <button onClick={() => navigate("/")}>다시 테스트하기</button><br /><br />
          <button className="more-tests-button" onClick={() => navigate("/more-tests")}>🎯 다른 테스트도 해보기</button>
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

export default ResultPage;
