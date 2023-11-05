import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";

function AddRoom({ token, getAllRooms }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addRoomRoute = "http://127.0.0.1:4000/room/create";

  async function AddNewRoom(e) {
    e.preventDefault();
    console.log("testing this add a room function!");
    // console.log & display data from the input fields
    //console.log(title);
    //console.log(description);

    try {
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

      let results = await response.json();
      console.log(results);
      if (response.status === 200) navigate("/");
    } catch (error) {
      console.log(error);
    }
    getAllRooms(e);
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