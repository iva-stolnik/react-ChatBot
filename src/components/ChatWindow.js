import React from "react";

const ChatWindow = ({ setPoruke, poruke }) => {
  //save current message and update poruke state
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

  //what to render
  let i = 0;
  const ispisPoruke = poruke.map((poruka, index) => {
    if (poruka.constructor === Array) {
      return (
        <h4 className="chatbotH4" key={index} style={{ order: i-- }}>
          {poruka[0]}
        </h4>
      );
    }
    return (
      <h4 key={index} style={{ order: i-- }}>
        {poruka}
      </h4>
    );
  });

  return (
    <div className="mainChatWindow">
      <h2>Chatbot Jane Doe</h2>
      <div className="msgWindow">{ispisPoruke}</div>
      <input type="text" onKeyPress={(event) => spremiPoruku(event)} />
    </div>
  );
};

export default ChatWindow;
