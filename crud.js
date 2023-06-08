// GET ,POST ,UPDATE ,DELETE
const mongodb=require('mongodb')
const express=require('express')
const connectdb=require('./mongodb')


app=express()
app.use(express.json())

app.get('/',async (req,res)=>{
    const collection=await connectdb();
    // Gives us an array of objects
    const result=await collection.find().toArray()
    // console.warn("data fethed",data);
    res.send(result);
})

app.post('/',async (req,res)=>{
    console.warn(req.body);
    const collection=await connectdb();
    // insertMany takes an array of object , so pass the parameters accordingly
    const result=await collection.insertMany(req.body);
    // console.warn("data inserted",data);
    res.send(result);
    

})

app.put('/:id',async(req,res)=>{
    const collection=await connectdb();
    id=req.params.id;
    console.warn(id)
    const result=await collection.updateOne({_id:new mongodb.ObjectId(id)},{$set:req.body});
    console.warn(result);
    res.send(result)
    

})


// make a delete request like this --> http://localhost:5000/6480f810b0cbe3d8d3db5fd6
app.delete(`/:id`,async (req,res)=>{
    const collection=await connectdb();
    const id = req.params.id;
    console.warn(req.params.id);

    const result = await collection.deleteOne({_id: new mongodb.ObjectId(id)});
    // id=new ObjectId(req.params.id)
    console.warn(result);
    res.send(result)
    

})



app.listen(5000);
