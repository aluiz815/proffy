import express from 'express';

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  return res.status(200).json("Ola")
})

app.listen(3333,()=>{
  return console.log("Server is running");
});