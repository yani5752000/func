const express = require("express");
const router = express.Router();
const { getMessages, addMessage } = require("../models/message_model");

router.get("/", (req, res) => {
    getMessages()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(error => res.status(500).send(error))
});

router.post("/", (req, res) => {
    const content = req.body.content;
    addMessage(content)
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
})

module.exports = router;

