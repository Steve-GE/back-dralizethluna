const { response } = require('express');
const conexion = require('../db/conexion');

// Count Patients
const getCountPatients = (req, res) => {
    try {
        let sql = `SELECT count(*) as total from Patients p`;
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

// Count Appointment
const getCountAppointments = (req, res) => {
    try {
        let sql = `SELECT COUNT(*) as total FROM Appointments a`;
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

// All Citas Web
const getAllCitaWeb = (req, res) => {
    try {
        let sql = `select w.idCitaWeb, w.nombreCompleto, w.motivoDeCita, w.email, w.telefono FROM citaWeb w`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                console.log(rows[0]);
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

const deleteCitaWeb = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from citaWeb where idCitaWeb = ${id}`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Peticion Cita Web Eliminado' });
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

const deleteCorreoWeb = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from correoWeb where idCorreoWeb = ${id}`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Peticion Correo Web Eliminado' });
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


const getAllCorreoWeb = (req, res) => {
    try {
        let sql = `SELECT w.idCorreoWeb, w.nombre, w.email, w.asunto, w.telefono, w.mensaje FROM correoWeb w`;
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

const addCitaWeb = (req, res) => {
    const { nombreCompleto, motivoDeCita, email, telefono } = req.body

    try {
        let sql = `INSERT INTO citaWeb (nombreCompleto,motivoDeCita,email,telefono) 
                values  ('${nombreCompleto}', '${motivoDeCita}', '${email}', '${telefono}')`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Cita Web agregado' });
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

const addCorreoWeb = (req, res) => {
    const { nombre, email, telefono, asunto, mensaje } = req.body
    try {
        let sql = `INSERT INTO correoWeb (nombre,email,telefono,asunto,mensaje) 
                values  ('${nombre}', '${email}', '${telefono}', '${asunto}', '${mensaje}')`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Correo Web agregado' });
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
    getCountPatients,
    getCountAppointments,
    getAllCitaWeb,
    getAllCorreoWeb,
    deleteCitaWeb,
    deleteCorreoWeb,
    addCitaWeb,
    addCorreoWeb
}