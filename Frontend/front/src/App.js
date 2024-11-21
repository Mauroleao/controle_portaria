import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';


function App() {

  // Objeto produto
  const automovel = {
    codigo:"0",
    modelo: "",
    marca: "",
    cor: "",
    placa: "",
    ano: ""
  }
  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [automoveis, setAutomoveis] = useState([]);
  const [objAutomovel, setObjAutomovel] = useState(automovel);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then(retorno_convertido => setAutomoveis(retorno_convertido));
}, []);

//Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjAutomovel({...objAutomovel,[e.target.name]: e.target.value});
    
  }

  // Retorno
  return (
    <div>
    <p>{JSON.stringify(objAutomovel)}</p>
    <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} />
    <Tabela vetor={automoveis}/>
    </div>
  );
}

export default App;
