import React from "react";

export default function Projects() {
  return (
    <div className="pageCont" id="projects">
      <div id="projectHeader">
        <h1>My Projects</h1>
      </div>
      <div className="projectCont" id="fccProjectBox">
        {/* D3 Projects */}
        <div>
          <div className="fccProjectHead">
            <h2>Front-end: D3</h2>
            <p>Tech Used: HTML, CSS, JavaScript, D3.js</p>
            <p>Dynamically rendered charts from third party api with hover-over details.</p>
          </div>
          <div className="fccProjectLinks">
            <p>United States GDP Bar Chart</p>
            <a href="https://codepen.io/HenryK91/pen/MLGgJR" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/MLGgJR" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Pro Cycling Scatter Plot</p>
            <a href="https://codepen.io/HenryK91/pen/GzGZyE" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/GzGZyE" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Global Temp 1753-2015 Heat Map</p>
            <a href="https://codepen.io/HenryK91/pen/gqKKYM" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/gqKKYM" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>US Educational Choropleth Map</p>
            <a href="https://codepen.io/HenryK91/pen/Odoveo" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/Odoveo" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Movie, Kickstarter and Games Tree Map</p>
            <a href="https://codepen.io/HenryK91/pen/LqJwGL" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/LqJwGL" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
        {/* React Projects */}
        <div>
          <div className="fccProjectHead">
            <h2>Front-end: ReactJS</h2>
            <p>Tech Used: HTML, CSS, JavaScript, React</p>
          </div>
          <div className="fccProjectLinks">
            <p>Random Quote Machine</p>
            <a href="https://codepen.io/HenryK91/pen/OdpLxv" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/OdpLxv" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Markdown Previewer</p>
            <a href="https://codepen.io/HenryK91/pen/exveQW" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/Henryk91/full/exveQW" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Drum Machine</p>
            <a href="https://codepen.io/HenryK91/pen/BMRZGe" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/Henryk91/full/BMRZGe" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>JavaScript Calculator</p>
            <a href="https://codepen.io/HenryK91/pen/KJvQqv" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/KJvQqv" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Pomodoro Clock</p>
            <a href="https://codepen.io/HenryK91/pen/XOeovR" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://codepen.io/HenryK91/full/XOeovR" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
        {/* Backend Projects */}
        <div>
          <div className="fccProjectHead">
            <h2>Back-end: Node.js</h2>
            <p>Tech Used: Node.js, Mocha, Chai, MongoDB, MongooseJS, HelmetJS, Bcrypt</p>
            <p>(Front-end for demo purposes. Not done by me)</p>
          </div>
          <div className="fccProjectLinks">
            <p>Metric-Imperial Converter</p>
            <a href="https://glitch.com/edit/#!/henryk91-metric-imperial" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://henryk91-metric-imperial.glitch.me" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Issue Tracker</p>
            <a href="https://glitch.com/edit/#!/henryk91-issue-track" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://henryk91-issue-track.glitch.me" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Personal Library</p>
            <a href="https://glitch.com/edit/#!/henryk91-personal-library" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://henryk91-personal-library.glitch.me" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Stock Price Checker</p>
            <a href="https://glitch.com/edit/#!/henryk91-stock-checker" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://henryk91-stock-checker.glitch.me" target="_blank" rel="noopener noreferrer">Demo</a>
            <p>Anonymous Message Board</p>
            <a href="https://glitch.com/edit/#!/henryk91-anon-mes-board" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://henryk91-anon-mes-board.glitch.me" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      </div>
      {/* Rhino Assets Mobile App */}
      <div className="projectCont black">
        <h2>Rhino Assets Mobile App (Front and back-end fuel logging app)</h2>
        <p>The client requested a cross platform mobile app for fuel supply logging and management.</p>
        <p>Features Include:</p>
        <ul>
          <li>User Login</li>
          <li>Asset add and remove</li>
          <li>Usage Updating</li>
          <li>Reporting On Usage</li>
        </ul>
        <p>
          Main Tech Used:<br />
          Html, Css, JavaScript, Node.js, Tomcat Server, PostgreSQL, and Heroku for hosting.
        </p>
        <div id="rhinoPics">
          <img src="/images/rhinoFP.png" alt="rhinoFP" />
          <img src="/images/rhinoNU.png" alt="rhinoNU" />
          <img src="/images/rhinoNTC.png" alt="rhinoNTC" />
          <img src="/images/rhinoNTO.png" alt="rhinoNTO" />
        </div>
      </div>
      <br />
      {/* Chat App */}
      <div className="projectCont black" id="chatAppBox">
        <div className="fccProjectLinks" id="chatAppHeader">
          <h1>Chat App</h1>
          <a href="https://github.com/Henryk91/ChatApp" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://henryk91.github.io/ChatAppClient/" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
        <p>This is a real time functioning chat app that can be used stand alone or as a base to build a private messaging app.</p>
        <p>
          Main Tech Used:<br />
          Html, SCSS, Angular 6, TypeSctipt, JavaScript, Node.js, Socket.io
        </p>
        <div>
          <img src="/images/chatAppMC.png" alt="chatAppMC" />
          <img src="/images/chatAppM.png" alt="chatAppM" />
          <img src="/images/chatAppC.png" alt="chatAppC" />
          <img src="/images/chatAppCTS.png" alt="chatAppCTS" />
        </div>
      </div>
      <br />
      {/* Electronic Cost Consulting */}
      <div className="projectCont black">
        <h2>Electronic Cost Consulting (Intelligent Document Processing)</h2>
        <p>Ecc Has been one of my main projects over the last 2 years.</p>
        <p>
          The idea came from seeing how law firms calculate their bills. It takes somewhere between an hour to a couple of days to summarise
          the contents of a legal file, which can have upwards of a thousand pages. The idea was to automate the whole process.
        </p>
        <p>The project steps after receiving a scanned file are:</p>
        <p>- OCR all the pages</p>
        <p>- Recognition start and end pages of all documents in files</p>
        <p>- Extracting data from documents depending on their type. Including, names, dates, word counts etc.</p>
        <p>- Recognising if documents contains certain rubber stamps to cut these out and rotate them for people to check.</p>
        <p>- After a quick summary check of unrecognisable pages by a person, convert all data into a bill ready to present to a client.</p>
        <p>Main Tech Used:</p>
        <p>Java, Pdfbox, Apache Poi, Google Drive API, Open CV</p>
      </div>
      <br />
      {/* Mia (Virtual Assistant) */}
      <div className="projectCont black">
        <h2>Mia (Virtual Assistant) (Personal Project)</h2>
        <p>
          The idea came from the novelty of electronic assistants like Alexa/Bixby/Siri/Google Assistant etc. I always thought it was a
          great project but the one feature that was a bit of a challenge is the adding of new skills and tasks. The other is that most of
          them tend to only work with an internet connection and that most data is processed elsewhere.
        </p>
        <p>What I ended up building was a voice assistant working on a computer that can function without an internet connection.</p>
        <p>It has most of the features of a standard voice assistants but have added features such as:</p>
        <p>-Quick adding of new skills.</p>
        <p>-Wake word disabling for working in quiet areas and changing of wake words.</p>
        <p>-Different language by asking.</p>
        <p>-An ability to show the web cam a picture and asking for translation or meaning.</p>
        <p>-Text communication via Facebook messenger.</p>
        <p>Main Tech Used:</p>
        <p>Java, Shell script, Sphinx4j, Mary text to speech</p>
      </div>
      <br />
    </div>
  );
}
