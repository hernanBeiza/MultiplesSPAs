const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = (webpackConfigEnv) => {
  const isProduction = webpackConfigEnv.production;

  const defaultConfig = singleSpaDefaults({
    orgName: "amisoft",
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      historyApiFallback: true,
      open: true,
      watchContentBase: true,
      contentBase: path.join(__dirname, "src"),
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                autoprefixer: {
                  browsers: ["last 2 versions"],
                },
                sourceMap: isDevelopment,
                plugins: () => [autoprefixer],
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "./src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
          isDev: isDevelopment,
          isProd: isProduction,
        },
      }),
    ],
    output: {
      path: path.resolve("./dist/RootApp"),
    },
  });
};
