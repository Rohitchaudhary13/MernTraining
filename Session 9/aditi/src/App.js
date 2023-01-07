import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Button />
      <Greet name="Vickey Kaushal!" hero="Thor!" />
    </div>
  );
}

export default App;
