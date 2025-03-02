const express = require('express');
const product = require('./product.json');
const app = express();
const port =  5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://afsaruddin12133:<db_password>@practices.q2mjf.mongodb.net/?retryWrites=true&w=majority&appName=practices";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/product', (req,res) => {
    res.send(product);
})

app.get('/product/:id', (req,res) => {
  const id = parseInt(req.params.id);
  const productFound = product.products.find(item => item.id === id);
  res.send(productFound);  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})