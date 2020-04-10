const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  devServer: {
    open: true,
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
}
