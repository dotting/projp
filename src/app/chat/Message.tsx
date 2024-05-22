// src/components/Message.tsx
import React, { Fragment } from "react";
import { MessageDto } from "./MessageDto";
import Restbubble from "components/Restbubble";

interface MessageProps {
  message: MessageDto;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  if (message.cards) {
    return (
      <div style={{ textAlign: "left", margin: "8px" }}>
        <Restbubble rest={message.cards}/>
      </div>
    );
  }
  else if (message.content){
    return (
    <div style={{ textAlign: message.isUser ? "right" : "left", margin: "8px" }}>
      <div
        style={{
          color: message.isUser ? "#ffffff" : "#000000",
          backgroundColor: message.isUser ? "#1186fe" : "#eaeaea",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        {message.content.split("\n").map((text, index) => (
          <Fragment key={index}>
            {text}
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );};
};

export default Message;