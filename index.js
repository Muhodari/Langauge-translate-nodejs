const express= require("express");
const translateGoogle= require('translate-google') 


const app = express();
app.use(express.json())

const PORT=3000;

app.get('',(req,res)=>{
    res.status(200).send("welcome to my express application")
})


app.post("/translate",async(req,res)=>{
    const {message,to}=req.body
    const transilation= await translateGoogle(message,{from:'auto',to:to});
    res.status(200).json({transilation});
})


app.listen(process.env.PORT ||PORT,()=>{
    console.log(`listening to ${PORT}`)
})
