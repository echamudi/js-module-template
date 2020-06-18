const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    entry: {
      minimath: ['./src/index.js'],
    },
    output: {
      path: path.join(__dirname, '/dist/umd'),
      filename: argv.mode === 'production' ? '[name].min.js' : '[name].js',
      library: 'minimath',
      libraryExport: '',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    optimization: {
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      })],
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
        }],
      }],
    },
  };

  if (argv.mode !== 'production') {
    config.devtool = 'inline-source-map';
  }

  return config;
};
