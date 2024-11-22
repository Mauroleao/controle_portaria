function Tabela({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Cor</th>
          <th>Placa</th>
          <th>Motorista</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.modelo}</td>
            <td>{obj.marca}</td>
            <td>{obj.cor}</td>
            <td>{obj.placa}</td>
            <td>{obj.motorista ? obj.motorista.nome : "N/A"}</td>
            <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}