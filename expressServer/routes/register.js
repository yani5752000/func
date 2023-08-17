const express = require("express");
const router = express.Router();
const { addUser } = require("../models/user_model");

router.post("/", (req, res) => {
    addUser(req.body)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => res.status(500).send(error));
})

module.exports = router;