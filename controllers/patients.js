const { response } = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');

// All Patients
const getAllPatients = (req, res) => {
    try {
        let sql = `SELECT p.id, p.img, p.name, p.gender, p.address, p.mobile, p.date, p.email, p.bGroup, p.treatment FROM Patients p`;
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
const getAllPatientsOnly = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `SELECT p.id, p.img, p.name, p.gender, p.address, p.mobile, p.date, p.email, p.bGroup, p.treatment FROM Patients p where id = ?`;
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

// Add Patient
const addPatient = (req, res) => {
    const { img, name, gender, address, mobile, date, email, bGroup, treatment } = req.body
    try {
        let sql = `INSERT INTO Patients (img, name, gender, address, mobile, date, email, bGroup, treatment)  
                values  ('${img}', '${name}', '${gender}', '${address}', '${mobile}','${date}', '${email}', '${bGroup}', '${treatment}')`;

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

// Update Patient
const updatePatient = (req, res) => {
    const { id } = req.params;
    const { name, gender, address, date, email, mobile, bGroup, treatment } = req.body
    try {
        let sql = `update Patients set  name        = '${name}',
                                    gender      = '${gender}',
                                    address     = '${address}',
                                    mobile      = '${mobile}',
                                    date        = '${date}',
                                    email       = '${email}',
                                    bGroup      = '${bGroup}',
                                    treatment   = '${treatment}' 
                                    where id    = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Paciente Modificado' });
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

// Delete Patient
const deletePatient = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from Patients where id = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Paciente Eliminado' });
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

// Add Datos Extras Pacientes.
const getExtraDatos = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `SELECT pd.idPatientsDates, pd.idPatient, pd.edad, pd.lugarNacimiento, pd.residenciaActual, pd.estadoCivil, pd.escolaridad, pd.ocupacion, pd.religion from PatientDates pd where idPatient = ?`;
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

const addExtraDatos = (req, res) => {

    const { idPatient, edad, lugarNacimiento, residenciaActual, estadoCivil, escolaridad, ocupacion, religion } = req.body
    try {
        console.log(req.params, req.body);
        let sql = `INSERT INTO PatientDates (idPatient, edad, lugarNacimiento, residenciaActual, estadoCivil, escolaridad, ocupacion, religion)  
                values  ('${idPatient}', '${edad}', '${lugarNacimiento}', '${residenciaActual}', '${estadoCivil}','${escolaridad}', '${ocupacion}', '${religion}')`;

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


// Update Patient
const updateExtraDatos = (req, res) => {
    const { idPatient, edad, lugarNacimiento, residenciaActual, estadoCivil, escolaridad, ocupacion, religion } = req.body
    try {
        let sql = `update PatientDates set  edad     = ${edad},
    lugarNacimiento          = '${lugarNacimiento}',
    residenciaActual             = '${residenciaActual}',
    estadoCivil     = '${estadoCivil}',
    escolaridad        = '${escolaridad}',
    ocupacion         = '${ocupacion}',
    religion        = '${religion}' 
                                    where idPatient = '${idPatient}'`;
        conexion.query(sql, (err, rows, fields) => {

            console.log(sql);
            if (err) throw err;
            else {
                res.json({ status: 'Extra datos Modificado' });
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
        cb(null, `public/assets/images/doctors`);
    },
    filename: function (res, file, cb) {
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadImgConsulta2 = multer({ storage: storage });
const uploadImgConsulta = uploadImgConsulta2.single('myFile');

const uploadConsultaImg = (req, res) => {
    const { id } = req.params;
    const { email, name, descripcion } = req.body
    const tipo = req.file.mimety;
    const imgNombre = req.file.originalname;
    try {
        let sql = `insert into imagenConsulta (idPatient,img,nombreImg,descripcionImg,fecha)
                values('${id}','assets/images/doctors/${imgNombre}','${name}', '${descripcion}', '${Date.now()}')`;
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

// All Patients
const getAllImgPatients = (req, res) => {
    const { id } = req.params;

    try {
        let sql = `SELECT c.idImagenConsulta, c.idPatient, c.img, c.nombreImg, c.descripcionImg, c.fecha from imagenConsulta c where idPatient = ? order by idImagenConsulta DESC`;
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






// IMAGEN DE PERFIL DE PACIENTES.

const storage2 = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, `public/assets/images/patients`);
    },
    filename: function (res, file, cb) {
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadC = multer({ storage: storage2 });
const uploadProfilPatient = uploadC.single('myFile');

// All Doctors
const uploadPatientProfil = (req, res) => {
    const { id } = req.params;
    const { img } = req.body;
    res.send({ data: 'ok' })
    console.log('entro al file')

    const tipo = req.file.mimety;
    const nombre = req.file.originalname;
    console.log(id);

    console.log(req.file.originalname);

    let sql = `update Patients set img = 'assets/images/patients/${nombre}' where id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        try {

            if (err) {
                console.log(err)
                throw err;
            }
            else {
                res.json({ status: 'Imagen Paciente agregada' });
            }

        } catch (error) {

        }
    });

};

// EXPORTS.
module.exports = {
    getAllPatients,
    addPatient,
    deletePatient,
    updatePatient,
    getAllPatientsOnly,
    getExtraDatos,
    addExtraDatos,
    updateExtraDatos,

    uploadImgConsulta,
    uploadConsultaImg,
    getAllImgPatients,

    uploadProfilPatient,
    uploadPatientProfil
}