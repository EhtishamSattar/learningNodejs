const express=require('express');
const app=express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home');
});

app.post('/formsubmit',(req,res)=>{
  
    res.send(`
    <h2>Form  Successfully Submitted  </h2>

    `)
});
app.listen(5000);
