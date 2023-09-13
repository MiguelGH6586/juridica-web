// import { createPortal } from 'react-dom';
import { useState } from 'react';
import styles from './UserFormData.module.css';
import '../index.css';

function UserFormData({ toggle, setToggle }) {
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
      let res = await fetch('http://localhost:8080/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cc: userInput.nacionalId,
          first_name: userInput.name,
          last_name: userInput.secondName,
          cellphone: userInput.mobileNumber,
          email: userInput.emailAdress,
        }),
      });
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
    <div className={`${toggle ? styles.popupActive : styles.popup}`}>
      <div className={`${styles.content} ${styles.cta}`}>
        <div className={styles['cta-text-box']}>
          <h2 className="heading-secondary">
            No pierdas mas tiempo con tramites
          </h2>
          <p className={styles['cta-text']}>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>

          <form
            onSubmit={handleSubmit}
            className={styles.ctaForm}
            name="sing-up"
          >
            <div>
              <label htmlFor="full-name">Cedula</label>
              <input
                onChange={nationalIdChangeHandlre}
                id="cedula"
                type="text"
                placeholder="54393872"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="full-name">Nombre</label>
              <input
                onChange={nameChangeHandlre}
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="full-name">Apellido</label>
              <input
                onChange={seconNameChangeHandlre}
                id="apellido"
                type="text"
                placeholder="Apellido"
                name="apellido"
                required
              />
            </div>
            <div>
              <label htmlFor="full-name">Numero de telefono</label>
              <input
                onChange={mobileNumberChangeHandlre}
                id="cell-number"
                type="text"
                placeholder="300 876 6969"
                name="Cell number"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={emailAdressChangeHandlre}
                id="email"
                type="email"
                placeholder="me@example.com"
                name="email"
                required
              />
            </div>
            <div>
              <label>Where did you hear from us?</label>
              <select name="select-where" id="select-where" required>
                <option value=""></option>
                <option value="frineds">Frineds and family</option>
                <option value="youtobe">YouTube videos</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <button className="btn">No pierdas tiempo</button>
          </form>
          <a
            className={styles.popupClose}
            onClick={() => setToggle(toggle => !toggle)}
          >
            X
          </a>
        </div>
        <div
          className={styles['cta-img-box']}
          role="img"
          aria-label="trafict in red ligth"
        ></div>
      </div>
    </div>
  );
}

export default UserFormData;
