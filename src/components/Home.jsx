import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="pageCont" id="home">
      <p id="swipeTip">&lt; Swipe left or right &gt;</p>
      <div className="textArea">
        <p id="name">Hi, I'm Henry</p>
        <p>
          I'm a full stack developer.<br />
          I build full-stack responsive websites and web/hybrid apps.
        </p>
      </div>
      <div id="cta">
        <a
          href="/contact"
          style={{ cursor: "pointer", color: 'rgb(255, 255, 255)' }}
          onClick={e => { e.preventDefault(); navigate("/contact"); }}
        >
          Need a website/webapp<br />or looking to hire
        </a>
      </div>
      <div id="social">
        <a href="https://www.linkedin.com/in/henryk91" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkIcon.png" alt="linkedin-icon" />
        </a>
        <a href="https://github.com/Henryk91" target="_blank" rel="noopener noreferrer">
          <img src="/icons/githubIcon.png" alt="github-icon" />
        </a>
      </div>
    </div>
  );
}
