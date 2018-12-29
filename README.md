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

### PROPOSAL-CLASS-PROPERTIES

Plugin do Babel que permite definir os Default Properies e Types dentro da classe do componente React.

```bash
yarn add -D @babel/plugin-proposal-class-properties
```

**Adicionar definição .babelrc:**

```javascript
"plugins": ["@babel/plugin-proposal-class-properties"]
```

### STYLE-LOADER e CSS_LOADER

Para permitir que o javascript importe CSS

```bash
yarn add style-loader css-loader -D
```

**Adicionar regra ao webpack:**

A forma como o professor passou, não funcionou:
~~`javascript { test: /\.css$/, use: [ { loader: "style-loader", loader: "css-loader" } ] }`~~

Pesquisando encontrei um exemplo de uso(que funcionou):

```javascript
{
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
}
```

[Fonte do código acima](https://github.com/webpack-contrib/css-loader)

### SASS LOADER (Préprocessador de estilos)

Plugin para webpack rodar préprocessador de estilos

```bash
yarn add -D sass-loader node-sass
```

**Adicionar regra 'css' do webpack para:**

```javascript
{
  test: /\.scss$/,
  use: ["style-loader", "css-loader", 'sass-loader']
}
```

## ESLINT e BABEL-ESLINT

Serve para garantir que todos os programadores envolvidos no projeto utilizem uma mesma guia de estilos.

Para saber mais: https://eslint.org

_Lembrando que o eslint deve ser instalado como DEVELOPMENT MODE (yarn add eslint -D)_

_NOTA: Depois de instalador não esquecer de rodar o comando:_

```bash
npx eslint --init
```

How would you like to configure ESLint?
\> Use a popular style guide

Witch style guide do you want to follow?
\> Airbnb (https://github.com/airbnb/javascript)

Do you use React?
\> y

What format do you want your config file to be in?
\> JSON

Would you like to install them now with npm?
\> Y

**Depois de rodar o comando acima, instalar o babel-eslint:**

```bash
yarn add -D babel-eslint
```

**_DEPOIS, APAGAR O ARQUIVO 'package-lock.json' E RODAR O COMANDO YARN NA RAIZ DO PROJETO. ISSO GARANTE USAR SÓ O YARN_**

_NOTA: Ao retornarmos para um arquivo .js notaremos que os erros na nossa styleguide são marcados com linhas vermelhas (Isso depois de instalada a extenção do ESLint_

**Redefinir o .eslintrc.json:**

```javascript
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

## EDITOR CONFIG VSCODE

Configurar o arquivo .editorconfig:

```javascript
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## EXTENÇÃO CHROME: REACT DEVTOOLS

Instalar a extenção React Devtools

## PRETTIER

1. Instalar a extenção VSCode - PRETTIER
2. Instalar o prettier for eslint:

```bash
yarn add prettier-eslint -D
```

3. Configurar o preetier (CTRL + ,)

```javascript
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"editor.formatOnSave": true,
"javascript.format.enable": false,
"prettier.eslintIntegration": true
```
