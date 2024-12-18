import React from 'react';


function FormularioMotoristas({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    return (
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" />
            <input type="text" value={obj.cnh} onChange={eventoTeclado} name="cnh" placeholder="CNH" className="form-control" />
            
            {botao
            ? (
                <>
                    <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
                    <input type='button' value='Voltar' onClick={() => window.location.href = '/'} className='btn btn-primary' />
                </>
            ) : (
            <div>
                <input type='button' value='Alterar' onClick={alterar} className='btn btn-secondary' />
                <input type='button' value='Remover' onClick={remover} className='btn btn-danger' />
                <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-warning' />
            </div>
            )}
            
        </form>
    );
}

export default FormularioMotoristas;
