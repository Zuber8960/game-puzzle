module.exports = {
    // Other configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
          exclude: /node_modules/, // Exclude node_modules
        },
      ],
    },
    // devtool: false
  };
  