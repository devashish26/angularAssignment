const getadmins = 'SELECT * FROM admin';
const getcount = 'SELECT COUNT(*) FROM users GROUP BY activation HAVING activation = \'true\';'

module.exports = {
    getadmins,
    getcount,
}