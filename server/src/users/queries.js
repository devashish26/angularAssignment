const getusers = 'SELECT * FROM users;';
// const getuserbyid = 'SELECT * FROM users WHERE uno = $1;';
const checkUsernameExists = 'SELECT username FROM users WHERE username = $1;'
const adduser = 'INSERT INTO users(username, password) VALUES( $1, $2);'
module.exports = {
    getusers,
    // getuserbyid,
    checkUsernameExists,
    adduser,
}