import "./css/App.css";
import ParticlesBackground from "./Backend/ParticlesBackground";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import AboutMe from "./Frontend/AboutMe";
import Calculator from "./Frontend/Calculator";
import WeatherApp from "./Frontend/WeatherApp";
import FifteenGame from "./Frontend/FifteenGame";
import ContactMe from "./Frontend/ContactMe";

function App() {
  const [content, setContent] = useState("home");

  // Function to handle link clicks
  const handleLinkClick = (newContent) => {
    setContent(newContent);
  };

  // Determine which content to render based on the state
  const renderContent = () => {
    switch (content) {
      case "About":
        return <AboutMe />;
      case "Calculator":
        return <Calculator />;
      case "WeatherApp":
        return <WeatherApp />;
      case "FifteenGame":
        return <FifteenGame />;
      case "ContactMe":
        return <ContactMe />;
      default:
        // Don't return anything if it's not "home", so only the logo shows
        return null;
    }
  };
  return (
    <body>
      <div id="background">
        <ParticlesBackground />
        <div className="container center">
          <div className="header-content">
            <a className="logo" onClick={() => handleLinkClick("home")}>
              K
            </a>
            <h1 className="header">Kim's Portfolio</h1>
            <br />
          </div>
          <CSSTransition
            in={content === "home"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
          <div>
            {content === "home" && (
              <>
                <div className="links-content">
                  <div className="links-column">
                    <ul>
                      <h1>This website links</h1>
                      <li>
                        <a onClick={() => setContent("About")}>About me</a>
                      </li>
                      <li>
                        <a onClick={() => setContent("FifteenGame")}>15-game</a>
                      </li>
                      <li>
                        <a onClick={() => setContent("Calculator")}>Calculator</a>
                      </li>
                      <li>
                        <a onClick={() => setContent("WeatherApp")}>Weather app</a>
                      </li>
                      <li>
                        <a onClick={() => setContent("About")}>money muunnin :D</a>
                      </li>
                      <li>
                        <a onClick={() => setContent("ContactMe")}>Contact me</a>
                      </li>
                    </ul>
                  </div>
                  <div className="links-column">
                    <ul>
                      <h1>My projects</h1>
                      <li>
                        <a
                          href="https://github.com/KimLof/KotlinSnippetTool"
                          target="_blank"
                        >
                          Kotlin snippet tool
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/tiedostosovellus"
                          target="_blank"
                        >
                          Rust file application
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/Rahasovellus"
                          target="_blank"
                        >
                          C# money application
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/PythonDiscord"
                          target="_blank"
                        >
                          Python Discord bot
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/SomeSivu"
                          target="_blank"
                        >
                          HTML/CSS/JS website
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/omat-sivut"
                          target="_blank"
                        >
                          HTML/CSS/JS my old website
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/KimLof/Portfolio"
                          target="_blank"
                        >
                          HTML/CSS/JS my portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            </div>
          </CSSTransition>
          <CSSTransition
            in={content !== "home"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div>
            {renderContent()}
            </div>
            </CSSTransition>
        </div>
      </div>
    </body>
  );
}

export default App;
