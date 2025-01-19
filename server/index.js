const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const form =require("./modals/form.modal.js")
const url = process.env.MongoDB_URL;

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery',false);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

const connection = mongoose.connection;

connection.once('open',() =>{
    console.log("mongoose connected")
})


app.get('/checklist', async(req, res) => {
    const emails = await form.find();
    res.json({ emails });
  });

app.post("/subscribe", (req, res) => {
    const { email } = req.body;
    const subscriber_data= new form({email});
    subscriber_data.save();
    console.log("email is added to our database")
  });
  
  
app.listen(8001,() => {
    console.log("app is running")
})

