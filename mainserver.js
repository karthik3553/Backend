const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/karthikdb")
.then(()=>{console.log("mongo connected");})
.catch(()=>{console.log("something wrong in db");})

//schema , model, save(insert)

const userScehma = new mongoose.Schema({
    username:{
        type:String
    }
})

const User = mongoose.model("user",userScehma)

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const userDetails = new User({
        username:username
    })
    userDetails.save()
    .then(()=>{res.send("success")})
    .catch(()=>{res.send("didnt save")})
    
})

app.listen(3000,(req,res)=>{
    console.log("server started");
})