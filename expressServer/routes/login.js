const express = require("express");
const router = express.Router();
const { findUserByEmail } = require("../models/user_model")

router.get("/isValid", (req, res) => {
    console.log("in isValid req.session.username: ", req.session.username);
    if (req.session.username) {
        return res.json({valid: true, username: req.session.username});
    } else {
        return res.json({valid: false});
    }
});

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
                    req.session.username = result[0].username;
                    console.log("login.ls req.session.username: ", req.session.username);
                    return res.status(200).json({loggedIn: true, username: req.session.username});
                }
            }
        })
        .catch(error => {
            res.status(500).send(error);
        })
})


module.exports = router;