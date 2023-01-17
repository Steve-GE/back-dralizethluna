const { response } = require('express');
const conexion = require('../db/conexion');

// All Appointments
const getRecetaMedicaIndividual = (req, res) => {

    const { idPatient, idRecetaMedica } = req.body;
    try {
        let sql = `select * from recetaMedica where idPatient = '${idPatient}' and where idRecetaMedica = '${idRecetaMedica}'`;
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
const getTablasReportesID = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `select * from recetaMedica where idPatient = ?`;
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
    getRecetaMedicaIndividual,
    addRecetaMedica,
    // deleteRecetaMedica,
    updateRecetaMedica,
    // getRecetaMedicaID
}