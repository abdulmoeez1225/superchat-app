import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebase/config";
import firebase from "firebase/compat/app";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(100);
  //@ts-ignore
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //@ts-ignore
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={
                msg as { text: any; uid: any; photoURL: any; createdAt: any }
              }
            />
          ))}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
