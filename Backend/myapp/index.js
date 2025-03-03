const express = require('express');
const product = require('./product.json');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =  5000;

// MiddleWare
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// MongoDB Connection
const uri = "mongodb+srv://afsaruddin12133:YV3jvEQIqBagF9D3@practices.q2mjf.mongodb.net/?retryWrites=true&w=majority&appName=practices";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const database = client.db("userDB");
    const userCollection = database.collection("users");

    app.delete('/users/:id', async(req,res) =>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        res.send(result);
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    })

    app.get('/users', async(req,res) =>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/users',async(req,res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// Routes..
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