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
