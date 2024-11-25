import React from 'react';


function FormularioMoto({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    return (
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" />
            <input type="text" value={obj.cnh} onChange={eventoTeclado} name="cnh" placeholder="CNH" className="form-control" />
            <button onClick={cadastrar} className="btn btn-primary">{botao ? "Cadastrar" : "Atualizar"}</button>
            <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
            <button onClick={remover} className="btn btn-danger">Remover</button>
            <button onClick={alterar} className="btn btn-warning">Alterar</button>
        </form>
    );
}

export default FormularioMoto;