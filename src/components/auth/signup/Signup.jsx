import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Signup(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupRoute = 'http://127.0.0.1:4000/user/signup';

  return (
    <div>
      <form>
        <input placeholder="username" onChange={
          (e) => {
            setUsername(e.target.value)
          }
        } />
        <br />
        <input placeholder="email" onChange={
          (e) => {
            setEmail(e.target.value)
          }
        } />
        <br />
        <input placeholder="password" type="password" onChange={
          e => setPassword(e.target.value)
        } />
        <br />
        <button type="submit" onClick={displayInputFields}>Submit</button>
      </form>
      
      {/*
        username !== ''
        ?
        <DisplayUser username={username} password={password}/>
        :
        null
      */}
    </div>
  )

  async function displayInputFields (e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(username);
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          'content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });

      let results = await response.json();
      console.log(results); // print the results to see if the fetch works
      props.setToken(results.token);
      if(response.status === 200)
      navigate('/about')
   } catch(error) {
    console.log(error);
   }
  }
}

function DisplayUser(props) {
  return (
    <div>
      <h2>Username: {props.username}</h2>
      <h2>Password: {props.password}</h2>
    </div>
  )
}

{ /* 
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardLink
} from 'reactstrap';

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card> */}

export default Signup