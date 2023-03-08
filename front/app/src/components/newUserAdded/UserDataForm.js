//React librari imports
import { useState } from 'react';
//Style imports
import './UserDataForm.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faEnvelope,
  faPhoneFlip,
  faIdCard,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

const UserDataFrom = () => {
  //Encapsulated this in one object.
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');
  // // const [message, setMessage] = useState('');

  const [userInput, setUserInput] = useState({
    nacionalId: '',
    name: '',
    secondName: '',
    emailAdress: '',
    mobileNumber: '',
  });

  let nationalIdChangeHandlre = event => {
    event.preventDefault();
    // setEnterAmount(event.target.value);
    setUserInput({
      ...userInput,
      nacionalId: event.target.value,
    });
  };
  let nameChangeHandlre = event => {
    event.preventDefault();
    // setEnterAmount(event.target.value);
    setUserInput({
      ...userInput,
      name: event.target.value,
    });
  };
  let seconNameChangeHandlre = event => {
    event.preventDefault();
    // setEnterAmount(event.target.value);
    setUserInput({
      ...userInput,
      secondName: event.target.value,
    });
  };
  let emailAdressChangeHandlre = event => {
    event.preventDefault();
    // setEnterAmount(event.target.value);
    setUserInput({
      ...userInput,
      emailAdress: event.target.value,
    });
  };
  let mobileNumberChangeHandlre = event => {
    event.preventDefault();
    // setEnterAmount(event.target.value);
    setUserInput({
      ...userInput,
      mobileNumber: event.target.value,
    });
  };

  //Submit event controler
  let handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await fetch('/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cc: userInput.nacionalId,
          first_name: userInput.name,
          last_name: userInput.secondName,
          cellphone: userInput.mobileNumber,
          email: userInput.emailAdress,
        }),
      });
      let resJson = await res.json();
      console.log(res.status);
      if (res.status === 200) {
        console.log('User added succedfully');
        setUserInput({
          nacionalId: '',
          name: '',
          secondName: '',
          emailAdress: '',
          mobileNumber: '',
        });
      } else {
        console.log('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="form">
      <div className="container">
        <div className="left">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1>
                Let's work together <span>.</span>{' '}
              </h1>
              <p className="text">
                Or reach us via : <a href="mailto">Publish@mail.com</a>
              </p>
            </div>
            {/* Here you can put your form */}
            <form
              className="contact-form"
              method="post"
              onSubmit={handleSubmit}
            >
              {/* First Name */}
              <div className="input-wrap">
                <input
                  name="First Name"
                  autoComplete="off"
                  type="text"
                  className="contact-input"
                  onChange={nameChangeHandlre}
                  required
                />
                <label htmlFor="">First Name</label>
                <FontAwesomeIcon className="icon" icon={faAddressCard} />
              </div>
              {/* Secon Name */}
              <div className="input-wrap">
                <input
                  name="Second Name"
                  autoComplete="off"
                  type="text"
                  className="contact-input"
                  onChange={seconNameChangeHandlre}
                  required
                />
                <label htmlFor="">Second Name</label>
                <FontAwesomeIcon className="icon" icon={faAddressCard} />
              </div>
              {/* cedula */}
              <div className="input-wrap">
                <input
                  name="Cedula"
                  autoComplete="off"
                  type="text"
                  className="contact-input"
                  onChange={nationalIdChangeHandlre}
                  required
                />
                <label htmlFor="">Cedula</label>
                <FontAwesomeIcon className="icon" icon={faIdCard} />
              </div>
              {/* Email */}
              <div className="input-wrap">
                <input
                  name="Email"
                  autoComplete="off"
                  type="email"
                  className="contact-input"
                  onChange={emailAdressChangeHandlre}
                  required
                />
                <label htmlFor="">Email</label>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </div>
              {/* Numero de celular */}
              <div className="input-wrap w-100">
                <input
                  name="Numero celualar"
                  autoComplete="off"
                  type="text"
                  className="contact-input"
                  onChange={mobileNumberChangeHandlre}
                  required
                />
                <label htmlFor="">Numero celualar:</label>
                <FontAwesomeIcon className="icon" icon={faPhoneFlip} />
              </div>

              {/* button section */}
              <div className="contact-buttons">
                <button className="btn upload">
                  <span>
                    <FontAwesomeIcon icon={faPaperclip} />
                  </span>
                  <input type="file" name="attachement" />
                </button>
                <input type="submit" value="Create" className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default UserDataFrom;

// <form onSubmit={handleSubmit}>
//   {/* <div className="newUser_controls">
//     <div className="newUser_control">
//       <label>Cedula: </label>
//       <input
//         type="text"
//         value={userInput.nacionalId}
//         placeholder="Numero"
//         onChange={nationalIdChangeHandlre}
//       />
//     </div>
//     <div className="newUser_control">
//       <label>Nombre</label>
//       <input
//         type="text"
//         value={userInput.name}
//         placeholder="Name"
//         onChange={nameChangeHandlre}
//       />
//     </div>
//     <div className="newUser_control">
//       <label>Apellidos: </label>
//       <input
//         type="text"
//         value={userInput.secondName}
//         placeholder="Apellidos"
//         onChange={seconNameChangeHandlre}
//       />
//     </div>

//     <div className="newUser_control">
//       <label>Email: </label>
//       <input
//         type="text"
//         value={userInput.emailAdress}
//         placeholder="Email"
//         onChange={emailAdressChangeHandlre}
//       />
//     </div>
//     <div className="newUser_control">
//       <label>Numero celualar: </label>
//       <input
//         type="text"
//         value={userInput.mobileNumber}
//         placeholder="Numero"
//         onChange={mobileNumberChangeHandlre}
//       />
//     </div>
//   </div>

//   <div className="new-expense__actions">
//     <button type="submit">Create</button>
//   </div> */}
//   {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
// </form>
