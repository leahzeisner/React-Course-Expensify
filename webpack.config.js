const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log(isProduction)
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    });

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    } ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
};