import './App.css';
import Navbar from './components/Navbar';
import ItenListContainer from './container/ItenListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItenListContainer greeting={"Bienvenidos a Next Level"} />
    </div>
  );
}

export default App;
