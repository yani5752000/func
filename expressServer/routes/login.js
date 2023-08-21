const express = require("express");
const router = express.Router();
const { findUserByEmail } = require("../models/user_model")

router.post("/", (req, res) => {
    console.log("login.js: ", req.body);
    const email = req.body.email;
    findUserByEmail(email)
        .then(result => {
            if(result.length == 0) {
                return res.json({loggedIn: false});
            } else {
                if(result[0].password != req.body.password) {
                    return res.json({loggedIn: false});
                } else {
                    req.session.usermame = result[0].username;
                    console.log("login.ls req.session.username: ", req.session.usermame);
                    return res.status(200).json({loggedIn: true, usermame: req.session.username});
                }
            }
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

module.exports = router;