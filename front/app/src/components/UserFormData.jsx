// import { createPortal } from 'react-dom';

import styles from './UserFormData.module.css';
import '../index.css';

function UserFormData() {
  return (
    <div className={styles.popup}>
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

          <form className={styles.ctaForm} name="sing-up">
            <div>
              <label htmlFor="full-name">Cedula</label>
              <input
                id="cedula"
                type="text"
                placeholder="54393872"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="full-name">Name</label>
              <input
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
                id="cell-number"
                type="text"
                placeholder="300 876 6969"
                name="Cell number"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
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
            <button className="btn">Sing up now</button>
          </form>
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

//Submit event controler
// let handleSubmit = async event => {
//   event.preventDefault();
//   try {
//     let res = await fetch('/clients', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         cc: userInput.nacionalId,
//         first_name: userInput.name,
//         last_name: userInput.secondName,
//         cellphone: userInput.mobileNumber,
//         email: userInput.emailAdress,
//       }),
//     });
//     let resJson = await res.json();
//     console.log(res.status);
//     if (res.status === 200) {
//       console.log('User added succedfully');
//       setUserInput({
//         nacionalId: '',
//         name: '',
//         secondName: '',
//         emailAdress: '',
//         mobileNumber: '',
//       });
//     } else {
//       console.log('Some error occured');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
