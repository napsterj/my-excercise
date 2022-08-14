import logo from './logo.svg';
import './App.css';
import  Excercise from './Excercise'

function App() {
  const user = "Abhishek's";
  function goToExcercise() {
    console.log('button clicked');
  }
  return (
    <div className="App">
      <header className="App-header">
        <Excercise />
      </header>
    </div>
  );
}

export default App;
