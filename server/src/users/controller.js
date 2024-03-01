const pool = require('../../db');
const queries = require('./queries');

const getusers = (req,res)=>{
    pool.query(queries.getusers, (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    })
}

// const getuserbyid = (req,res)=>{
//     const id = parseInt(req.params.id);
//     pool.query(queries.getuserbyid,[id],(error, result)=>{
//         if(error) throw error;
//         res.status(200).json(result.rows);
//     })
// }

const adduser = (req,res)=>{
    const { username, password} = req.body;
    pool.query(queries.checkUsernameExists, [username], (error,result)=>{
        if(result.rows.length){
            res.send({"email already exists.":1});
        }
        pool.query(queries.adduser, [username, password], (error, result) =>{
            if(error) throw error;
            res.status(201).send({"user added":1})
        })
    })

    // pool.query(queries.adduser, (error, result)=>{
    //     if(error) throw error;
    //     res.status(200).json(result.rows);
    // })
}

module.exports = {
    getusers,
    // getuserbyid,
    adduser,
}