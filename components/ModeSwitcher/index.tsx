import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  // idk why, but need use effect
  // set initial mode in local storage
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    if (json != null) {
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  // add class and write to local storage on change of darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <HiMoon className="fill-current text-black dark:text-white block h-8 w-auto" aria-hidden="true" />
      ) : (
        <HiSun className="fill-current text-black dark:text-white block h-8 w-auto" aria-hidden="true" />
      )}
    </button>
  );
};

export default ModeSwitcher;
