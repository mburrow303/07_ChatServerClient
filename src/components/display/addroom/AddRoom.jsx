import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";
import { getAllRooms } from "../../../lib/utils";

function AddRoom({ token, setRooms }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addRoomRoute = "http://127.0.0.1:4000/room/create";

  async function AddNewRoom(e) {
    e.preventDefault();

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

    // Check if the response is successful (you might want to add error handling here)
    if (response.ok) {
      // Close the modal after adding a room
      toggle();

      // Fetch updated list of rooms
      const rooms = await getAllRooms(token);

      // Update room in parent state
      setRooms(rooms);
    }
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add Room</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Room</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                placeholder="Room Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Room Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={AddNewRoom}>Create Room</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddRoom;
