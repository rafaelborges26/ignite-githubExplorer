const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //tirar codigos estranhos do nosso codigo renderizado, mantendo apenas nosso codigo
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //usar o path para setar a barra correta de acordo com cada S.O src/index.jsc
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] //aceitará esses arquivos
    },
    devServer: {
        static: path.resolve(__dirname, 'public')
    },
    plugins: [
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }) //setando o plugin para dizer qual arquivo é o arquivo principal index.html
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, //verificar se termina com .jsx
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/, //verificar se termina com .css
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
}