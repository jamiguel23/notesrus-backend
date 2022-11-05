const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const db = require('./config/db.js')
const app = express();
const port = 3001
app.use(bodyParser.urlencoded({extended: true}))



MongoClient.connect(db.url, (err, database) =>{
  if (err) return console.log(err);

  require('./app/routes')(app,database)
  app.listen(port, () => {
    console.log('Listening on port', port)
  });
});
