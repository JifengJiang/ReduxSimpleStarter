module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules:[{
      use: [
        "babel-loader",
      ]
    }]
  },
  resolveLoader: {
        moduleExtensions: ["-loader"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
