const {MongoClient}=require('mongodb')

const url='mongodb://0.0.0.0:27017/'
const database='learningNodejs'
const client=new MongoClient(url,{ useUnifiedTopology: true });

async function connectdb() {
    const result=await client.connect();
    const db= result.db(database);
    return db.collection('table1');
}

module.exports=connectdb;