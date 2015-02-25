module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: ['./main.js']
  },

  module: {
    loaders: [
      { test: /\.eot$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules|dist/, loader: "babel-loader" },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.svg$/, loader: 'file' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.woff2?$/, loader: 'url?mimetype=application/font-woff' },
    ]
  }
};
