import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Display from "../display/Display";

function RoomIndex() {
  const navigate = useNavigate();

  const getAllRoomsRoute = 'http://127.0.0.1:4000/room/list';

return (
  <div>
      <form>
        <Display></Display>
        <button type="submit" onClick={getAllRooms}>Show All Rooms</button>
      </form>
    </div>
);

async function getAllRooms (e) {
  e.preventDefault();
  console.log('testing this get all room function!');
  //console.log(title);
  //console.log(description);

try {
  let response = await fetch(getAllRoomsRoute, {
  
    headers: new Headers({
      'content-type': 'application/json'
    }),
    method: 'GET',
    body: JSON.stringify({
      //title: title,
      //description: description
    })
  });

  let results = await response.json();
  console.log(results);
  //props.setToken(results.token);
  if(response.status === 200)
   navigate('/list')
 } catch(error) {
  console.log(error);
  }
 }
}

export default RoomIndex