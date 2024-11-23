import React from 'react';
import InputMask from 'react-input-mask';

function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    {/*Função para formatar a data no formato padrão ISO 8601*/}
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    return (
        <form>
            <input type="text" value={obj.modelo} onChange={eventoTeclado} name="modelo" placeholder="Modelo" className="form-control" />
            <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" />
            <input type="text" value={obj.cor} onChange={eventoTeclado} name="cor" placeholder="Cor" className="form-control" />
            <InputMask mask="aaa-9999" value={obj.placa} onChange={eventoTeclado} name="placa" placeholder="Placa" className="form-control" />{/*extenção para padronizar o envio de informação para API*/ } 
            <InputMask mask="9999" value={obj.ano} onChange={eventoTeclado} name="ano" placeholder="Ano" className="form-control" /> {/*extenção para padronizar o envio de informação para API*/}
            <input type="datetime-local" value={formatDate(obj.horaEntrada)} onChange={eventoTeclado} name="horaEntrada" className="form-control" />
            <input type="datetime-local" value={formatDate(obj.horaSaida)} onChange={eventoTeclado} name="horaSaida" className="form-control" />
            <input type="text" value={obj.motoristaId} onChange={eventoTeclado} name="motoristaId" placeholder="Motorista ID" className="form-control" />
            <button onClick={cadastrar} className="btn btn-primary">{botao ? "Cadastrar" : "Atualizar"}</button>
            <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
            <button onClick={remover} className="btn btn-danger">Remover</button>
            <button onClick={alterar} className="btn btn-warning">Alterar</button>
        </form>
    );
}

export default Formulario;