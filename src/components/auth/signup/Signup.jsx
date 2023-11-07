import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

function Signup(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupRoute = "http://127.0.0.1:4000/user/signup";

  //console.log("testing this signup function!");

  return (
    <div>
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <CardBody>
          <Form>
            <FormGroup>
              <Input
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input placeholder="verify password" type="password" />
            </FormGroup>
            <CardLink
              style={{ margin: "3px 10px" }}
              href="http://localhost:3000/login"
            >
              Back to Login
            </CardLink>
            <Button
              style={{ margin: "3px 10px" }}
              type="submit"
              onClick={displayInputFields}
            >
              Signup
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );

  async function displayInputFields(e) {
    e.preventDefault();
    console.log("testing this display input function");
    //console.log(username);
    //console.log(email);
    //console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          "content-type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      let results = await response.json();
      console.log(results);
      console.log("testing this signup function!");
      props.setToken(results.token);
      if (response.status === 200) navigate("/room/create");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Signup;