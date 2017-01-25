var config = {
   entry: './js/main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react'],
               plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
            }
         }
      ]
   }
}

module.exports = config;