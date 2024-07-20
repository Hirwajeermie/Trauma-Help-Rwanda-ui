const webpack = require('webpack');
const path = require('path');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    }),
  ],
};
