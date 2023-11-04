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

function Login({ setToken }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/user/login", {
      headers: new Headers({
        "content-type": "application/json",
      }),
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const results = await response.json();
    console.log(response.status);
    setToken(results.token);
    if (response.status === 200) navigate("/room/list");
  }

  return (
    <div style={{ width: "48%", display: "inline-block" }}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <Form onSubmit={loginUser}>
            <FormGroup>
              <Input
                placeholder="Email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <CardLink
              style={{ margin: "3px 10px" }}
              href="http://localhost:3000/"
            >
              Create Account
            </CardLink>

            <Button style={{ margin: "3px 10px" }} type="submit">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
