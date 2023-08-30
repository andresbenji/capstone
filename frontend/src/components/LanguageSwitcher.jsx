import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLangChange = (event) => {
    const lang = event.target.value;
    setSelectedLang(lang);
  };

  return (
    <div className="lang-switcher">
      <div >
        <select id="lang-switch" onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="es">Espanol</option>
        </select>

        <h1>
          <span
            lang="en"
            style={{ display: selectedLang === "en" ? "block" : "none" }}
          >
            Title
          </span>
          <span
            lang="es"
            style={{ display: selectedLang === "es" ? "block" : "none" }}
          >
            Titulo
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
