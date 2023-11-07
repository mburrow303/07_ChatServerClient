import React from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
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
      <Card className="my-2" style={{ width: '18rem' }}>
        <CardHeader>
          <h2>Available Rooms</h2>
        </CardHeader>
        <CardBody style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {rooms.map((room) => (
            <p key={room.id}>{room.title}</p>
          ))}
        </CardBody>
        <AddRoom token={token} setRooms={setRooms} />
      </Card>
    </div>
  );
}

export default RoomIndex;