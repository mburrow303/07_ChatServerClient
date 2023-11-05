import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddRoom from "./addroom/AddRoom";
import UpdateRoom from "./updateroom/UpdateRoom";
import DeleteRoom from "./deleteroom/DeleteRoom";

function Display({ token, getAllRooms }) {
  const navigate = useNavigate();

  return (
    <div>
      <AddRoom path="/room/create" token={token} getAllRooms={getAllRooms} />
      {/* <DeleteRoom path="/room/:id" token={token} getAllRooms={getAllRooms}/> */}
      {/* <UpdateRoom path="/room/:id" token={token} getAllRooms={getAllRooms}/> */}
    </div>
  );
}

export default Display;