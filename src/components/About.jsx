import React from "react";

export default function About() {
  return (
    <div className="pageCont" id="about">
      <div>
        <div id="aboutTop">
          <h2>About Me</h2>
          <div className="aboutLinks">
            <div>
              <a href="https://www.linkedin.com/in/henryk91" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkIcon.png" style={{ width: 45 }} alt="linkedin-icon" />
                <p>LinkedIn</p>
              </a>
            </div>
            <div id="cvDownload">
              <a href="/Henry%20Koekemoer%20CV.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/icons/downloadCv.png" alt="cv-icon" />
                <p>My CV</p>
              </a>
            </div>
          </div>
        </div>
        <div className="aboutCont">
          <p className="aboutIntro">
            I'm a self taught programmer with experience in both front and back-end development. I have worked on projects ranging from
            intelligent naming & classification software to voice recognition to full-stack mobile applications with back-end server and
            databases.
          </p>
          <p>
            Currently Im working for <a href="https://www.reverseresources.net/" target="_blank" rel="noopener noreferrer">Reverse Resources</a> as a full-stack developer.
          </p>
          <p className="aboutIntro">
            My greatest asset is my believe that there is always a way to make it work. I am always looking to learn something new to improve my skills or make my project work.
          </p>
        </div>
      </div>
      <div className="aboutCont">
        <h2>The Stack I use:</h2>
        <h3>Front-end:</h3>
        <p>TypeScript, JavaScript, Angular, React, Ionic, PWA, HTML/CSS, Bootstrap, SCSS, D3.js</p>
        <h3>Back-end:</h3>
        <p>Node.js, Express.js, Socket.io, Java, Python, Lamp, Nginx, Keras</p>
        <h3>Database:</h3>
        <p>MongoDB, Postgres, MySql</p>
        <h3>Testing:</h3>
        <p>Mocha, Chai</p>
        <h3>Deployment:</h3>
        <p>Heroku, Github, Gitlab, Google Cloud Services, Docker</p>
        <h3>Other:</h3>
        <p>RestAPIs, GraphiQL, Wordpress, Goole Maps Api, Apache Cordova, Git, Adobe XD, Linux, Bash, Npm, Linux</p>
      </div>
      <br />
    </div>
  );
}
