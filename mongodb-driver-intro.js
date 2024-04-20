const dotenv = require("dotenv")
const { MongoClient } = require('mongodb');

dotenv.config()

const url = process.env.DB_URL

const client = new MongoClient(url)

client
.connect()
.then(connectedClient => {
    const db = connectedClient.db("super-users-db-intro")

    return db.collection("movies").find({ year: "1994" }).toArray()
})
.then(data => console.log(data))
.then(() => client.close()) 
.catch(err => console.log(err))