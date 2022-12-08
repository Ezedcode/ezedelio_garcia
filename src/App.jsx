import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";
import GlobalVar from "./context/GlobalVar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Skills from "./pages/Skills";
import GlobalStyles from "./styles/global";

const App = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [statusPage, setStatusPage] = useState(0);

  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isDocumentReady) {
        setIsDocumentReady(true);
      }
    }, 2 * 1000);
  }, [isDocumentReady]);

  return (
    <GlobalVar.Provider
      value={{
        menuBtn,
        setMenuBtn,
        statusPage,
        setStatusPage,
      }}
    >
      <Router>
        <Header />
        {!isDocumentReady ? (
          <Loading />
        ) : (
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        )}
        <GlobalStyles />
      </Router>
      <GlobalStyles />
    </GlobalVar.Provider>
  );
};

export default App;
