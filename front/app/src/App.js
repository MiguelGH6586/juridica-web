import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  // console.log('la rama funciona....');

  // probar volumens

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let res = await fetch('http://backend_web:80/clients', {
        method: 'POST',
        body: JSON.stringify({
          cc: '',
          first_name: name,
          last_name: '',
          cellphone: mobileNumber,
          email: email,
        }),
      });
      let resJson = await res.json();
      console.log(resJson.status);
      if (resJson.status === 200) {
        setName('');
        setEmail('');
        setMessage('User created successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Hello World 🌎</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={e => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
