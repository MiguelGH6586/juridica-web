// import { createPortal } from 'react-dom';

import styles from './UserFormData.module.css';

function UserFormData() {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <div>
          <div>
            <h2>We offer a free sample meal</h2>
            <p>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form name="sing-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Sebastian Manco"
                  name="full-name"
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

              <button>Sing up now</button>
            </form>
          </div>
          <div role="img" aria-label="Woman enjoying food"></div>
        </div>
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
