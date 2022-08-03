import './App.css';
import './App.scss';
import ButtonHome from './components/ButtonHome/ButtonHome';
import Home from './components/Home/Home';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [games, setGames] = useState([]);

  const callGames = async () => {
    console.log('test')
    const games = await axios.get('http://localhost:3001/videogames');
    console.log(games.data)
    setGames(games.data);
  }
  return (
    <div className="App">
      <h1>PrtenGames</h1>
      <ButtonHome callGames={callGames}/>
      {games.length > 0 && <Home />}
    </div>
  );
}

export default App;
