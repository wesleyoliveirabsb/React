import Conteudo from './components/Conteudo';
import Constante from './components/constante';
import './App.css';
import MeuComponente from './components/MeuComponente';

function App() {
  return (
    <div className="App">
      <p>olá, mundo!. <br></br>esse é meu primeiro projeto de react</p>
      <MeuComponente></MeuComponente>
      <Conteudo></Conteudo>
      <MeuComponente></MeuComponente>
       <p>também é possivel utilizar os componentes abrindo e fechando eles na mesma tag</p>
      <MeuComponente/>
      <Conteudo/>
      <Constante/>
    </div>
  );
}

export default App;
