const { response } = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');

// All Appointments
const getAllCotizaciones = (req, res) => {
    try{
    let sql = `select * from Cotizaciones`;
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

// // Add Appointment
// const addAppointment = (req,res) => {
//     const {name, email, gender, date, time, mobile, injury} = req.body

//     let sql = `INSERT INTO Appointments(name,email,gender,date,time,mobile,injury) 
//                 values  ('${name}', '${email}', '${gender}', '${date}','${time}', '${mobile}', '${injury}')`;

//     conexion.query(sql, (err, rows, field) => {
//         if(err) throw err
//         else{
//             res.json({status: 'Usuario agregado'});
//         }
//     });

// }
// // Update Appointment
// const updateAppointment  = (req,res) =>{
//     const {id} = req.params;
//     const {name, email, gender, date, time, mobile, injury} = req.body;

//     let sql = `update Appointments set name = '${name}',
//                                         email = '${email}',
//                                         gender = '${gender}',
//                                         date = '${date}',
//                                         time = '${time}',
//                                         mobile = '${mobile}',
//                                         injury = '${injury}' 
//                                         where id = '${id}'`;
//     conexion.query(sql, (err, rows, fields) => {
//         if(err) throw err;
//         else{
//             res.json({status: 'Usuario Modificado'});
//         }
//     });
// }

// Eliminar una cita
const deleteCotizacion = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from Cotizaciones where id = '${id}'`;
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





// Añadir Archivo
const storage = multer.diskStorage({
    destination: function (res, file, cb) {
        console.log('entro aqui');
        cb(null, `public/assets/cotizaciones`);
        console.log('aqui no entro');
    },
    filename: function (res, file, cb) {
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadCotizacion2 = multer({ storage: storage });
const uploadCotizacionArchivo = uploadCotizacion2.single('myFile');

const uploadCotizacion = (req, res) => {
    const { name } = req.body
    const tipo = req.file.mimety;
    const imgNombre = req.file.originalname;
    try {
        let sql = `insert into Cotizaciones (ruta, nombre) values('assets/cotizaciones/${imgNombre}','${name}')`;
        conexion.query(sql, (err, rows, fields) => {
            try {
                if (err) {
                    console.log(err)
                    throw err;
                }
                else {
                    res.json({ status: 'Imagen añadida' });
                }
            } catch (error) {
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

// EXPORTS.
module.exports = {
    getAllCotizaciones,
    deleteCotizacion,

    uploadCotizacionArchivo,
    uploadCotizacion,

}