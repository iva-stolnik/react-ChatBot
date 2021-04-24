import React from "react";

const Main = (props) => {
  const { ChatWindow, poruke, setPoruke, randomItem, updateChatbot } = props;
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
    <div className="mainContainer">
      <ChatWindow
        ispisPoruke={ispisPoruke}
        setPoruke={setPoruke}
        updateChatbot={updateChatbot}
      />
    </div>
  );
};

export default Main;
