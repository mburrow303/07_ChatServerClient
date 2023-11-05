import React from "react";
import { useState } from "react";
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";
import { getAllRooms } from "../../../lib/utils";

function AddRoom({ token, setRooms }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addRoomRoute = "http://127.0.0.1:4000/room/create";

  async function AddNewRoom(e) {
    e.preventDefault();
    console.log("testing this add a room function!");
    // console.log & display data from the input fields
    //console.log(title);
    //console.log(description);
    // Add Room
    let response = await fetch(addRoomRoute, {
      headers: new Headers({
        "content-type": "application/json",
        Authorization: token,
      }),
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    // Get rooms from database
    const rooms = await getAllRooms(token);
    // Update room in parent state
    setRooms(rooms);
  }

  return (
    <div style={{ width: "48%", display: "inline-block" }}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <Form>
            <FormGroup>
              <Input
                placeholder="Room Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Input
                placeholder="Room Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FormGroup>
            <br />
            <Button type="submit" onClick={AddNewRoom}>
              Create Room
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddRoom;
