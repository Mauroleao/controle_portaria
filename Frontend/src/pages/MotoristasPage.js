import React, { useEffect, useState } from 'react';
import Formulario from '../FomularioMoto';
import Tabela from '../TabelaMoto';

function App() {
    // Objeto Automovel
    const motorista = {
        id: "0",
        modelo: "",
        marca: "",
        cor: "",
        placa: "",
        ano: "",
        horaEntrada: "",
        horaSaida: "",
        motoristaId: ""
    };

    // UseState
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [automoveis, setAutomoveis] = useState([]);
    const [objAutomovel, setObjAutomovel] = useState(automovel);

    // UseEffect
    useEffect(() => {
        fetch("http://localhost:8080/automovel/listar")
            .then((retorno) => retorno.json())
            .then(retorno_convertido => setAutomoveis(retorno_convertido))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Obtendo os dados do formulário
    const aoDigitar = (e) => {
        setObjAutomovel({ ...objAutomovel, [e.target.name]: e.target.value });
    };

    const formatDateForApi = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    // Cadastrar automoveis
    function cadastrar() {
        const automovelParaApi = {
            ...objAutomovel,
            horaEntrada: formatDateForApi(objAutomovel.horaEntrada),
            horaSaida: formatDateForApi(objAutomovel.horaSaida)
        };

        fetch("http://localhost:8080/automovel/cadastrar", {
            method: "post",
            body: JSON.stringify(automovelParaApi),
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
                    setAutomoveis([...automoveis, retorno_convertido]);
                    alert("Automóvel cadastrado com sucesso!");
                    limparFormulario();
                }
            });
    }

    // Alterar automoveis
    const alterar = () => {
        const automovelParaApi = {
            ...objAutomovel,
            horaEntrada: formatDateForApi(objAutomovel.horaEntrada),
            horaSaida: formatDateForApi(objAutomovel.horaSaida)
        };

        fetch("http://localhost:8080/automovel/alterar", {
            method: "put",
            body: JSON.stringify(automovelParaApi),
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
                    alert("Automóvel Alterado com sucesso!");

                    let vetorTemp = [...automoveis];
                    let indice = vetorTemp.findIndex((p) => p.id === objAutomovel.id);
                    vetorTemp[indice] = objAutomovel;
                    setAutomoveis(vetorTemp);
                    limparFormulario();
                }
            });
    };

    // Remover automoveis
    const remover = () => {
        fetch("http://localhost:8080/automovel/remover/" + objAutomovel.id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((retorno) => retorno.json())
            .then(retorno_convertido => {
                alert(retorno_convertido.mensagem);

                let vetorTemp = [...automoveis];
                let indice = vetorTemp.findIndex((p) => p.id === objAutomovel.id);
                vetorTemp.splice(indice, 1);
                setAutomoveis(vetorTemp);
                limparFormulario();
            });
    };

    // Limpar formulário
    const limparFormulario = () => {
        setObjAutomovel(automovel);
        setBtnCadastrar(true);
    };

    // Selecionar o Produto
    const SelecionarAutomovel = (indice) => {
        setObjAutomovel(automoveis[indice]);
        setBtnCadastrar(false);
    };

    // Retorno
    return (
        <div>
            <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objAutomovel} cancelar={limparFormulario} remover={remover} alterar={alterar} />
            <Tabela vetor={automoveis} selecionar={SelecionarAutomovel} />
        </div>
    );
}

export default App;
