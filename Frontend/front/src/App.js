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
      .then(retorno_convertido => setAutomoveis(retorno_convertido))
      .catch(error => console.error('Error fetching data:', error));
}, []);

//Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjAutomovel({...objAutomovel,[e.target.name]: e.target.value});
    
  }

  //Cadastrar automoveis
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar",{// requisições tipo get
    method: "post",
    body:JSON.stringify(objAutomovel),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
    .then((retorno) => retorno.json())
    .then(retorno_convertido =>{

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setAutomoveis([...automoveis, retorno_convertido]);
        alert("Automóvel cadastrado com sucesso!");
        limparFormulario();
      }  

  })
}

// Limpar formulário
const limparFormulario = () => {
  setObjAutomovel(automovel);
  setBtnCadastrar(true);
};

//Selecionar o Produto
const SelecionarAutomovel = (indice) => {
  setObjAutomovel(automoveis[indice]);
  setBtnCadastrar(false);
}

  // Retorno
  return (
    <div>
    <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objAutomovel} cancelar={limparFormulario}/>
    <Tabela vetor={automoveis} selecionar={SelecionarAutomovel}/>
    </div>
  );
}

export default App;
