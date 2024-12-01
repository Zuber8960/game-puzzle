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
    <div style={styles.chatBox}>
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
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "300px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  messages: {
    maxHeight: "200px",
    overflowY: "scroll",
    padding: "10px",
  },
  message: { margin: "5px 0" },
  inputArea: { display: "flex", padding: "10px" },
  input: {
    flexGrow: 1,
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
  },
};

export default ChatBox;
