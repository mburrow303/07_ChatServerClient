//This function fetches AllRooms from server
export async function getAllRooms(token) {
  const getAllRoomsRoute = "http://127.0.0.1:4000/room/list";
  console.log("testing this get all rooms function!");

  const response = await fetch(getAllRoomsRoute, {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: token,
    }),
    method: "GET",
  });

  const results = await response.json();
  return results.getAllRooms;
}

//This function fetches AllMessages in a specific room from server
export async function getAllMessages(token) {
  const getAllMessagesRoute = "http://127.0.0.1:4000/message/list/:id";
  console.log("testing this get all messages in a room function!");

  const response = await fetch(getAllMessagesRoute, {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: token,
    }),
    method: "GET",
  });

  const results = await response.json();
  return results.getAllMessages;
}