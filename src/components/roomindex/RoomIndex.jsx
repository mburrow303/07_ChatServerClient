import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

import Display from "../display/Display";

function RoomIndex({ token, getAllRooms }) {
  const navigate = useNavigate();

  const getAllRoomsRoute = "http://127.0.0.1:4000/room/list";

  async function getAllRooms(e) {
    e.preventDefault();
    console.log("testing this get all rooms function!");

    try {
      let response = await fetch(getAllRoomsRoute, {
        headers: new Headers({
          "content-type": "application/json",
          Authorization: token,
        }),
        method: "GET",
      });

      let results = await response.json();
      console.log(results);

      if (response.status === 200) navigate("/room/create");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Display token={token} getAllRooms={getAllRooms} />
      <br />
      <br />
      <br />
      <br />
      <Button type="submit" onClick={getAllRooms}>
        Show All Rooms
      </Button>
    </div>
  );
}

export default RoomIndex;