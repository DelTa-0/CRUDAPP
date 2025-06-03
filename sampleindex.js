const express=require('express');

const app=express();

const userModel=require('./sampleuser');

app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/create',async(req,res)=>{
    let createdUser=await userModel.create({
        name:"john",
        age:"18",
        email:"john@doe.com"
    })
    res.send(createdUser)
})

app.get('/update',async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({name:"john"},{age:"22"},{new:true});
    res.send(updateduser);
})

app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.send(users);
})

app.get('/delete',async(req,res)=>{
    let users=await userModel.findOneAndDelete({name:"john"});
    res.send(users);
})





app.listen(4000);