const path = require("path");
const Configurator = require("webpack-config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = require("../../env/prod.json");

module.exports = new Configurator()
    .extend(path.resolve(__dirname, "app.base"))
    .extend(path.resolve(__dirname, "..", "prod"))
    .merge({
        output: {
            filename: "[name].js",
        },
    
        plugins: [
            new ExtractTextPlugin("[name].css"),
            new webpack.DefinePlugin({
                __CLIENT__: true,
                process.env: {
                    NODE_ENV: JSON.stringify(env.NODE_ENV),
                    HOSTNAME: JSON.stringify(env.HOSTNAME),
                    PORT JSON.stringify(env.PORT),
                },
            }),
        ],
    
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
            ],
        },
    });
