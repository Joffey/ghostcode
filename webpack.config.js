const path = require("path");
const ExtractText = require("extract-text-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");

module.exports = {
  devtool: "#inline-source-map",
  entry: {
    coder: "./src/coder.js"
  },
  output: {
    path: path.resolve(__dirname, "assets/built"),
    filename: "[name].js",
    publicPath: "/assets/built/",
    chunkFilename: 'chunk.[name].[chunkhash:5].js'
  },
  resolve: {
    alias: {
      partials: path.resolve(__dirname, "partials"),
      "#": srcPath,
      assets: path.resolve(__dirname, "assets"),
      styles: path.resolve(srcPath, "styles"),
      icons: path.resolve(srcPath, "icons"),
      config: path.resolve(__dirname, "config")
    },
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractText.extract({
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractText({
      filename: "coder.css",
      allChunks: true
    })
  ]
};
