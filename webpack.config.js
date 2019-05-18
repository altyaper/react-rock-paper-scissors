var path = require('path');

module.exports = {
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: __dirname,
    compress: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  }
}
