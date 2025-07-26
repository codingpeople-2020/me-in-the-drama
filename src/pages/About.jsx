import React from "react";
import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

const About = () => {
  return (
    <div className="container">
        <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" />
        
        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <h1 className="title">🎨 우리 이야기</h1>
            <p className="title-description">
              <strong>CodingPeople</strong>은 재미와 공감을 바탕으로, 사람들의 성격과 스토리를 연결하는 서비스를 만듭니다.
            </p>

            <h2 className="sub-title">1. 우리가 추구하는 가치</h2>
            <p className="description">
              · 모든 사람은 자신만의 드라마를 살고 있습니다. <br />
              · 우리는 그 <strong>다양한 개성</strong>을 존중하며, 콘텐츠를 통해 <strong>자기 이해와 소통의 기회</strong>를 제공합니다.
            </p>

            <h2 className="sub-title">2. 내 안의 동물은?</h2>
            <p className="description">
              · 총 16개의 질문을 통해 당신이 드라마 속 어떤 캐릭터에 가까운지 알려드립니다. <br />
              · CEO형 주인공부터 코믹 서브, 츤데레, 열정파 등 <strong>8가지 개성 있는 캐릭터</strong> 중 하나가 당신의 매력을 담고 있어요.
            </p>

            <h2 className="sub-title">3. 감성 디자인 + 공유 기능</h2>
            <p className="description">
              · 결과는 <strong>드라마 콘셉트 카드</strong>로 제공되며, 카카오톡과 SNS에서 간편하게 공유할 수 있어요. <br />
              · 친구와 비교하며 즐길 수 있는 최고의 심리테스트 콘텐츠입니다!
            </p>
            <h2 className="sub-title">4. 문의</h2>
            <p className="description">
              · 회사 및 서비스 소개와 관련된 문의사항은 아래 이메일로 연락해주세요. <br />
              · 이메일: codinglab_usdd@naver.co.kr
            </p>
            <AdFitUnit unit="DAN-flhH6MuBurZtwCKc" width="320" height="50" />
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

export default About;
