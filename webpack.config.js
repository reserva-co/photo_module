module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/',
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)/, 
        include: __dirname + '/client/',
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};

