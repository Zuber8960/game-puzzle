// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import GameCanvas from "./components/GameCanvas";
import ChatBox from "./components/ChatBox";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <GameCanvas />
        <ChatBox />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
};

export default App;
