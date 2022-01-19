import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LangContext, langs } from "./lang-context";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LegalTexts from "./components/LegalTexts";
import NotFound from "./components/NotFound";
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
  const changeLangAux = (l) => {
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

  // Keep track of window size to serve it as props
  // for the App children components
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  useLayoutEffect(() => {
    const resize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="app-wrapper">
      <LangContext.Provider value={[lang, changeLangAux]}>
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <React.Fragment>
                <Navbar size={size} />
                <Home size={size} />
                <About />
                <Services />
                <Contact size={size} />
              </React.Fragment>
            </Route>
            {/* prettier-ignore */}
            <Route path="/legal"   render={() => <LegalTexts type={0} />} />
            <Route path="/privacy" render={() => <LegalTexts type={1} />} />
            <Route path="/cookies" render={() => <LegalTexts type={2} />} />
            <Route render={() => <NotFound />} />
          </Switch>
          <Footer />
        </Router>
      </LangContext.Provider>
    </div>
  );
}

export default App;
