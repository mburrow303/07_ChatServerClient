import React from "react";
import { Button } from "reactstrap";

const DeleteRoomButton = ({ objectId, token, getAllRooms }) => {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/room/${objectId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Network Response not ok");
      }

      const data = await response.json();
      console.log("Object deleted:", data);
    } catch (error) {
      console.error("Error deleting Room:", error);
    }
  };
  getAllRooms();

  return (
    <Button color="danger" OnClick={handleDelete}>
      Delete Room
    </Button>
  );
};

export default DeleteRoomButton;