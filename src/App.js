import me from './img/me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Jared Loveridge</h2>
      <p>For testing purposes.</p>
      <img src={me} alt="Jared" />
    </div>
  );
}

export default App;
