import useTime from './hooks/useTime';

function App() {
  const { time, randomNumber, ifMultiple } = useTime();

  return (
    <div className="App">
      { time }
      <br />
      { randomNumber } 
      <br />
      { ifMultiple ? 'Acerto' : '' }
    </div>
  );
}

export default App;
