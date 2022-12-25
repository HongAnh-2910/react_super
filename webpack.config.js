const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDevelopment = Boolean(env.development);
  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      app: path.resolve("src/index.js"),
    },
    performance: {
      maxAssetSize: 600000,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js", // contenthash xu ly caching ten file khong thay doi server
      clean: true, //xoa file trung nap truoc khi build
      assetModuleFilename: '[file]'
    },
    devtool: isDevelopment ? "source-map" : false,
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      open: true, // mo trinh duyet
      compress: true, // gzip
      port: 9000,
      hot: true, // load nhanh
      historyApiFallback: true,
    },
    plugins: [
      //MiniCssExtractPlugin build file css rieng
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      // build file html va tu dong link file js
      new HtmlWebpackPlugin({
        title: "My App",
        filename: "index.html",
        template: "src/template.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [
            MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            // Translates CSS into CommonJS
            "css-loader", // load css webpack
            // Compiles Sass to CSS
            "sass-loader", // load scss webpack
          ],
        },
        {
          test: /\.m?js$/,
          exclude: {
            and: [/node_modules/], // Exclude libraries in node_modules ...
            not: [
              // Except for a few of them that needs to be transpiled because they use modern syntax
              /unfetch/,
              /d3-array|d3-scale/,
              /@hapi[\\/]joi-date/,
            ],
          },
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: true, // Hiển thị debug lên terminal để dễ debug
                    useBuiltIns: 'entry', // Dùng cái này thì đơn giản nhất, không cần import core-js vào code
                    corejs: '3.23.4' // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
                  }
                ]
              ],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: 'asset/resource'
        }
      ],
    },
  };
};
