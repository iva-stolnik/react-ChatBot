import React from "react";

const Main = (props) => {
  const { ChatWindow, poruke, setPoruke, updateChatbot } = props;

  return (
    <div className="mainContainer">
      <ChatWindow
        poruke={poruke}
        setPoruke={setPoruke}
        updateChatbot={updateChatbot}
      />
    </div>
  );
};

export default Main;
