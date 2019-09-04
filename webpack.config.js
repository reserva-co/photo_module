module.exports = {
  mode: 'development',
  entry: './client/components/Photos.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/',
    library: 'Photos',
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

