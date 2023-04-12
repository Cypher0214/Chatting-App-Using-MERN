const express = require("express");
const { chats } = require("./Dummmy");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
}); 

app.get("/api/chat/:id", (req, res) => {
  const singleUser = chats.find((c) => c._id === req.params.id);
  res.send(singleUser);
});

const PORT = process.env.PORT || 6900;


app.listen(PORT, console.log(`Server is started on PORT ${PORT}`));
