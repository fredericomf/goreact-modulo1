# goreact-modulo1

First module of GoReact Bootcamp course

# PASSOS INICIAIS

#### Iniciando o projeto:

Basicamente, esse comando criará o package.json.

```bash
npm init -y
```

## INSTALAR DEPENDÊNCIAS

### REACT E REACT-DOM

As principais dependências para trabalhar com REACT

```bash
yarn add react react-dom
```

### BABEL e WEBPACK (MODO DEVELOPMENT)

Essas dependências são os transpiladores de código ES e JSX para JS

```bash
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
```

### WEBPACK-DEV-SERVER (DEVELOPMENT)

```bash
yarn add -D webpack-dev-server
```

> **CONFIGURANDO O BABEL**
> Crie o arquivo '.babelrc' na raiz do projeto
> Digite o seguinte conteúdo:
>
> ```json
> {
>   "presets": ["@babel/preset-env", "@babel/preset-react"]
> }
> ```

**preset-env**: Traduz novas funcionalidades javascript para compatibilidade com web-browsers.
**preset-react**: Traduz sintaxe exclusiva do react para compatibilidade com web-browsers.

> **CONFIGURANDO O WEBPACK**
> Crie o arquivo 'webpack.config.js' na raiz do projeto
> Digite o seguinte conteúdo:
>
> ```javascript
> const path = require("path");
>
> module.exports = {
>   // ENTRY: Arquivo principal do meu projeto
>   entry: path.resolve(__dirname, "src", "index.js"),
>   // OUTPUT: Onde gravar o código transpilado
>   output: {
>     path: path.resolve(__dirname, "public"),
>     filename: "bundle.js"
>   },
>   devServer: {
>     // Utilizado pelo webpack-dev-server
>     contentBase: path.resolve(__dirname, "public")
>   },
>   module: {
>     rules: [
>       {
>         test: /\.js$/,
>         exclude: /node_modules/,
>         use: {
>           loader: "babel-loader"
>         }
>       }
>     ]
>   }
> };
> ```

**NOTAS_ESTUDO:**

**1.** Deve-se criar as pastas 'src' e 'public'.
**2.** O 'module' serve para configurar quais arquivos o webpack, automaticamente, transpilará. No nosso caso a expressão regular 'test' indica que serão todos os arquivos de extenção '.js', isso utilizando o 'babel-loader' (que usa o .babelrc como configuração). Notar que a pasta 'node_modules' está fora da transpilação.
**3.** Criar o 'index.html' dentro da pasta 'public' para inicializar o 'bundle.js'. Exemplo abaixo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>GoReact</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
  </head>
  <body>
    <script src="./bundle.js"></script>
  </body>
</html>
```

### PROP-TYPES

Biblioteca para fazer tipagem no nosso código

```bash
yarn add prop-types
```
