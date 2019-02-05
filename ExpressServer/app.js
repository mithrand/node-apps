const express = require('express');
const app = express();

const myMiddleWare = (req, res, next) => {
  console.log("My MiddleWare"); 
  next(); 
}

const myOtherMiddlerWare = (req, res, next) => {
  console.log("My other Middler Ware"); 
  next(); 
}

app.use([
  myMiddleWare,
  myOtherMiddlerWare,
]);

const dataService = require('./services/dataService');

dataService
  .start()
  .then(() => {
    app.listen(3000);
  })
  .catch(error => console.error(error));
