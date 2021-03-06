import React from "react";
import { auth } from "../firebase/config";

const ChatMessage = (props: {
  message: { text: any; uid: any; photoURL: any; createdAt: any };
}) => {
  const { text, uid, photoURL, createdAt } = props.message;
  // @ts-ignore
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
