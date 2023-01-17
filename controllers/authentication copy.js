const {response} = require('express');
const conexion = require('../db/conexion');

// LOGIN
const loginUsuario = (req,res) => {
    const {username, password} = req.body;
    let sql = `select * from Usuarios where username = '${username}' and password = '${password}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            return res.json(rows[0]);
        }
    });
}

module.exports = {
    loginUsuario
}