import React, { useEffect, useState } from 'react';
import Formulario from '../components/FormularioMotoristas';
import TabelaMoto from '../components/TabelaMotoristas';
import Footer from '../components/Footer'; // Importação correta do Footer
import Header from '../components/Header'; // Importação correta do Header
import '../assets/styles/footer.css';
import '../assets/styles/header.css';

function MotoristaPage() {
    const motorista = {
        id: "0",
        nome: "",
        cnh: ""
    };

    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [motoristas, setMotoristas] = useState([]);
    const [objMotorista, setObjMotorista] = useState(motorista);

    useEffect(() => {
        fetch("http://localhost:8080/motorista/listar")
            .then((retorno) => retorno.json())
            .then(retorno_convertido => setMotoristas(retorno_convertido))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const aoDigitar = (e) => {
        setObjMotorista({ ...objMotorista, [e.target.name]: e.target.value });
    };

    const cadastrar = () => {
        fetch("http://localhost:8080/motorista/cadastrar", {
            method: "post",
            body: JSON.stringify(objMotorista),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((retorno) => retorno.json())
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

    const limparFormulario = () => {
        setObjMotorista(motorista);
        setBtnCadastrar(true);
    };

    const SelecionarMotorista = (indice) => {
        setObjMotorista(motoristas[indice]);
        setBtnCadastrar(false);
    };

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