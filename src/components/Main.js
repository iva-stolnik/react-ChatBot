import React from "react";

const Main = ({ userMsg, saveUserMsg }) => {
  //what to render
  let i = 0;
  const renderMsg = userMsg.map((msg, index) => {
    if (msg.constructor === Array) {
      return (
        <h4 className="chatbotH4" key={index} style={{ order: i-- }}>
          {msg[0]}
        </h4>
      );
    }
    return (
      <h4 key={index} style={{ order: i-- }}>
        {msg}
      </h4>
    );
  });

  return (
    <div className="mainContainer">
      <div className="mainChatWindow">
        <h2>Chatbot Jane Doe</h2>
        <div className="msgWindow">{renderMsg}</div>
        <input type="text" onKeyPress={(event) => saveUserMsg(event)} />
      </div>
    </div>
  );
};

export default Main;
