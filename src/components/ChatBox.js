// src/components/ChatBox.js
import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("chatMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      socket.current.emit("chatMessage", input);
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <p key={index} style={styles.message}>
            {msg}
          </p>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send on Enter
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%", // Full height of the screen
    width: "300px", // Fixed width
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ddd", // Divider between chat and content
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    padding: "10px",
    "@media (max-width: 600px)": {
      width: "100%", // On mobile, take full width
      height: "50%", // Take only half the height of the screen on mobile
    },
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "scroll",
    scrollbarWidth: "thin", // Thin scrollbar for Firefox
    msOverflowStyle: "none", // Disable scrollbar for IE
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "10px",
    },
  },
  message: {
    margin: "5px 0",
    wordWrap: "break-word",
    fontSize: "14px",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ChatBox;
