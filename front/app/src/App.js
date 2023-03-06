import './App.scss';
import UserDataFrom from './components/newUserAdded/UserDataForm';
import NavBarComponent from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      {/* <h1>Hello World 🌎</h1> */}
      <UserDataFrom></UserDataFrom>
    </div>
  );
}

export default App;
