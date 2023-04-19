# The Warrior Store

<a name="readme-top"></a>

## Sobre o Projeto

The Warrior Store é uma loja de itens médievais na qual foi desenvolvida uma API utilizando `TypeScript`!

Nele foi utilizada a biblioteca do Node.js, o `Express.js`, na qual foi implementada todas as camadas da arquitetura MSC `(Model, Service e Controller)`. Com isso é possível realizar alguma operações no banco de dados com MySQL: Criação, Listagem, Alteração, Remoção!


## Rodando com Docker

<details>
  <summary>Clique para expandir</summary>
  
  ## É necessário ter o Docker instalado em sua máquina.
  
- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/The-Warrior-Store.git
```

- Entre no diretório do projeto

```bash
  cd The-Warrior-Store
```

- Crie os Containers

```js
  docker-compose up -d  // Ele irá rodar dois serviços, um do node e um do db!
```

Se estiver usando `macOS` será necessário colocar manualmente uma opção `platform: linux/amd64` no serviço do banco de dados no arquivo docker-compose.yml desse projeto.

- Entre no container do projeto

```bash
docker exec -it trybesmith bash
```

- Instale as dependências dentro do container

```bash
  npm install
```
</details>

## Rodando localmente

<details>
  <summary>Clique para expandir</summary>
  
## É necessário ter o Node e o MySQL instalados em sua máquina.

- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/The-Warrior-Store.git
```

- Entre no diretório do projeto

```bash
  cd The-Warrior-Store
```

- Instale as dependências

```bash
  npm install
```
</details>

## Documentação da API
<details>
  <summary>Clique para expandir</summary>

### Cria um novo produto

```http
  POST /products
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}
```

#### Resposta esperada

```js
{
  "id": 1,
  "name": "Poção de cura",
  "amount": "20 gold",
}
```

#### Resposta com parâmetros errados
<details>
  <summary>Clique para expandir</summary>
  <br>

- **name vazio**

```js
 { "message": "\"name\" is required" }
```

- **name diferente de string**

```js
  { "message": "\"name\" must be a string" }
```

- **name menor que 3 caracteres**

```js
 { "message": "\"name\" length must be at least 3 characters long" }
```

- **amount vazio**

```js
  { "message": "\"amount\" is required" }
```

- **amount diferente de string**

```js
  { "message": "\"amount\" must be a string" }
```

- **amount menor que 3 caracteres**

```js
 { "message": "\"amount\" length must be at least 3 characters long" }
```
</details>
</details>

### Retorna todos os produtos

```http
  GET /products
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]
```
</details>

### Cria um novo usuário

```http
  POST /users
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

#### Resposta esperada

```js
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#### Resposta com parâmetros errados
<details>
  <summary>Clique para expandir</summary>
  <br>

- **username vazio**

```js
  { "message": "\"username\" is required" }
```

- **username diferente de string**

```js
  { "message": "\"username\" must be a string" }
```

- **username menor que 3 caracteres**

```js
{ "message": "\"username\" length must be at least 3 characters long" }
```

- **classe vazio**

```js
  { "message": "\"classe\" is required" }
```

- **classe diferente de string**

```js
  { "message": "\"classe\" must be a string" }
```

- **classe menor que 3 caracteres**

```js
 { "message": "\"classe\" length must be at least 3 characters long" }
```

- **level vazio**

```js
  { "message": "\"level\" is required" }
```

- **level diferente de number**

```js
   { "message": "\"level\" must be a number" }
```

- **level menor que 1**

```js
 { "message": "\"level\" must be greater than or equal to 1" }
```

- **password vazia**

```js
 { "message": "\"password\" is required" }
```

- **password diferente de string**

```js
 { "message": "\"password\" must be a string" }
```

- **password menor que 8 caracteres**

```js
 { "message": "\"password\" length must be at least 8 characters long" }
```
</details>
</details>

### Retorna todos os pedidos

```http
  GET /orders
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
[
  {
    "id": 1,
    "userId": 2,
    "productsIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 1,
    "productsIds": [3, 4]
  }
]
```
</details>

### Login

```http
  POST /login
```
<details>
  <summary>Clique para expandir</summary>
  <br>
 
#### Formato da requisição

```js
{
  "username": "string",
  "password": "string"
}
```

#### Resposta esperada

```js
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#### Resposta com parâmetros errados
<details>
  <summary>Clique para expandir</summary>
  <br>

- **username vazio**

```js
 { "message": "\"username\" is required" }
```

- **password vazia**

```js
 { "message": "\"password\" is required" }
```

- **username invalído**

```js
  { "message": "Username or password invalid" }
```

- **password invalída**

```js
 { "message": "Username or password invalid" }
```
</details>
</details>

### Cria um novo pedido

```http
  POST /orders
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "productsIds": [1, 2]
}
```

#### Resposta esperada

```js
{
  "userId": 1,
  "productsIds": [1, 2]
}
```

#### Resposta com parâmetros errados
<details>
  <summary>Clique para expandir</summary>
  <br>

- **token vazio**

```js
 { "message": "Token not found" }
```

- **token inválido**

```js
 { "message": "Invalid token" }
```

- **productsIds vazio**

```js
 { "message": "\"productsIds\" is required" }
```

- **productsIds diferente de array**

```js
 { "message": "\"productsIds\" must be an array" }
```

- **productsIds com array vazio**

```js
 { "message": "\"productsIds\" must include only numbers" }
```
</details>
</details>
</details>

## Tecnologias e Ferramentas

<br>
<br>
<table width="320px" align="center">
  <tbody>
    <tr valign="top">
      <td width="80px" align="center">
        <span><strong>Docker</strong></span>
        <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>MySQL</strong></span><br>
        <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Express.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>TypeScript</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </td>
    </tr>
  </tbody>
</table>

## Documentação

- [Docker](https://docs.docker.com/)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de jgustavomendonca@gmail.com
