'use strict'

const express = require('express');
require('dotenv').config();
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001
const db = mongoose.connection

app.use(bodyParser.urlencoded({extended: true}))

db.on('error' , console.error.bind(console, 'Connection Error'));

db.once('open', function(){
  console.log('Mongoose is connected, playa')
});



app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`)
})
