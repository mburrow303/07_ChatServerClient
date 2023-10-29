import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Cardbody, CardLink, Form, FormGroup, Input, Button } from 'reactstrap';

function Login({ setToken }) {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(e) {
    e.preventDefault(); // stop the page from reloading

    const response = await fetch('http://localhost:4000/user/login', {
      headers: new Headers({
        'content-type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });

    const results = await response.json();
    console.log(response.status);
    setToken(results.token);
    if(response.status === 200)
      navigate('/about')
  }

  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <Cardbody>
      <Form onSubmit={loginUser}>
        <FormGroup>
        <Input 
          placeholder="Email@email.com" 
          onChange={e => setEmail(e.target.value)} 
        />
        </FormGroup>
        <Input 
          placeholder="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
        />
        <CardLink href="http://localhost:3000/user/signup">
      Create Account
    </CardLink>
        
        <Button type="submit">Login</Button>
      </Form>
      </Cardbody>
      </Card>
    </div>
  )
}

export default Login;