import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.post("/register",(req,res)=>{
    res.sendStatus(201);
});
app.put("/user/angela",(req,res)=>{
    res.sendStatus(200);
});
app.patch("/user/angela",(req,res)=>{
    res.sendStatus(200);
});
app.delete("/user/angela",(req,res)=>{
    res.sendStatus(200);
});