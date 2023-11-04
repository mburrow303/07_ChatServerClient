import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRoom(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addRoomRoute = 'http://127.0.0.1:4000/room/create';

  return (
    <div>
      <form>
        <input placeholder="Room Title" onChange={
          e => {
           setTitle(e.target.value)
          }
        } />
        <br />
        <input placeholder="Room Description" onChange={
          e => {
            setDescription(e.target.value)
          }
        } />
        <br />
        <button type="submit" onClick={displayInputFields}>Create Room</button>
      </form>
    </div>
  )

  async function displayInputFields (e) {
    e.preventDefault();
    // console.log & display data from the input fields
    console.log('testing this add a room function!');
    console.log(title);
    console.log(description);

  try {
    let response = await fetch(addRoomRoute, {
    
      headers: new Headers({
        'content-type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description
      })
    });

    let results = await response.json();
    console.log(results);
    //props.setToken(results.token);
    if(response.status === 200)
     navigate('/create')
   } catch(error) {
    console.log(error);
   }
  }
  // getAllRooms();
}

export default AddRoom