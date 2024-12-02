import React from 'react';
import InputMask from 'react-input-mask';

function FormularioAutomoveis({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    
   {/* formatando a entrada de data para o formato aceito ela API. */} 
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    return (
        <form>
            <input type="text" value={obj.modelo} onChange={eventoTeclado} name="modelo" placeholder="Modelo" className="form-control" required />
            <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" required />
            <input type="text" value={obj.cor} onChange={eventoTeclado} name="cor" placeholder="Cor" className="form-control" required />
            <InputMask mask="aaa-9999" value={obj.placa} onChange={eventoTeclado} name="placa" placeholder="Placa" className="form-control" required />
            <InputMask mask="9999" value={obj.ano} onChange={eventoTeclado} name="ano" placeholder="Ano" className="form-control" required />
            <input type="datetime-local" value={formatDate(obj.horaEntrada)} onChange={eventoTeclado} name="horaEntrada" className="form-control" required />
            <input type="datetime-local" value={formatDate(obj.horaSaida)} onChange={eventoTeclado} name="horaSaida" className="form-control" required />
            
            {/* jogo de botões */} 
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

export default FormularioAutomoveis;