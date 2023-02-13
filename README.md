# Sobre

## Seção: `Introdução ao desenvolvimento Web com Node.js`

- Foi apresentada o uso do Node.js detalhando mais o uso do npm, que ja era usado, ensinando a criar e usar scripts com ele.
- Seguindo de uma introdução ao que é uma API, com detalhes sobre a arquitetura RESTful, aprensentando suas cinco principais caracteristicas, Uniform Interface, client-server, stateless, cacheable e layered system.
- Então foi apresentado um framework, o Express para desenvolvimento web de APIs, usando middlewares e rotas.

#
<div align="center">
  <a href="#">
    <img width="30%" src="./readme-imgs/project_top.webp">
    <img width="30%" src="./readme-imgs/project_mid.webp">
    <img width="30%" src="./readme-imgs/project_bot.webp">
  </a>
</div>

>*lore*
#
## Projeto: `Talker Manager`

- Uma API de palestrantes onde é possivel, cadastrar, listar, pesquisar, editar e excluir palestrantes.

# Tecnologias e ferramentas usadas 🛠

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![Docker](https://img.shields.io/badge/-Docker-fff?style=flat-square&logo=docker)
![Express](https://img.shields.io/badge/-Express-339999?style=flat-square&logo=express&logoColor=ffffff)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=000)


# Desafios

- Desenvolver uma API com node.js
- Estruturar a API usando as principais caracteristicas do RESTful
- Organização do código, usando middlewares e routers de forma limpa e organizada.

# Conclusão

- Uma API pequena, que estimulou aprendizados e organização com Express, reaproveitando middleware de forma a validar informações em diversas rotas diferentes sem repetir o código, tornando o código mais limpo e de fácil manutenção.

</details>

<details>
  <summary>
    <strong>
      :newspaper_roll: Requisitos solicitados durante o desenvolvimento do projeto
    </strong>
  </summary>

 
  ### Requisitos
  *Nome* | *Avaliação*
  --- | :---:
  1 - Crie o endpoint GET /talker | :heavy_check_mark:
  2 - Crie o endpoint GET /talker/:id | :heavy_check_mark:
  3 - Crie o endpoint POST /login | :heavy_check_mark:
  4 - Adicione as validações para o endpoint /login | :heavy_check_mark:
  5 - Crie o endpoint POST /talker | :heavy_check_mark:
  6 - Crie o endpoint PUT /talker/:id | :heavy_check_mark:
  7 - Crie o endpoint DELETE /talker/:id | :heavy_check_mark:
  8 - Crie o endpoint GET /talker/search?q=searchTerm | :heavy_check_mark:

</details>

<details>
  <summary>
    <strong>
      :memo: Todo list
    </strong>
  </summary>

  - [x] - ~~Criar aplicação com base nos requisitos da trybe.~~ ![data](https://badgen.net/badge/delivery/20-06-2022/green)

</details>

<details>
  <summary>
    <strong>
      :memo: Instruções do  Projeto
    </strong>
  </summary>

  ## Importante: seguir a ordem apresentada a baixo, para o funcionamento.

  <details>
  <summary>
    <strong>
      ⚠️ Configurações mínimas para execução do projeto
    </strong>
  </summary>

  - Sistema Operacional Distribuição Unix
  - Node versão >= 16
  - Docker
  - Docker-compose versão >=1.29.2
  - API Client ([Thunder Client](https://www.thunderclient.com/), [Insomnia](https://insomnia.rest/), [POSTMAN](https://www.postman.com/), ou algum outro de sua preferência)

  </details>

  <details>
    <summary>
      <strong>
        ⚠️ Inicie o docker-compose
      </strong>
    </summary>

    Após clonar o respositório para iniciar o docker compose, você deve dentro da pasta raiz do projeto usar o comando: `docker-compose up -d`

    Verifique se os container está funcionando usando o comando `docker ps` no terminal. Deve aparecer um container com o nome de *talker_manager*.

  </details>

  <details>
    <summary>
      <strong>
        🗂 Acessando as Rotas
      </strong>
    </summary>

    Existem duas formas de acessar e testar as rotas, usando algum API Cliente, conforme citado nas configurações mínimas ou acessando no navegador a documentação gerada pelao swagger `localhost:3000/api-docs`.

    ## Rotas

    <details>
    <summary>
        :bus: <em>localhost:3000</em><strong>/login</strong>
    </summary>

    - lore

  </details>

  </details>

</details>

#

<div align="right">
  <img src="https://badgen.net/badge/last%20update/10-02-2023/blue">
</div>
