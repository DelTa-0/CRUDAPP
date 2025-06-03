const express=require("express");

const app=express();

const userModel=require('./usermodel');

app.get("/",function(req,res){
    res.send("hello");
})

app.get("/create",async function(req,res){
    let createduser=await userModel.create({
        name:"aashish",
        email:"aashish@gmail.com",
        username:"aashish"
    })
    res.send(createduser);
})

app.get("/update",async function(req,res){
    let updatedUser=await userModel.findOneAndUpdate({username:'madhav'},{name:"madhav aryal"},{new:true});
    res.send(updatedUser);
})

app.get("/read",async function(req,res){
    let users=await userModel.find();
    res.send(users);
})

app.get("/delete",async function(req,res){
    let users=await userModel.findOneAndDelete({username:'aashish'});
    res.send(users);
})

app.listen(3000);