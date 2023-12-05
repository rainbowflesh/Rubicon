import { useState, useEffect, useRef } from "react";
import Preferences from "./preferences";
import About from "./about";

export default function MenuBar() {
  const [isPreferencesMenuOpen, setPreferencesMenuOpen] = useState(false);
  const [isAboutMenuOpen, setAboutMenuOpen] = useState(false);
  const preferencesRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    if (preferencesRef.current && !preferencesRef.current.contains(event.target)) {
      setPreferencesMenuOpen(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setAboutMenuOpen(false);
    }
  };

  const openPreferencesMenu = () => {
    setPreferencesMenuOpen(true);
    setAboutMenuOpen(false);
  };

  const openAboutMenu = () => {
    setAboutMenuOpen(true);
    setPreferencesMenuOpen(false);
  };

  return (
    <>
      <ul role="menu-bar">
        <li role="menu-item" tabIndex={0} aria-haspopup="false">
          <a href="#preferences" onClick={openPreferencesMenu}>
            Preferences
          </a>
        </li>
        <li role="menu-item" tabIndex={1} aria-haspopup="false">
          <a href="#about" onClick={openAboutMenu}>
            About
          </a>
        </li>
        <li className="version-number" aria-haspopup="false">
          <a>Version {APP_VERSION}</a>
        </li>
      </ul>
      {isPreferencesMenuOpen && (
        <div className="menu preferences-panel" ref={preferencesRef}>
          <Preferences />
        </div>
      )}
      {isAboutMenuOpen && (
        <div className="menu about-panel" ref={aboutRef}>
          <About />
        </div>
      )}
    </>
  );
}
