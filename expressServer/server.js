const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const messagesRouter = require("./routes/messages")

app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
    res.send("good day")
})

app.listen(8080, console.log("server listening"))