const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/images/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      scripts: path.resolve(__dirname, 'src/scripts/'),
      components: path.resolve(__dirname, 'src/scripts/components/'),
    },
  },
};
