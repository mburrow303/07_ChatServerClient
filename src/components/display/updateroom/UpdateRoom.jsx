import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
} from "reactstrap";



const UpdateRoom = (props) => {
  const navigate = useNavigate();
  const [_id, set_id] = useState("");
  const [ownerId, setownerId] = useState("");
  const [updatedInfo, setupdatedInfo] = useState("");

  const updateRoomRoute = "http://127.0.0.1:4000/user/:id";



   async function displayInputFields (e) {
    e.preventDefault();

    try {
      let response = await fetch(updateRoomRoute, {
        headers: new Headers ({
          "content-type": "application/json",
        }),
        method: "PATCH",
        body: JSON.stringify({ 
           _id: _id,
           ownerId:  ownerId,
           updatedInfo: updatedInfo,
         }),
      });

      let results = await response.json();
      console.log(results);
      props.setToken(results.token);
      if (response.status === 200 ) navigate("/room/list");
    } catch (error) {
      console.error('Error Room Can NOT Update', error); 
    };
  };


// function DisplayUser(props) {

  return (
    <Button
      style={{ margin:"3px 20px",backgroundColor: "pink", color:"purple", font: "inherit" }} type="submit"
      onClick={UpdateRoom}> Update Room
    </Button>
  );

  // return(
  //   <>
  //   <div>
  //     <button>Update Room: {props.button}</button>
  //   </div>
  //   </>
  // )
};
 


export default UpdateRoom;