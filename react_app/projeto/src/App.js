import Conteudo from './components/Conteudo';
import Constante from './components/constante';
import './App.css';
import MeuComponente from './components/MeuComponente';
import BlueButton from './components/BlueButton';

function App() {
  return (
    <div className="App">
      <p>olá, mundo!. <br></br>esse é meu primeiro projeto de react</p>
      <MeuComponente></MeuComponente>
      <Conteudo></Conteudo>
      <BlueButton/>
      <MeuComponente></MeuComponente>
       <p>também é possivel utilizar os componentes abrindo e fechando eles na mesma tag</p>
      <MeuComponente/>
      <Conteudo/>
      <Constante/>
      <BlueButton></BlueButton>
    </div>
  );
}

export default App;
