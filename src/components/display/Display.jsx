import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddRoom from "./addroom/AddRoom";
import UpdateRoom from "./updateroom/UpdateRoom";
import DeleteRoom from "./deleteroom/DeleteRoom";

function Display() {
  const navigate = useNavigate();

  //const getAllRoomsRoute = 'http://127.0.0.1:4000/room/list';

return (
  <div>
      <form>
        <AddRoom></AddRoom>
        <UpdateRoom></UpdateRoom>
        <DeleteRoom></DeleteRoom>
      </form>
    </div>
 );
}

export default Display