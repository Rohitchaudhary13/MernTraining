
const express = require('express');
const app = express()

const MongoClient = require('mongodb').MongoClient
let db;
const ObjectId = require('mongodb').ObjectId
MongoClient.connect('mongodb://0.0.0.0:27017/', (err, client) => {
  if (err) throw err
  db = client.db('ecom')
})

app.get("/", async(req, res) => {
  const data = await db.collection('products').findOne({ _id : ObjectId('63999e153f136e2af6a60729')})
    res.send(data);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
