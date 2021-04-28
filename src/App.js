import React from "react";
import Main from "./components/Main";
import data from "./data.js";
import "./App.css";

function App() {
  const [userMsg, setUserMsg] = React.useState([
    ["I am a chatbot. Talk to me whenever you want :)"],
  ]);
  const chatbotMsg = [
    "Deleted code is debugged code.",
    "It’s not a bug — it’s an undocumented feature.",
    "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code …",
    "A program is never less than 90% complete and never more than 95% complete.",
    "Programming made the impossible possible. You can have a null object and a constant variable.",
    "Why do Java programmers have to wear glasses? Because they don’t C#.",
    "Two bytes meet. The first byte asks, ‘Are you ill?’ The second byte replies, ‘No, just feeling a bit off.",
    "There’s no place like 127.0.0.1.",
    "There is an easy way and a hard way. The hard part is finding the easy way.",
  ];
  //get random item from chatbotMsg and push it to userMsg
  let randomItem = chatbotMsg[Math.floor(Math.random() * chatbotMsg.length)];

  //save current message and update userMsg state
  const saveUserMsg = (event) => {
    let checkUserInput = false;
    const newUserMsg = event.key === "Enter" ? event.target.value : "";

    setUserMsg((old) => {
      if (newUserMsg === "") {
        let newState = [...old];
        return newState;
      }
      let newState = [...old, newUserMsg];

      data.map((msg) => {
        if (event.target.value === msg.q) {
          randomItem = msg.a;
          checkUserInput = true;

          return randomItem;
        }
        return randomItem;
      });

      if (checkUserInput) {
        setTimeout(() => {
          setUserMsg((old) => {
            let newList = [...old, [randomItem]];
            checkUserInput = false;
            return newList;
          });
        }, Math.random() * 10000);
      }

      console.log(newState);
      //reset values
      event.target.value = "";
      checkUserInput = true;

      return newState;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Chat app</h1>
      </header>
      <Main userMsg={userMsg} saveUserMsg={saveUserMsg} />
      <footer>
        <p>Iva Filipović © 2021</p>
      </footer>
    </div>
  );
}

export default App;
