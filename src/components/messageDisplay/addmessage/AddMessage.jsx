import React from "react";
import {useState} from "react";
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";
import { getAllMessages } from "../../../lib/utils"

function AddMessage({ token, setMessages }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState("");

  const addMessageRoute = "http://127.0.0.1:4000/message/create/:id";

  async function AddNewMessage(e) {
    e.preventDefault();
    console.log("testing this add a message function!");
    // console.log & display data from the input fields
    //console.log(text);
    //console.log(message);

    // Add a Message
    let response = await fetch(addMessageRoute, {
      headers: new Headers({
        "content-type": "application/json",
        Authorization: token,
      }),
      method: "POST",
      body: JSON.stringify({
        text: text
      }),
    });
    // Get messages from database
    const messages = await getAllMessages(token);
    // Update room in parent state
    setMessages(messages);
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
                placeholder="Message Text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </FormGroup>
            <br />
            <Button type="submit" onClick={AddNewMessage}>
              Create Message
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddMessage;