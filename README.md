# The Warrior Store

<a name="readme-top"></a>

## Sobre o Projeto

The Warrior Store é uma loja de itens médievais na qual foi desenvolvida uma API utilizando `TypeScript`!

Nele foi utilizada a biblioteca do Node.js, o `Express`, na qual foi implementada todas as camadas da arquitetura MSC `(Model, Service e Controller)`. Com isso é possível realizar alguma operações no banco de dados com MySQL: Criação, Listagem, Alteração, Remoção!


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
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de jgustavomendonca@gmail.com
