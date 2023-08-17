const Pool = require("pg").Pool;
const pool = new Pool({
    database: "func_database",
    host: "localhost",
    port: 5432,
    user: "func_user",
    password: "root"
})

// const getMessages = () => {
//     const queryString = "SELECT * FROM messages ORDER BY id ASC";
//     return new Promise((resolve, reject) => {
//         pool.query(queryString, (error, result) => {
//             if(error) {
//                 reject(error);
//             } else { 
//                 resolve(result.rows);
//             }
//         })
//     })
// };

const addUser = ( {username, email, password} ) => {
    const queryString = "INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *";
    return new Promise((resolve, reject) => {
        pool.query(queryString, [username, email, password], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows)
            }
        })
    })
};

// const deleteMessage = (id) => {
//     const queryString = "DELETE FROM messages WHERE id = $1";
//     return new Promise((resolve, reject) => {
//         pool.query(queryString, [id], (error, result) => {
//             if(error) {
//                 reject(error);
//             } else {
//                 resolve(`Message deleted with id ${id}`);
//             }
//         })
//     })
// }

module.exports = { addUser };