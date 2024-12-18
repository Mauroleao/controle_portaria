function TabelaMotoristas({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Cnh</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {
          vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td>{obj.cnh}</td>
            <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaMotoristas;