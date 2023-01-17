const { response } = require('express');
const conexion = require('../db/conexion');

// All Patients
const getCumpleanos = (req, res) => {
    try {
        // let sql = `select * from Patients WHERE DAY(date)=  day(NOW()) AND MONTH(date) = month(NOW())`;
        let sql = `select * from Patients WHERE DAY(date) >=  day(NOW()) AND MONTH(date) = month(NOW())`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                return res.json(rows);
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}


module.exports = {
    getCumpleanos
}