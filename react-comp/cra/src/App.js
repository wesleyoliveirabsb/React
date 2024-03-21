
import './App.css';

function Componente(){
  //esse return tem que ser feito com () e não {} /
  return(
      <div>
        <button>Componente de botão!!!</button>
        Este é o meu primeiro componente
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Olá mundo
        <Componente></Componente>
        <Componente></Componente>

        <Componente></Componente>

      </header>
    </div>
  );
}

export default App;
