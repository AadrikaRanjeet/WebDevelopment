import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("<h1>HEllo</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>I am Aadrika Ranjeet</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>9770822442</h1>");
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
app.listen(port,()=>{
    console.log(`Server started on${port}`);
});