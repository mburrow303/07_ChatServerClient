import React from "react";

import { Button } from "reactstrap";

import { getAllRooms } from "../../lib/utils";
import AddRoom from "../display/addroom/AddRoom";

function RoomIndex({ token }) {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    async function runEffect() {
      const allRooms = await getAllRooms(token);
      setRooms(allRooms);
    }
    runEffect();
  }, []);

  return (
    <div>
      {rooms.map((room) => {
        console.log(room);
        return <p>{room.title}</p>;
      })}
      <AddRoom token={token} setRooms={setRooms} />
    </div>
  );
}

export default RoomIndex;
