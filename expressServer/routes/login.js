const express = require("express");
const router = express.Router();
const { findUserByEmail } = require("../models/user_model")

router.post("/", (req, res) => {
    console.log("login.js: ", req.body);
    const email = req.body.email;
    findUserByEmail(email)
        .then(result => {
            if(result.length == 0) {
                res.status(404).send("user not found");
            } else {
                if(result[0].password != req.body.password) {
                    res.status(404).send("passwords mismatch");
                } else {
                    res.status(200).send("user logged in");
                }
            }
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

module.exports = router;