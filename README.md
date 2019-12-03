# Markdown Links

## Instalação

Para utilizar a biblioteca, precisará ter o NodeJs instalado no computador.

Logo depois executar o seguinte comando no terminal:

`$ npm install campostalita/SAP003-md-links`

## CLI (Command Line Interface - Interface de Linha de Comando)

Essa aplicação deve ser executada da seguinte maneira,
através do terminal:

`md-links <path-to-file>`

Por exemplo:

```sh
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
Ele validará as URLs identificando o arquivo no formato .md a partir da rota que recebeu o argumento, analisando o arquivo e imprimindo os links que serão encontrados, junto com o texto dentro do link, em até 50 caracteres.

## Como Utilizar em Javascript

Você poderá importar com `require` para usá-lo no seu código.

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```




