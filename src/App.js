import './App.css';
import HelloReact from './components/HelloReact';

function App() {
  const name = 'Diego';
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/200'
  function sum(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <HelloReact/>
      <h1>Olá reactJS</h1>
      <p>Introdução</p>
      <h2>Alterando JSX - ass {newName}</h2>
      <p>Soma: {sum(5,5)}</p>
      <img src={url} alt="Minha IMG"/>
      <br/>
      
      
    </div>
  );
}

export default App;
