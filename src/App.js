import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ChatWindow from "./components/ChatWindow";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [poruke, setPoruke] = React.useState([
    ["Hello there, I am a chatbot. Talk to me whenever you want :)"],
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
  //get random item from chatbotMsg and push it to poruke
  const randomItem = chatbotMsg[Math.floor(Math.random() * chatbotMsg.length)];

  const updateChatbot = (event) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        setPoruke((old) => {
          let newList = [...old, [randomItem]];
          return newList;
        });
      }, Math.random() * 10000);
    }
  };

  return (
    <div onKeyPress={(event) => updateChatbot(event)} className="App">
      <Header />
      <Main
        ChatWindow={ChatWindow}
        poruke={poruke}
        setPoruke={setPoruke}
        chatbotMsg={chatbotMsg}
      />
      <Footer />
    </div>
  );
}

export default App;
