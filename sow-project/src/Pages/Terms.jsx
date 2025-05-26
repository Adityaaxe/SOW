import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/CSS/Term.css";

const Terms = () => {
  const [termData, setTermData] = useState(null);
  const [language, setLanguage] = useState("English");

  const fetchTerms = (lang) => {
    fetch(`http://localhost:3000/terms?language=${lang}`)
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

  useEffect(() => {
    fetchTerms(language);
  }, [language]);

  if (!termData) {
    return <div className="terms-page">Loading...</div>;
  }

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
        <h2>{termData.term}</h2>
        <button className="back-button">{termData.button}</button>
      </div>

      <div className="terms-content">
        <p>{termData.content}</p>
      </div>

      <button className="back-button">{termData.button}</button>
    </div>
  );
};

export default Terms;
