const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

app.use(cors());
app.use(express.json());
app.use(session({
    secret: "secret",
    resave: false,
    saveUnintialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

const messagesRouter = require("./routes/messages");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");

app.use("/messages", messagesRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
    res.send("good day");
})

app.listen(8080, console.log("server listening"));