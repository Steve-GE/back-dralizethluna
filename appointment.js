const { response } = require('express');
const conexion = require('../db/conexion');

// All Appointments
const getAllAppointments = (req, res) => {
    let sql = `SELECT a.id, a.name, a.email, a.gender, a.date, a.time, a.mobile, a.injury FROM Appointments a `;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            return res.json(rows);
        }
    });
}

// Add Appointment
const addAppointment = (req, res) => {
    const { name, email, gender, date, time, mobile, injury } = req.body
    try {
        let sql = `INSERT INTO Appointments(name,email,gender,date,time,mobile,injury) 
                values  ('${name}', '${email}', '${gender}', '${date}','${time}', '${mobile}', '${injury}')`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Usuario agregado' });
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
const updateAppointment = (req, res) => {
    const { id } = req.params;
    const { name, email, gender, date, time, mobile, injury } = req.body;
    try {
        let sql = `update Appointments set name = '${name}',
                                        email = '${email}',
                                        gender = '${gender}',
                                        date = '${date}',
                                        time = '${time}',
                                        mobile = '${mobile}',
                                        injury = '${injury}' 
                                        where id = '${id}'`;
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

// Eliminar una cita
const deleteAppointment = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from Appointments where id = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Cita Eliminado' });
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
    getAllAppointments,
    addAppointment,
    deleteAppointment,
    updateAppointment
}