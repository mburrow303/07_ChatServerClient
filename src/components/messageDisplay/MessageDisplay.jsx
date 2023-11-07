import React from "react";
import { useNavigate } from "react-router-dom";

import AddMessage from "./addmessage/AddMessage";
import UpdateMessage from "./updatemessage/UpdateMessage";
import DeleteMessage from "./deletemessage/DeleteMessage";

function MessageDisplay({ token, getAllMessages }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* <AddMessage path="/message/create" token={token} getAllMessages={getAllMessages} /> */}
      {/* <DeleteMessage path="/message/:id" token={token} getAllMessages={getAllMessages}/> */}
      {/* <UpdateMessage path="/message/:id" token={token} getAllMessages={getAllMessages}/> */}
    </div>
  );
}

export default MessageDisplay;