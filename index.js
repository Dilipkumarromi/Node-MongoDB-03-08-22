const express=require('express');
const app=express();
const connectDB=require('./config/MongoDB');

require('dotenv/config')
connectDB()
console.log("db",process.env.MONGO_DB)
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT}`)
})

