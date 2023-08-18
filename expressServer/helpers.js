const { findUserByEmail } = require("./models/user_model");

const findUser = (email) => {
    console.log("in helpers")
    findUserByEmail(email)
        .then(result => {
            return result[0];
        })
        .catch(error => {
            return null;
        })
};

module.exports = { findUser };