import React , { useState }from 'react';

function DeleteMessage() {

    const [message, setMessage] = useState('');
    
    const [response, setResponse] = useState('');
    
    const handleInputChange = (e) => {
      e.preventDefault();
      
      try {
        let response = await fetch("http://127.0.0.1:4000/user/:id", {
          method: 'DELETE',
        });
        
        const data = await response.json();
        setResponse(data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    return( 
      <div className="delete-message">
  <form onSubmit={handleSubmit}>
  <input type="text" value={message} onChange={handleInputChange}/>
  <button type="submit">Message Deleted</button>
  </form>
  {response && <p>{response}</p>}
  </div>
  );
};

export default DeleteMessage