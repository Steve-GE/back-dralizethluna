const { response } = require('express');
const conexion = require('../db/conexion');

// All Appointments
const getAllConsulta = (req, res) => {
    try {
        let sql = `select * from Consulta`;
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
const getConsultaID = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `SELECT * from Consulta c INNER JOIN Patients p ON c.idPatient = p.id WHERE p.id = ?`;
        conexion.query(sql, [id], (err, rows, fields) => {
            if (err) throw err;
            else {
                return res.json(rows);
            }
        });
    } catch { }
}

// Add Appointment
const addConsulta = (req, res) => {
    const { exploracionFisica, idPatient, motivoConsulta, sintomasSubjetivos, diagnostico,
        height, weight, imc, temperature, frecResp, presArt, frecCard } = req.body
    try {
        let sql = `INSERT INTO Consulta(idPatient, exploracionFisica,motivoConsulta,sintomasSubjetivos,
        diagnostico,fecha, height, weight, imc, temperature, frecResp, presArt, frecCard) 
                values  ('${idPatient}','${exploracionFisica}',  '${motivoConsulta}', '${sintomasSubjetivos}', '${diagnostico}', '${Date()}', 
                '${height}', '${weight}', '${imc}', '${temperature}', '${frecResp}', '${presArt}', '${frecCard}')`;

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
// const updateRecetaMedica = (req,res) =>{
//     // const {id} = req.params;
//     const {idPatient, receta} = req.body;

//     let sql = `update recetaMedica set receta = '${receta}'
//                                         where idPatient = '${idPatient}'`;
//     conexion.query(sql, (err, rows, fields) => {
//         if(err) throw err;
//         else{
//             res.json({status: 'Usuario Modificado'});
//         }
//     });
// }

// Eliminar una cita
/* const deleteAppointment = (req,res) => {
    const {id} = req.params;

    let sql = `delete from Appointments where id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Cita Eliminado'});
        }
    });
} */


// EXPORTS.
module.exports = {
    addConsulta,
    getConsultaID,
    // deleteRecetaMedica,
    // updateRecetaMedica,
    // getRecetaMedicaID
}