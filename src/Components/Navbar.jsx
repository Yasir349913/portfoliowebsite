/*import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.name}>Yasir</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact us</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Education">Education</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={styles.name}>Yasir</li>
        <li
          className={`${styles.menuButton} ${isMenuOpen ? styles.hide : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </li>
        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/About">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/Projects">Projects</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/Education">Education</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
