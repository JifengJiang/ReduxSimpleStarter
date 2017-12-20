# ReduxSimpleStarter
Redux Starter with React 16.2.0, refered from https://github.com/StephenGrider/ReduxSimpleStarter.

Update babel-preset-2015 to babel-preset-env, update webpack 1 to webpack 3.

Update all the packages using:

npm i -g npm-check-updates

npm-check-updates -u

npm install

To generate new git project, copy src, style, test directory and package.json, index.html and webpack.config.js file to a new directory, and then generate .babelrc file:

{
  "presets": [
    [“react", “env”, “stage-1"]
  ]
}

To upgrade from webpack 1 to 3, replace webpack.config.js file content with following code:

 module: {
 
    rules: [
    
      {
      
        use: [
        
         "style-loader",
         
         "css-loader",
         
         "less-loader",
         
        ]
        
      }
      
    ]
    
  }
  resolveLoader: {
   
     moduleExtensions: ["-loader"]

  }
 
 Happy coding!
