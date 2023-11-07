import React from "react";

function MessageIndex({ token }) {
 const [messages, setMessages] = React.useState([]);

 React.useEffect(() => {
  async function runEffect() {
    const allMessages = await getAllMessages(token);
    setMessages(allMessages);
  }
  runEffect();
  }, 
 []);

 return (
  <div>
      {messages.map((message) => {
        console.log(message);
        return <p>{message.text}</p>;
      })}
      <AddMessage token={token} setMessages={setMessages} />
    </div>
 );
}

export default MessageIndex;