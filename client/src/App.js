import './App.css';
import './App.scss';
import ButtonHome from './components/ButtonHome/ButtonHome';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import Form from './components/Form/Form';
// import axios from 'axios';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [games, setGames] = useState([]);

  // const callGames = async () => {
  //   console.log('test')
  //   const games = await axios.get('http://localhost:3001/videogames');
  //   console.log(games.data)
  //   setGames(games.data);
  // }
  return (
    <div className="App">
      <h1>PrtenGames</h1>
      <Routes>
        <Route path='/' element={<ButtonHome />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/home/:id/:createdInDb' element={<GameDetail />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
