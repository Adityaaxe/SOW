import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/CSS/Term.css";

const Terms = () => {
  const [termData, setTermData] = useState(null);
  const [language, setLanguage] = useState("English");

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
    return <div className="terms-page">Loading...</div>;
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

      // Split line into words + spaces
      const segments = trimmedLine.split(/(\s+)/); // Keeps spacing intact

      const modifiedLine = segments.map((segment, i) => {
        if (segment === "{here}") {
          console.log("Not Working");
          return (
            <a
              key={`link-${index}-${i}`}
              href="#"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              here
            </a>
          );
        }
        return <React.Fragment key={`frag-${index}-${i}`}>{segment}</React.Fragment>;
      });

      return <p key={index}>{modifiedLine}</p>;
    });
  };

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
        {renderFormattedContent(termData.content1)}
        {renderFormattedContent(termData.content2)}
      </div>

      <button className="back-button">{termData.button}</button>
    </div>
  );
};

export default Terms;
