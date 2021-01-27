const path = require("path");
const express=require('express');
const bodyParser = require('body-parser');
const Demo=require('./models/demo')
const app=express();
app.use(bodyParser.json());
app.use("/",express.static(path.join(__dirname,"angular")))


//const postsRoutes = require("./routes/posts");

const mongoose  = require('mongoose');


mongoose.connect("mongodb+srv://srikar:9y1pOHz6ITQ0Nh3f@cluster0.nckq3.mongodb.net/cloudDB?retryWrites=true&w=majority",
{ useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex: true  })
.then(() => {
  console.log("connected to database");
})
.catch(() => {
  console.log("connection failed");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Authorization, text/html, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get('/api/getPosts',(req,res,next) =>{
  const data=new Demo({
    title:"test1",
    content:"srikar"
  });
  data.save();
  res.status(200).json({
    message: "Posts send succesfullyy",
    mangoData:data
  });

// Demo.find().then((data)=>{
//   console.log(data);
//   res.status(200).json({
//     message: "Posts send succesfullyy",
//     mangoData:data
//   });
// })
  
});

// app.use((req,res,next) => {
//   res.sendFile(path.join(__dirname,"angular","index.html"));
// });
module.exports = app;
