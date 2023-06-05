const express=require('express');
const checkAge=require('./middlewares/checkAge')
const route=express.Router()
const app=express();

app.use(express.json());       
app.use(express.urlencoded({extended: true}));

route.use(checkAge);
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    user={
        name:"Ehtisham",
        age:"21",
        city:"Lahore"
    }
    res.render('home',{user});
});

// using route to apply the Specific middle ware
route.post(`/formsubmit`,(req,res)=>{
    
    res.send(`
    <h2>Form  Successfully Submitted with value ${[req.body.name]}</h2>
    
    `)
});

app.use(route)
app.listen(5000);
