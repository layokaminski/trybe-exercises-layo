import './App.css';
import data from './data'
import PokemonCardList from './PokemonCardList';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonCardList list={data} />
    </div>
  );
}

export default App;
