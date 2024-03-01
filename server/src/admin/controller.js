const pool = require('../../db');
const queries = require('./queries');

getadmins = (req,res) =>{
    pool.query(queries.getadmins, (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    })
}
getcount = (req,res)=>{
    pool.query(queries.getcount, (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    })
}

module.exports = {
    getadmins,
    getcount,
}