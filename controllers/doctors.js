const { response } = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');

// All Doctors
const getAllDoctorss = (req, res) => {
    try {
        let sql = `SELECT d.id, d.img, d.name, d.department, d.specialization, d.degree, d.mobile, d.email, d.address, d.notas  FROM Doctors d`;
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

// Add Doctor
const addDoctors = (req, res) => {
    const { img, name, department, specialization, degree, mobile, email, address, notas } = req.body
    try {
        let sql = `INSERT INTO Doctors (img,name,department,specialization,degree,mobile,email,address,notas) 
                values  ('${img}', '${name}', '${department}', '${specialization}', '${degree}','${mobile}', '${email}', '${address}', '${notas}')`;

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
// Update Doctor
const updateDoctors = (req, res) => {
    const { id } = req.params;
    const { name, department, specialization, degree, mobile, email, address, notas } = req.body;
    try {
        let sql = `update Doctors set name = '${name}',
                                        department = '${department}',
                                        specialization = '${specialization}',
                                        degree = '${degree}',
                                        mobile = '${mobile}',
                                        email = '${email}',
                                        address = '${address}',
                                        notas = '${notas}' 
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

// Delete Doctors
const deleteDoctors = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from Doctors where id = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Medico Eliminado' });
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





const storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, `public/assets/images/doctors`);
    },
    filename: function (res, file, cb) {
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadC = multer({ storage: storage });
const uploadD = uploadC.single('myFile');

// All Doctors
const uploadImgDoctor = (req, res) => {
    const { id } = req.params;
    const { img } = req.body;
    res.send({ data: 'ok' })
    const tipo = req.file.mimety;
    const nombre = req.file.originalname;

    try {

        let sql = `update Doctors set img = 'assets/images/doctors/${nombre}' where id = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            try {

                if (err) {
                    console.log(err)
                    throw err;
                }
                else {
                    res.json({ status: 'Usuario Modificado' });
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
    getAllDoctorss,
    addDoctors,
    deleteDoctors,
    updateDoctors,

    uploadD,
    uploadImgDoctor
}