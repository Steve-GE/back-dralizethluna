const { response } = require('express');
const conexion = require('../db/conexion');

// All Appointments
const getAllRecetaMedica = (req, res) => {
    try {
        let sql = `select * from recetaMedica`;
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

// One patient
const getRecetaMedicaID = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `SELECT * FROM (recetaMedica r INNER JOIN Patients p ON r.idPatient = p.id) WHERE p.id = ?`;
        conexion.query(sql, [id], (err, rows, fields) => {
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

// Add Appointment
const addRecetaMedica = (req, res) => {
    const { idPatient, receta } = req.body
    try {
        let sql = `INSERT INTO recetaMedica(idPatient,receta,fecha) 
                values  ('${idPatient}', '${receta}', '${Date()}')`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Receta agregada' });
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

// Update Appointment
const updateRecetaMedica = (req, res) => {
    // const {id} = req.params;
    const { idPatient, receta } = req.body;
    try {
        let sql = `update recetaMedica set receta = '${receta}'
                                        where idPatient = '${idPatient}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Usuario Modificado' });
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



// EXPORTS.
module.exports = {
    getAllRecetaMedica,
    addRecetaMedica,
    // deleteRecetaMedica,
    updateRecetaMedica,
    getRecetaMedicaID
}