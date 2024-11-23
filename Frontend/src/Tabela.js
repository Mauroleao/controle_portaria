import React from 'react';

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
                    <th>Ano</th>
                    <th>Hora de entrada</th>
                    <th>Hora de saída</th>
                    <th>Motorista ID</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.modelo}</td>
                            <td>{obj.marca}</td>
                            <td>{obj.cor}</td>
                            <td>{obj.placa}</td>
                            <td>{obj.ano}</td>
                            <td>{obj.horaEntrada}</td>
                            <td>{obj.horaSaida}</td>
                            <td>{obj.motoristaId}</td>
                            <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tabela;