import React, { useEffect, useState } from 'react';
import Formulario from '../components/FormularioMotoristas';
import TabelaMoto from '../components/TabelaMotoristas';
import Footer from '../components/Footer'; // Importação correta do Footer
import Header from '../components/Header'; // Importação correta do Header
import '../assets/styles/footer.css';
import '../assets/styles/header.css';

function MotoristaPage() {
    // Objeto Automovel utilizado para fazer a troca dos dados entre o formulário e a API no formato Json
    const motorista = {
        id: "0",
        nome: "",
        cnh: ""
    };

    // UseState > Controle dos Botões para que a sejam auternados entre Cadastrar e Alterar
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [motoristas, setMotoristas] = useState([]);
    const [objMotorista, setObjMotorista] = useState(motorista);

    // Carregar os dados da API
    useEffect(() => {
        fetch("http://localhost:8080/motorista/listar")
            .then((retorno) => retorno.json())
            .then(retorno_convertido => setMotoristas(retorno_convertido))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

     // Obtendo os dados do formulário
    const aoDigitar = (e) => {
        setObjMotorista({ ...objMotorista, [e.target.name]: e.target.value });
    };

    // Cadastrar motoristas
    const cadastrar = () => {
        fetch("http://localhost:8080/motorista/cadastrar", {
            method: "post",
            body: JSON.stringify(objMotorista),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((retorno) => retorno.json()) // convertendo o retorno da API para JSON
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    setMotoristas([...motoristas, retorno_convertido]);
                    alert("Motorista cadastrado com sucesso!");
                    limparFormulario();
                }
            })
            .catch(error => console.error('Error:', error));
    };

    // Alterar motoristas
    const alterar = () => {
        fetch("http://localhost:8080/motorista/alterar", {
            method: "put",
            body: JSON.stringify(objMotorista),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    alert("Motorista Alterado com sucesso!");

                    let vetorTemp = [...motoristas];
                    let indice = vetorTemp.findIndex((p) => p.id === objMotorista.id);
                    vetorTemp[indice] = objMotorista;
                    setMotoristas(vetorTemp);
                    limparFormulario();
                }
            });
    };
    
    // Remover motoristas
    const remover = () => {
        fetch("http://localhost:8080/motorista/remover/" + objMotorista.id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((retorno) => retorno.json())
            .then(retorno_convertido => {
                alert(retorno_convertido.mensagem);

                let vetorTemp = [...motoristas];
                let indice = vetorTemp.findIndex((p) => p.id === objMotorista.id);
                vetorTemp.splice(indice, 1);
                setMotoristas(vetorTemp);
                limparFormulario();
            });
    };

    // Limpa o dormulario resetando o objeto  e seta o botão para Cadastrar
    const limparFormulario = () => {
        setObjMotorista(motorista);
        setBtnCadastrar(true);
    };

    const SelecionarMotorista = (indice) => {
        setObjMotorista(motoristas[indice]);
        setBtnCadastrar(false);
    };

    // Retorno e renderização dos comonentes
    return (
        <div>
            <Header />
            <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objMotorista} cancelar={limparFormulario} remover={remover} alterar={alterar} />
            <TabelaMoto vetor={motoristas} selecionar={SelecionarMotorista} />
            <Footer />
        </div>
    );
}

export default MotoristaPage;