import styles from "@/styles/Home.module.css";
// import Button from '@/components/button'
import { useState } from "react";

export default function ChatGPT() {
  const [text, setText] = useState<any>("");
  const [prom, setinput] = useState("");
  const [chatList, setChatList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  // bad example
  //let variable = "Change This";

  function addChat(message:string) {
    setChatList(chatList => [...chatList, message])
  }

  function handleClick() {
    let age = Number(prompt("당신의 나이는 몇살인가요?"));
    if (!age)
      return
    while (!age) {
      age = Number(prompt("숫자를 입력해주세요"));
      if (!age)
        break;
    }

    if (age > 25) {
      setText("나이가 정말 많으시군요");
    } else if (age > 22) {
      setText("나이가 적당하네요");
    } else {
      setText("부럽다...");
    }
  }

  // function handleClickBad(){
  //   variable = 'Changed'
  //   console.log(variable)
  // }

  async function fetchGpt() {
    const res = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prom),
    });

    const {result, coin} = await res.json();

    console.log(coin)
    
    return result
  }

  async function handleClickApi() {
    setLoading(true);
    addChat(prom)
    console.log('prom', chatList)
    
    const data = await fetchGpt();

    setLoading(false);
    addChat(data)
    console.log('data', chatList)
    setinput('')
  }

  async function handleEcho() {
    const res = await fetch("/api/echo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prom),
    });

    const data = await res.json();
    alert(data);
  }

  return (
    <div className={styles.container}>
      
      {/* Demo 1 */}

      {/* <h2 style={{color:'pink'}}>Demo 1 : User Input from Prompt</h2>
      <button className={styles.button} onClick={handleClick}>
        안녕하세요 혹시 나이가...
      </button>
      <p>{text}</p> */}

      {/* <button onClick = {handleClickBad}>잘못된 예시</button> */}
      {/* <br /> */}

      {/* Demo 2 */}
      <h2 style={{color:'pink'}}>Demo 2 : User Input from input element</h2>
      <div>
        <input
          onChange={(e) => {
            // console.log(e.target.value)
            setinput(e.target.value);
          }}
          className = {styles.input}
          value = {prom}
        ></input>
        <button className={styles.button} onClick={handleClickApi}>
          검색
        </button>
        {loading ? <span>loading...</span> : null}
      </div>

      <div className={styles.chatbox}>
      {chatList.map((elem,index)=>{
        return <p className={index %2 == 1 ? styles.message : styles.messageMine} key = {index}>{elem}</p>
      })}
      </div>
    </div>
  );
}
