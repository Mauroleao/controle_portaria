function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar, motoristas }) {
  return (
    <form>
      {/* Other input fields */}
      <select name="motorista" onChange={eventoTeclado} value={obj.motorista ? obj.motorista.id : ""} className="form-control">
        <option value="">Selecione um Motorista</option>
        {motoristas.map(motorista => (
          <option key={motorista.id} value={motorista.id}>{motorista.nome}</option>
        ))}
      </select>
      {/* Buttons */}
    </form>
  );
}