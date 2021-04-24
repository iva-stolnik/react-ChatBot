import React from "react";

const ChatWindow = ({ ispisPoruke, setPoruke }) => {
  //funkcija za spremanje poruke i updejt stanja Poruke
  const spremiPoruku = (event) => {
    const novaPoruka = event.key === "Enter" ? event.target.value : "";
    setPoruke((old) => {
      if (novaPoruka === "") {
        let newState = [...old];
        return newState;
      }
      let newState = [...old, novaPoruka];
      event.target.value = "";
      console.log(newState);
      return newState;
    });
  };
  //console.log(ispisChatbotPoruke);
  return (
    <div className="mainChatWindow">
      <h2>Chatbot Jane Doe</h2>
      <div className="msgWindow">{ispisPoruke}</div>
      <input type="text" onKeyPress={(event) => spremiPoruku(event)} />
    </div>
  );
};

export default ChatWindow;
