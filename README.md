
# Boas-vindas ao repositório do exercício Organizando a biblioteca!

<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

  A empresa em que você trabalha fechou um contrato com uma biblioteca e você está responsável por desenvolver o novo sistema para organizar os livros.

  Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros que contém informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

  Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm as funções já criadas no arquivo `src/index.js`.

  Vamos lá?

</details><br />

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

</details>

<details>
<summary><strong>🏗 Estrutura do exercício</strong></summary><br />

Na pasta raiz do exercício, temos as pastas `src`, `evaluator` e `data`.

A pasta `src` contém o arquivo `index.js` com cada uma das funções que você irá implementar. 
A pasta `data` contém o arquivo `library.js`, que armazena os dados que você vai utilizar para retornar as informações sobre a biblioteca.
A pasta `evaluator` possui os testes automatizados que avaliarão o seu projeto; os conteúdos desta pasta não devem ser alterados.

<details>
  <summary>
    O arquivo <code>library.js</code> contém um <strong>objeto</strong> no seguinte formato:
  </summary> <br />

```javascript
{
	books: [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
        name: 'Frank Herbert',
        birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
        name: 'Stephen King',
        birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        },
        releaseYear: 1928,
    },
  ]
}
```

<details>
  <summary>
  O array <code>books</code> guarda as informações de cada livro da biblioteca
  </summary> <br />

  | Chave | Descrição |
  | ------------ | ----------|
  | `id`         | é o identificador do livro |
  | `name`       | é o nome do livro |
  | `genre`      | é o gênero do livro |
  | `releaseYear`| é o ano de lançamento do livro |
  | `author` | é um objeto que representa a pessoa autora do livro |

</details>

<details>
  <summary>
  O objeto <code>author</code> é onde ficam as informações de cada pessoa autora
  </summary> <br />

  | Chave | Descrição |
  | ----------- | ------ |
  | `name`        | é o nome dessa pessoa |
  | `birthYear` | é o ano de nascimento dessa pessoa |

</details>

</details>

<br />

</details>

<details>
<summary><strong>🏪 O que você deve desenvolver </strong></summary><br />

Você deve complementar as funções criadas no arquivo `index.js` que está dentro da pasta `src/`.

</details>

# Requisitos

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Filtre todos os objetos do gênero ficção científica ou fantasia.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFiction</code> para buscar apenas os livros do gênero ficção científica ou fantasia.
  </summary> <br />

</details>

---

## 2. Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

<details>
  <summary>
  Implemente a função <code>oldBooksOrdered</code> que deve retornar um <code>array</code> com os livros publicados há no mínimo 60 anos, a partir de um ano recebido por parâmetro, ordenados do mais velho para o mais novo.
  </summary> <br />

</details>

---

## 3. Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

<details>
  <summary>
  Implemente a função <code>booksByAuthorBirthYear</code> que deve retornar um <code>array</code> com os nomes dos livros escritos por pessoas autoras que nasceram no ano passado, de acordo com o que foi passado por parâmetro.
  </summary> <br />

</details>

---

## 4. Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFictionAuthors</code> que deve retornar um <code>array</code> com o nome das pessoas autoras de ficção científica ou fantasia, ordenadas alfabeticamente.
  </summary> <br />

</details>

---

## 5. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

<details>
  <summary>
  Implemente a função <code>oldBooks</code> que deve retornar um <code>array</code> com o nome dos livros com mais de 60 anos publicados, a partir de um ano recebido por parâmetro.
  </summary> <br />

</details>

---

## 6. Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

<details>
  <summary>
  Implemente a função <code>authorWith3DotsOnName</code> que deve retornar o nome do primeiro livro cuja pessoa autora inicie seu nome com três iniciais.
  </summary> <br />

> **De olho na dica 👀:** cada inicial termina com um ponto.

</details>

---
