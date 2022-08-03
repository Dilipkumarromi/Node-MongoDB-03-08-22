require('dotenv/config')
const mongoose = require('mongoose')    
const connectDB = async()=>{
    const conn = await mongoose.connect('mongodb://localhost:27017/CRUD',{
        useNewUrlParser: true,
       
    });
    console.log("MongoDB Connect")
}

module.exports= connectDB