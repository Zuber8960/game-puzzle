import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Importing Navbar
import ChatBox from "./components/ChatBox"; // Importing ChatBox
import GameCanvas from "./components/GameCanvas";


const App = () => {
  const [showChat, setShowChat] = useState(false); // State to toggle chat visibility

  const toggleChat = () => {
    setShowChat((prevState) => !prevState); // Toggle the chatbox visibility
  };

  return (
    <div>
      {/* Pass toggleChat function to Navbar */}
      <Navbar toggleChat={toggleChat} showChat={showChat} />
      <div style={styles.container}>
        <GameCanvas />
        </div>
      
      {/* Conditionally render the ChatBox component */}
      {showChat && <ChatBox />}
    </div>
  );
};

export default App;

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

