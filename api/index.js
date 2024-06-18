const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const  PORT = 8000;
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});


const app = express();


app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})