# Controle de Portaria

Uma aplicação para gerenciar a entrada e saída de automóveis e motoristas em uma portaria, desenvolvida com React no frontend e Spring Boot no backend.

## Descrição

Esta aplicação permite:

- Cadastrar, listar, atualizar e remover automóveis.
- Cadastrar, listar, atualizar e remover motoristas.
- Validar campos obrigatórios antes de enviar os dados.
- Visualizar listas atualizadas em tempo real.

## Pré-requisitos

- **Backend**:
  - Java JDK 11 ou superior
  - Maven
  - Banco de dados MySQL

- **Frontend**:
  - Node.js 14 ou superior
  - NPM ou Yarn

## Instalação

### Backend

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Navegue até o diretório do backend:
```bash
cd seu-repositorio/backend
```

3.Configure o banco de dados no arquivo 
```bash 
src/main/resources/application.properties.
```

4.Compile e execute a aplicação:
```bash 
mvn spring-boot:run
```

Frontend

1. Navegue até o diretório do frontend:

```bash 
cd seu-repositorio/frontend
```

2. Instale as dependências:

```bash
npm install
```
3. Inicie a aplicação:

```bash
npm start
```
Uso

- Acesse o frontend em http://localhost:3000.
- Utilize as páginas de Automóveis e Motoristas para gerenciar os registros.
- Preencha todos os campos obrigatórios nos formulários.
- Utilize os botões para cadastrar, atualizar ou remover registros.

Estrutura do Projeto

- backend/: Aplicação Spring Boot com controllers, models, repositories e services.
- frontend/: Aplicação React com componentes funcionais e hooks.

Tecnologias Utilizadas

- Frontend: React, JavaScript, CSS
- Backend: Java, Spring Boot, Maven
- Banco de Dados: MySQL

Endpoints da API.
```bash
localhost:8080/automovel/listar
```
```bash
localhost:8080/automovel/cadastrar
```
```bash
localhost:8080/automovel/remover
```
```bash
localhost:8080/automovel/alterar
```
Formato esperado para automóvel.

```bash
{
    "placa": "ABC-1234",
    "modelo": "Renegade",
    "marca": "Renaut",
    "ano": 2012,
    "cor": "Preto",
    "horaEntrada": "2024-11-14 12:02:00",
    "horaSaida": "2024-11-12 12:02:00",
    "motorista": null
  }
```

Endpoints da API.
```bash
localhost:8080/motorista/listar
```
```bash
localhost:8080/motorista/cadastrar
```
```bash
localhost:8080/motorista/remover
```
```bash
localhost:8080/motorista/alterar
```
Formato esperado para motorista.

```bash
{
    "nome": "Cristiano",
    "cnh": "656565656"
  }
```


Observação :
- Não esqueça de executar o Backend primeiro ou a usabilidade do Frontend será comprometida.

Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a Licença MIT.


