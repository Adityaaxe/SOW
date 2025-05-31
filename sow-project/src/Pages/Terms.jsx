import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/CSS/Term.css";

const Terms = () => {
  const [termData, setTermData] = useState(null);
  const [language, setLanguage] = useState("English");

  // Fix mobile white space issue by setting --vh to actual window height
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  useEffect(() => {
    fetchTerms(language);
  }, [language]);

  const fetchTerms = (lang) => {
    fetch(`https://sow-8y9z.onrender.com/terms?language=${lang}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched terms:", data);
        if (Array.isArray(data) && data.length > 0) {
          setTermData(data[0]);
        } else {
          console.warn("No data received for language:", lang);
        }
      })
      .catch((err) => console.error("Failed to load terms:", err));
  };

  if (!termData) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  const renderFormattedContent = (text) => {
    return text.split("\n").map((line, index) => {
      const trimmedLine = line.trim();

      // First line styling
      if (index === 0) {
        if (language === "English" && trimmedLine.startsWith("BY ")) {
          const rest = trimmedLine.slice(3).trim();
          return (
            <p key={index}>
              <strong>BY</strong> {rest}
            </p>
          );
        }
        if (language === "Svenska" && trimmedLine.startsWith("GENOM ATT ")) {
          const rest = trimmedLine.slice(10).trim();
          return (
            <p key={index}>
              <strong>GENOM ATT</strong> {rest}
            </p>
          );
        }
      }

      return <p key={index}>{trimmedLine}</p>;
    });
  };

  const combinedLink = (
    <a
      href="https://online.123fakturera.se/us/?height=768&width=1366"
      style={{
        color: "rgb(0, 68, 226)",
        textDecoration: "none",
        cursor: "pointer"
      }}
    >
      {language === "Svenska" ? "här." : "here."}
    </a>
  );

  return (
    <div className="terms-page">
      <div className="terms-header">
        <Navbar
          options={[
            termData.opt1,
            termData.opt2,
            termData.opt3,
            termData.opt4,
            termData.opt5,
          ]}
          language={language}
          onLanguageChange={setLanguage}
        />
        <h2 className="term">{termData.term}</h2>
        <button className="back-button" onClick={() => window.location.href = 'https://google.com'}>
          {termData.button}
        </button>
      </div>

      <div className="terms-content">
        {renderFormattedContent(termData.content1).slice(0, -1)}

        <p>
          {
            renderFormattedContent(termData.content1).slice(-1)[0].props.children
          }{" "}
          {combinedLink}{" "}
          {
            renderFormattedContent(termData.content2)[0].props.children
          }
        </p>

        {renderFormattedContent(termData.content2).slice(1)}
      </div>

      <button className="botm" onClick={() => window.location.href = 'https://google.com'}>
        {termData.button}
      </button>
    </div>
  );
};

export default Terms;
