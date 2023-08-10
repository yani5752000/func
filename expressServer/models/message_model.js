const Pool = require("pg").Pool;
const pool = new Pool({
    database: "func_database",
    host: "localhost",
    port: 5432,
    user: "func_user",
    password: "root"
})

const getMessages = () => {
    const queryString = "SELECT * FROM messages ORDER BY id ASC";
    return new Promise((resolve, reject) => {
        pool.query(queryString, (error, result) => {
            if(error) {
                reject(error);
            } else { 
                resolve(result.rows);
            }
        })
    })
};

const addMessage = ( content ) => {
    const queryString = "INSERT INTO TABLE messages VALUES($1) RETURNING *";
    return new Promise((resolve, reject) => {
        pool.query(queryString, [content], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows)
            }
        })
    })
};

module.exports = { getMessages, addMessage };