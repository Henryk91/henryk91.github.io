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
              <a href="/Henry_Koekemoer_CV.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/icons/downloadCv.png" alt="cv-icon" />
                <p>My CV</p>
              </a>
            </div>
          </div>
        </div>
        <div className="aboutCont">
          <p className="aboutIntro">
            I’m a full-stack software engineer with over six years of experience delivering scalable IoT, SaaS, and data-driven solutions for industries including retail technology, sustainability, and insurance. My work spans the entire development lifecycle, from concept to production, integrating modern frameworks like React, Angular, Django, Node.js, and Rust with cloud infrastructure across AWS, Azure, and GCP.
          </p>
          <p className="aboutIntro">
            Most recently, I was a Software Engineer at Rapitag GmbH in Munich, building edge-device applications in Rust and Python for Azure IoT environments. I worked closely with hardware engineers to deliver end-to-end IoT solutions for the world’s first smart retail security tags, enabling secure mobile checkout and improving operational reliability for global retailers. My role included performance optimisation, real-time monitoring, and customer-facing issue resolution often under challenging conditions while consistently delivering high-quality results.
          </p>
          <p className="aboutIntro">
            Previously, I contributed to Reverse Resources, developing SaaS tools for textile waste traceability across continents, and at Sensor Networks, where I built IoT-powered energy-saving systems and developed a CMS for insurance and banking clients. My earlier work includes back-end development for a mental health platform, freelance projects in mobile and web app development, and automation software for legal processes.
          </p>
          <p className="aboutIntro">
            I bring a self-taught foundation backed by formal certifications in full-stack development, data analysis, APIs, and microservices. I thrive in cross-functional teams, value clean, maintainable code, and have a proven record of quickly learning new technologies to meet evolving project requirements.
          </p>
          <h3 >
            Key Strengths:
          </h3>
          <ul>
            <li>
              Full-stack development for IoT, SaaS, and data-driven platforms
            </li>
            <li>
              Cross-platform applications for mobile, web, and embedded devices
            </li>
            <li>
              Cloud integration and DevOps pipeline optimisation
            </li>
            <li>
              Performance testing, debugging, and monitoring systems
            </li>
            <li>
              Agile collaboration across international teams
            </li>
          </ul>
        </div>
      </div>
      <div className="aboutCont">
        <h2>The Stack I use:</h2>
        <h3>Front-end:</h3>
        <p>TypeScript, JavaScript, Angular, React, Ionic, PWA, HTML/CSS, Bootstrap, SCSS, D3.js</p>
        <h3>Back-end:</h3>
        <p>Node.js, Express.js, Socket.io, Java, Python, Django, FastApi, Rust</p>
        <h3>Database:</h3>
        <p>MongoDB, Postgres, MySql</p>
        <h3>Testing:</h3>
        <p>Mocha, Chai</p>
        <h3>Deployment:</h3>
        <p>Heroku, Github, Gitlab, Google Cloud Services, Docker, Azure IoT Edge, Raspberry Pi, AWS</p>
        <h3>Other:</h3>
        <p>RestAPIs, GraphiQL, Wordpress, Goole Maps Api, Apache Cordova, Git, Adobe XD, Linux, Bash, Npm, Linux</p>
      </div>
      <br />
    </div>
  );
}
