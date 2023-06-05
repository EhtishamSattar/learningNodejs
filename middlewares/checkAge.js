const express=require('express');
const app=express();

app.use(express.json());       
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs')

const checkAge=(req,res,next)=>{
    if(req.query.age<18){
        res.render("underAge");
    }else{
        next();
    }
}

module.exports=checkAge;
