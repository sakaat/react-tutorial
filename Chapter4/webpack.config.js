const publicDir = __dirname + "/public";
module.exports = {
    entry: ["./src/index.jsx"],
    output: {
        path: publicDir,
        publicPath: "/",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-react",
                                "@babel/preset-env",
                            ],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: publicDir,
    },
};
