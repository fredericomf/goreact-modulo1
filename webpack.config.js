const path = require("path");

module.exports = {
  // ENTRY: Arquivo principal do meu projeto
  entry: path.resolve(__dirname, "src", "index.js"),
  // OUTPUT: Onde gravar o código transpilado
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    // Utilizado pelo webpack-dev-server
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};