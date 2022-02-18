const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";
const isDev = nodeEnv !== "production";

const config = {
  mode: nodeEnv,
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "h5p-hello-world.css",
    }),
    new MinifyPlugin(
      {},
      {
        sourceMap: isDev,
      },
    ),
  ],
  entry: {
    dist: "./src/entries/main.ts",
  },
  output: {
    filename: "h5p-page.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      {
        /*
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss"),
        use: ["style-loader", "css-loader", "sass-loader"], */
        test: /\.css$/,
        include: path.resolve(__dirname, "src/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpg|\.jpeg|\.png$|\.svg/,
        include: path.join(__dirname, "src/assets/images"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "assets/images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: path.resolve(__dirname, "src/assets/fonts"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "assets/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  externals: {
    jquery: "H5P.jQuery",
  },
  stats: {
    colors: true,
  },
};

if (isDev) {
  config.devtool = "inline-source-map";
}

module.exports = config;
