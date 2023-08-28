
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z8svvp5.mongodb.net/pc-builder?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req,res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productsCollection = client.db("pc-builder").collection("products");
    if(req.method === 'GET'){
        if(req.query.id){
            const productId = req.query.id;
            const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
            if(!product){
                res.status(404).send({message:"product not found"})
            }else{
                res.status(200).send({data:product})
            }
        }else{
            const products = await productsCollection.find({}).toArray();
            res.status(200).send({data:products})
        }
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
