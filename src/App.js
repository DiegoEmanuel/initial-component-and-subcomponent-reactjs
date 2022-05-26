import "./App.css";
import HelloReact from "./components/HelloReact";
import SayMyTelephone from "./components/SayMyTelephone";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <HelloReact />
      <SayMyTelephone telefone="11223344" />
      <SayMyTelephone telefone="11" />
      <SayMyTelephone telefone="441" />
      <Pessoa
        nome="Pedrinho"
        idade="15"
        profissao="Designer"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
