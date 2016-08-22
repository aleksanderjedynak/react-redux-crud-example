
module.exports = {
  entry: './app/test-redux.js',
  output: {
     path: __dirname,
     filename: './public/test-redux.js'
  },
  module:{
    loaders:[
      {
        loader: 'babel',
        test : /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        query: {
            presets: ['react', 'es2015']
        }
      }
    ]
  }
}
