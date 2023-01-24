const { response } = require('express');
const conexion = require('../db/conexion');

// All Appointments
const getAllHistorialClinico = (req, res) => {
    try {
        let sql = `SELECT c.idHistorialClinico, c.idPatient, c.antHeredofamiliares, c.antPersonalesNoPatologicos, c.antAndrologicos, c.antPersonalesPatologicos, c.resumExpYPadActual, c.tratPrevHospitalizacion,
    c.inteAparatosSistemas,c.examLabIngreso, c.gabineteIngreso, c.diagnostico, c.extras  FROM historialClinico c`;
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
const getHistorialClinicoID = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `SELECT c.idHistorialClinico, c.idPatient, c.antHeredofamiliares, c.antPersonalesNoPatologicos, c.antAndrologicos, c.antPersonalesPatologicos, c.resumExpYPadActual, c.tratPrevHospitalizacion,
    c.inteAparatosSistemas,c.examLabIngreso, c.gabineteIngreso, c.diagnostico, c.extras  FROM historialClinico c
     where idPatient = ?`;
        conexion.query(sql, [id], (err, rows, fields) => {
            if (err) throw err;
            else {
                // console.log(rows);
                return res.json(rows);
            }
        });
    } catch { }
}



const getReporteHistorialClinicoID = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `select * from ((Patients p INNER JOIN historialClinico c ON p.id = c.idPatient) INNER JOIN PatientDates pd ON p.id = pd.idPatient) where p.id = ?`;
        conexion.query(sql, [id], (err, rows, fields) => {
            if (err) throw err;
            else {
                // console.log(rows);
                return res.json(rows);
            }
        });
    } catch { }
}


// Add Appointment
const addHistorialClinico = (req, res) => {
    const { antHeredofamiliares, idPatient, antPersonalesNoPatologicos, antAndrologicos, antPersonalesPatologicos,
        resumExpYPadActual, tratPrevHospitalizacion, inteAparatosSistemas, examLabIngreso,
        gabineteIngreso, diagnostico, extras } = req.body

        console.log(req.body);
    try {
        let sql = `INSERT INTO historialClinico(idPatient, antHeredofamiliares,antPersonalesNoPatologicos,antAndrologicos,
        antPersonalesPatologicos, resumExpYPadActual, tratPrevHospitalizacion, inteAparatosSistemas, examLabIngreso,
        gabineteIngreso, diagnostico, extras) 
                values  ('${idPatient}','${antHeredofamiliares}',  '${antPersonalesNoPatologicos}', '${antAndrologicos}', '${antPersonalesPatologicos}', '${resumExpYPadActual}', 
                '${tratPrevHospitalizacion}', '${inteAparatosSistemas}', '${examLabIngreso}', '${gabineteIngreso}', '${diagnostico}', '${extras}')`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Consulta Medica agregada' });
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
const updateHistorialClinico = (req, res) => {
    // const {id} = req.params;
    const { idPatient, antHeredofamiliares, antPersonalesNoPatologicos, antAndrologicos, antPersonalesPatologicos,
        resumExpYPadActual, tratPrevHospitalizacion, inteAparatosSistemas, examLabIngreso,
        gabineteIngreso, diagnostico, extras } = req.body;
    try {
        let sql = `update historialClinico set 
    antHeredofamiliares = '${antHeredofamiliares}',
    antPersonalesNoPatologicos = '${antPersonalesNoPatologicos}',
    antAndrologicos = '${antAndrologicos}',
    antPersonalesPatologicos = '${antPersonalesPatologicos}',
    resumExpYPadActual = '${resumExpYPadActual}',
    tratPrevHospitalizacion = '${tratPrevHospitalizacion}',
    inteAparatosSistemas = '${inteAparatosSistemas}',
    examLabIngreso = '${examLabIngreso}',
    gabineteIngreso = '${gabineteIngreso}',
    diagnostico = '${diagnostico}',
    extras = '${extras}'
    where idPatient = '${idPatient}'`;

        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Historial Clinica Modificado' });
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
    addHistorialClinico,
    getHistorialClinicoID,
    updateHistorialClinico,
    // deleteRecetaMedica,
    // updateRecetaMedica,
    // getRecetaMedicaID
    getReporteHistorialClinicoID
}