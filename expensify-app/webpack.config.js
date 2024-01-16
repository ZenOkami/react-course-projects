const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                 presets: ['@babel/preset-env', '@babel/preset-react'],
                 plugins: ['@babel/plugin-proposal-class-properties'] 
              }
          }
      }, {
          test: /\.s?css$/,
          use: [
              'style-loader', 
              'css-loader',
              'sass-loader'
          ]
      }]
  },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
    mode: 'development'
  };
}

// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//   },
//   module: {
//     rules: [{
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//             loader: 'babel-loader',
//             options: {
//                presets: ['@babel/preset-env', '@babel/preset-react'],
//                plugins: ['@babel/plugin-proposal-class-properties'] 
//             }
//         }
//     }, {
//         test: /\.s?css$/,
//         use: [
//             'style-loader', 
//             'css-loader',
//             'sass-loader'
//         ]
//     }]
// },
//   devtool: 'eval-cheap-module-source-map',
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//     historyApiFallback: true,
//   },
//   mode: 'development'
// };