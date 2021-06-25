/*if you want to send data in html or json formet and 
if we want to send data in more then 1 line so we can use res.write() or res.send() to send html data
if we want to send data in json formet we can use res.send() or res.json() */
const express=require('express');
const app=express();


//with html
app.get('/',(req,res)=>{
    res.send("<h1>Wel-Come To Home Page</h1>")
})
app.get('/ht',(req,res)=>{
    res.write("<h1>welcome...</h1>")
    res.write("<h2>heloooo</h2>")
    res.end()
})


// with json
app.get('/as',(req,res)=>{
    res.json({id:23,name:"jyoti"})
    res.end()
})

app.listen(2000,()=>{
    console.log("SERVER RUNNING....");
})