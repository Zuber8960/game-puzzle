import React from "react";

const Navbar = ({ toggleChat, showChat }) => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>React 3D Game</h1>
      <div style={styles.linksContainer}>
        {/* <a style={styles.link} href="#game">
          Game
        </a> */}
        <a
          style={styles.link}
          onClick={toggleChat}
        >
          {showChat ? "Close Chat" : "Open Chat"}
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
    // Adding transition to animate layout changes
    transition: "all 0.3s ease-in-out",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  linksContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "white",
    marginLeft: "1rem",
    textDecoration: "none",
    fontSize: "1rem",
  },
  // Responsive styles for mobile view
  "@media (max-width: 600px)": {
    nav: {
      flexDirection: "column", // Stack items vertically on mobile
      alignItems: "flex-start", // Align items to the start
      padding: "1rem",
    },
    title: {
      fontSize: "1.2rem", // Adjust font size on mobile
      marginBottom: "0.5rem",
    },
    linksContainer: {
      flexDirection: "column", // Stack links vertically on mobile
      marginTop: "1rem",
    },
    link: {
      margin: "0.5rem 0", // Add spacing between links
      fontSize: "1.1rem",
    },
  },
};

export default Navbar;
