import Conteudo from './components/Conteudo';
import Constante from './components/constante';
import './App.css';
import MeuComponente from './components/MeuComponente';
import BlueButton from './components/BlueButton';
import BlueButtonProp from './components/BlueButtonProp';
import Aluno from './components/Aluno'

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

      <div><h1>Aqui veremos como funciona as props</h1>
        <p>primeiro um componente que não tem prop</p>
        <BlueButton></BlueButton>
        <BlueButton></BlueButton>
        <p>não importa quantas vezes usarmos esse componente ele vai continuar sendo o mesmo <br></br> pois não tem prop nele</p> 
        <BlueButtonProp></BlueButtonProp>   
        <p>já nesse segundo exemplo ele não tem um html de texto interno ele tem uma props.text <br></br> 
          que pode ser modificada para o proposito do componente</p>
        <BlueButtonProp text='Mudou!!'></BlueButtonProp>
        <BlueButtonProp text= 'todos esses botões'></BlueButtonProp>
        <BlueButtonProp text='são feitos com o mesmo componente'></BlueButtonProp>
        <p>o terceiro exemplo mostra um metodo diferente de trabalhar com props conhecido como</p>
        <h1>Structuring</h1>
        <p>structing apesar de parecer com o metodo simples, permite o uso de mais informação dentro da função <br></br>
            como por exemplo no componente abaixo-</p>
        <Aluno name='will' age ='25' level ='50'></Aluno>
        <p>tudo dentro dessa div é parte de uma structure</p>
        <p>structuring também é bom para organizar o código</p>
        <h1>resumo</h1>
        <p>as props no geral dão bastante autonomia de dinamismo a um componente</p>
        <p>existem 2 metodos para trabalhar com props, o metodo padrão, como visto no componente do botão azul, o metodo de structing que é mais recomendado para quando for utilziar vairas informações, como visto na fica de aluno.  </p>
        <p>quando você trabalha com as propriedades você tem total controle sobre elas, você não necessariamente precisa tornalas obrigatorias uma props, ela não irá quebrar seu código, o seu componente vai funcionar sem elas, porem algumas coisas podem ficar faltando</p>
        <p>diferete do html com os componentes e props o desenvolvedor tem total poder sobre como eles vão funcionar</p>
      </div>

    </div>
  );
}

export default App;
