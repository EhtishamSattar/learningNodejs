// GET ,POST ,UPDATE ,DELETE
const { ObjectID } = require('bson');
const express=require('express')
const connectdb=require('./mongodb')


app=express()
app.use(express.json())

app.get('/',async (req,res)=>{
    const collection=await connectdb();
    const result=await collection.find().toArray()
    // console.warn("data fethed",data);
    res.send(result);
})

app.post('/',async (req,res)=>{
    console.warn(req.body);
    const collection=await connectdb();
    const result=await collection.insertMany([req.body]);
    // console.warn("data inserted",data);
    res.send(result);
    

})

app.put('/',async(req,res)=>{
    const collection=await connectdb();
    const result=await collection.update({id:req.params.id},{$set:req.body});
    console.warn(result);
    

})

app.delete(`/:id`,async (req,res)=>{
    const collection=await connectdb();
    const id = req.params.id;
    console.warn(req.params.id)
    const objectId =  new ObjectID(id);

    const result = await collection.deleteOne({ _id: objectId });
    // id=new ObjectId(req.params.id)
    console.warn(result);
    res.send(result)
    

})



app.listen(5000);
