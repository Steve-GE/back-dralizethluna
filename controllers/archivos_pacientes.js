const { response } = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');

// All Appointments
const getAllArchivosPaciente = (req, res) => {
    const { id} = req.params;
    console.log(req.params, 'o',req.body);
    console.log('PARA VER SI MANDA ID',id);
    try {
        let sql = `select * from archivosPacientes where idPatient = ${id}`;
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
 
// Eliminar una cita
const deleteArchivoPaciente = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from archivosPacientes where id = '${id}'`;
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




// Añadir imagenes
const storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, `public/assets/archivosPacientes`);
    },
    filename: function (res, file, cb) {
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadImgConsulta2 = multer({ storage: storage });
const uploadArchivo = uploadImgConsulta2.single('myFile');

const uploadArchivoPaciente = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // const tipo = req.file.mimety;
    const imgNombre = req.file.originalname;
    try {
        let sql = `insert into archivosPacientes (idPatient,ruta, nombre)
                values('${id}','assets/images/doctors/${imgNombre}','${name}')`;
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
    getAllArchivosPaciente,
    deleteArchivoPaciente,

    uploadArchivo,
    uploadArchivoPaciente,

}