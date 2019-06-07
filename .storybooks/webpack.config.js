const path = require('path');

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../src/style')
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../scss')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
