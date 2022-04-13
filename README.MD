# DESAFIO FRONT-END KINGSPAN

## Proposta

Sua tarefa é construir um front-end para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Utilize um repositório Git (público, de preferência) para versionamento e disponibilização do código.

O front-end deve ser construído utilizando o framework JavaScript Angular ou React. 

## O que será avalidado

Queremos avaliar sua capacidade de desenvolver e documentar um front-end para uma aplicação com back-end pronto. Serão avaliados:

- [X]  Código bem escrito e limpo;
- [X]  Quais ferramentas foram usadas, como e por quê;
- [X]  Seu conhecimento em JavaScript, HTML e CSS;
- [ ]  Sua capacidade de se comprometer com o que foi fornecido (wireframe, styleguide);
- [ ]  Sua capacidade de documentação da sua parte da aplicação.

## O mínimo necessário

- [ ]  As telas seguindo os wireframes a seguir e utilizando a API construída por você no desafio anterior;
- [X]  Readme.md contendo informações básicas do projeto e como executá-lo.

## Bônus

Os seguintes itens **não são obrigatórios**, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós).

- [ ]  Testes de front-end;
- [ ]  Conventional Commits
- [x]  Uso de ferramentas externas que facilitem o seu trabalho;
- [ ]  Cuidados especiais com otimização, SEO, entre outros;
- [ ]  Deploy da aplicação utilizando ferramentas externas (Netlify, S3, Firebase, etc);
- [ ]  Pipeline de deploy contínuo
- [ ]  Sugestões sobre o challenge embasadas em alguma argumentação.

## Explicacao projeto

https://drive.google.com/file/d/1ztUcIYBfn8ykQehzR4sCcuxZ3gRKDx1e/view?usp=sharing 

## Requisitos

https://www.notion.so/joaovpsguimaraes/Desafio-Front-End-Kingspan-Isoeste-d8d59b7fd4ec44be92712729b83a1110

## Instruções para rodar

1. Na pasta do projeto após ser feito o clone, rode `yarn install` ou `npm install` para baixar as dependencias.
2. Execute `yarn dev` ou `npm run dev` para o projeto rodar.
3. A aplicação vai rodar em: `http://localhost:3000/`

## Ferramentas utilizadas

1. Vite: O create react app ja vem com toda parte de webpack, babel, eslint e etc. Pois os browsers não conseguiam entender as importações de arquivos javascript. Porem a um tempo a grande maioria dos browsers ja suportam o ESmodules, ou seja já consegue fazer importação de arquivos javascript de maneira nativa. Com isso utiliza soluções como o Vite e Snowpack para fazer o restante, e ficando mais perfomatico, mais simples criar um projeto e mais rapido.

2. Material UI: Para algumas costumizações foi utilizado o Material UI, como o modal, form, inputs, estilização, titulos entre outros. Que otimizam a criação do projeto utilizando a ferramenta. Assim como facilidade na customização, manutenção e propriedades forneceidos pela MUI.

3. React Icons: Como o Projeto possui alguns icones, foi utilizado o React-icons, pois sua diversidade de icones para utilizar em projetos é excelente, devido a sua variedade de components e facilidade na utilização do projeto.

4. UUID: Para criação da ID das tools foi utilizado o uuid, também devido a facilidade o uuidv4 gera um identificador unico universal para as tools inseridas pelo usuario. Assim facilitando a criação do codigo para remove tool e add tool.