import './App.css';
import './App.scss';
import ButtonHome from './components/ButtonHome/ButtonHome';

function App() {
  return (
    <div className="App">
      <h1>PrtenGames</h1>
      <ButtonHome props={callGames}/>
    </div>
  );
}

export default App;
