function Formulario({botao, eventoTeclado, cadastrar, obj}){
    return (
        <form>
            <input type="text" value={obj.modelo} onChange={eventoTeclado} name="modelo" placeholder="Modelo" className="form-control"/>
            <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" />
            <input type="text" value={obj.cor} onChange={eventoTeclado} name="cor" placeholder="Cor"  className="form-control"/>
            <input type="text" value={obj.placa} onChange={eventoTeclado} name="placa" placeholder="Placa" className="form-control" />
            <input type="text" value={obj.ano} onChange={eventoTeclado} name="ano" placeholder="Ano"  className="form-control"/>

            {

                botao
                ?
                <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
                :
                <div>
                    <input type="button" value="Alterar" className="btn btn-warning" />
                    <input type="button" value="Remover" className="btn btn-danger" />
                    <input type="button" value="Cancelar" className="btn btn-secondary" />
                </div>
            }

        </form>
    )
}
export default Formulario;