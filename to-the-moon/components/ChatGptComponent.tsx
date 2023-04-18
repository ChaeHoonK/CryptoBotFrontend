import { useState, useRef, useEffect } from "react";
import styles from "./ChatGptComponent.module.css";
import { useChatContext } from "../context/ChatContext";
import React from "react";


export default function ChatGptComponent() {
  const [prom, setinput] = useState("");
  const [loading, setLoading] = useState(false);
  const { chatList, addChat } = useChatContext();

    const chatBoxBottomRef:any = useRef(null);

    const scrollToBottom = () => {
        chatBoxBottomRef.current?.scrollIntoView({ behavior: "smooth" });
      };
      
      useEffect(() => {
        scrollToBottom();
      }, [chatList]);
      

  async function fetchGpt() {
    const res = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prom),
    });

    const { result, coin } = await res.json();

    return result;
  }

  async function handleClickApi() {
    setLoading(true);
    addChat(prom);
    setinput("");

    const data = await fetchGpt();

    setLoading(false);
    addChat(data);
  }

  return (
    <div className={styles.chatGPTContainer}>
      <div className={styles.title}>Chat with GPT</div>
      <div className={styles.chatbox}>
        {chatList.map((elem, index) => {
          return (
            <React.Fragment key={index}>
              <p
                className={
                  index % 2 === 1 ? styles.message : styles.messageMine
                }
              >
                {elem}
              </p>
            </React.Fragment>
          );
        })}
        {loading ? <span className={styles.spinner}></span> : null}
        <div ref={chatBoxBottomRef} />
      </div>
      <div className={styles.inputContainer}>
        <textarea
          onChange={(e) => {
            setinput(e.target.value);
          }}
          className={styles.input}
          value={prom}
        ></textarea>
        <button className={styles.button} onClick={handleClickApi}>
          Send
        </button>
      </div>
    </div>
  );
}
