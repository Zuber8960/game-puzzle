// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>React 3D Game</h1>
      <div>
        <a style={styles.link} href="#game">
          Game
        </a>
        <a style={styles.link} href="#chat">
          Chat
        </a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  title: { margin: 0, fontSize: "1.5rem" },
  link: { color: "white", marginLeft: "1rem", textDecoration: "none" },
  "@media (max-width: 600px)": {
    nav: { flexDirection: "column", padding: "1rem" },
    title: { fontSize: "1.2rem" },
    link: { margin: "0.5rem" },
  },
};

export default Navbar;
