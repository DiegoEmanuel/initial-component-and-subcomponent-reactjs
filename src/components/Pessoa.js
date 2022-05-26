function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h1>Nome: {nome}</h1>
      <h3>Idade: {idade}</h3>
      <h3>Profissao: {profissao}</h3>
    </div>
  );
}
export default Pessoa;
