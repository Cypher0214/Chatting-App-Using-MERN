// import { chats } from "./Dummmy";


const express = require("express");
const { chats } = require("./Dummmy.js");

const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.get("/", (req, res) => {
     res.send("api is running")

    
})
app.get('/api/chat',(req, res) =>
    {
     res.send(chats)
})

app.get('/api/chat/:id', (req, res) =>
 
{
    // console.log(req.params.id);
    const singleUser = chats.find((c) => c._id === req.params.id);     
    res.send(singleUser);
})
//Our Server will be live to port 3000.
const PORT = process.env.PORT||6900;
app.listen(PORT, console.log('server is started on PORT ${PORT}'))
