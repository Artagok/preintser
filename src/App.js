import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LangContext, langs } from "./lang-context";
import "./App.css";
import Home from "./compontents/Home";
import Navbar from "./compontents/Navbar";
import About from "./compontents/About";
import Services from "./compontents/Services";
import Contact from "./compontents/Contact";
import Footer from "./compontents/Footer";
import LegalTexts from "./compontents/LegalTexts";
import bg1 from "./assets/img/backgrounds/bg1_blur.jpg";
import bg2 from "./assets/img/backgrounds/bg2_blur.jpg";
import bg3 from "./assets/img/backgrounds/bg3_blur.jpg";
import bg4 from "./assets/img/backgrounds/bg4_blur.jpg";
import bg5 from "./assets/img/backgrounds/bg5_blur.jpg";

const BG_IMGS = [bg1, bg2, bg3, bg4, bg5];

function App() {
  // Global state
  const [lang, changeLang] = useState(
    langs[localStorage.getItem("lang") || "ca"]
  );
  const changeLangAux = l => {
    changeLang(langs[l]);
    localStorage.setItem("lang", l);
  };

  // Set random background for body
  // Second argument is [] to let React know that Effect
  // does not have a dependency on props/state
  // Simulating componentDidMount()
  useEffect(() => {
    document.body.style.backgroundImage = `url("${
      BG_IMGS[Math.floor(Math.random() * BG_IMGS.length)]
    }")`;
  }, []);

  return (
    <div className="app-wrapper">
      <LangContext.Provider value={[lang, changeLangAux]}>
        <Router>
          <Switch>
            <Route exact path="/" basename="/preintser">
              <React.Fragment>
                <Navbar />
                <Home />
                <About />
                <Services />
                <Contact />
              </React.Fragment>
            </Route>
            {/* prettier-ignore */}
            <Route path="/legal"   render={() => <LegalTexts type={0} />} />
            <Route path="/privacy" render={() => <LegalTexts type={1} />} />
            <Route path="/cookies" render={() => <LegalTexts type={2} />} />
          </Switch>
          <Footer />
        </Router>
      </LangContext.Provider>
    </div>
  );
}

export default App;
