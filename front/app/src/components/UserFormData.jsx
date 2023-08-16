function UserFormData() {
  return (
    <div>
      <h2>Here you put the form</h2>
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
