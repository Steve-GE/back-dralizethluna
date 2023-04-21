const router = require('express').Router();
const conexion = require('../db/conexion');
const { getAllAppointments, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointment');
const { loginUsuario, register } = require('../controllers/authentication');
const { getAllDoctorss, deleteDoctors, updateDoctors, addDoctors, uploadImgDoctor, uploadD } = require('../controllers/doctors');
const { getAllPatients, deletePatient, addPatient, updatePatient, getAllPatientsOnly, getExtraDatos, uploadImgConsulta, uploadConsultaImg, getAllImgPatients, addExtraDatos, uploadProfilPatient, uploadPatientProfil, updateExtraDatos } = require('../controllers/patients');
// const { getAllExploracionFisica } = require('../controllers/exploracionFisica');
const { getCountPatients, getCountAppointments, getAllCitaWeb, getAllCorreoWeb, deleteCitaWeb, deleteCorreoWeb, addCitaWeb, addCorreoWeb } = require('../controllers/doctor_dashboard'); 
const { getCumpleanos } = require('../controllers/cumpleanos');
const { getAllCotizaciones, deleteCotizacion, uploadCotizacionArchivo, uploadCotizacion } = require('../controllers/cotizaciones');
const { getAllProveedores, addProveedor, updateProveedores, deleteProveedores } = require('../controllers/proveedores');
const { addRecetaMedica, updateRecetaMedica, getRecetaMedicaID } = require('../controllers/receta_medica');
const { addConsulta,  getConsultaID } = require('../controllers/consulta_medica');
const { addHistorialClinico, getHistorialClinicoID, updateHistorialClinico, getReporteHistorialClinicoID } = require('../controllers/historialClinico');
const { getRecetaMedicaIndividual } = require('../controllers/reportes_tablas');
const { data } = require('../controllers/data');uploadConsultaImg
const { getAllArchivosPaciente, deleteArchivoPaciente, uploadArchivo, uploadArchivoPaciente } = require('../controllers/archivos_pacientes');

// Authentication
router.post('/authenticate',[], loginUsuario);

router.get('/data',[], data);

// router.post('/register',[], register);

// Appoinments
router.get('/getAllAppointments',[], getAllAppointments);

router.post('/addAppointment',[],addAppointment)

router.put('/updateAppointment:id',[], updateAppointment)

router.delete('/deleteAppointment:id',[], deleteAppointment)

// Doctors
router.get('/getAllDoctorss',[], getAllDoctorss);

router.post('/addDoctors',[],addDoctors)

router.delete('/deleteDoctors:id',[], deleteDoctors);

router.put('/updateDoctors:id',[], updateDoctors)

router.put('/uploadDoctorImg:id',uploadD, uploadImgDoctor)

// Patients

router.get('/getAllPatients',[], getAllPatients);

router.get('/getAllPatientsOnly:id',[], getAllPatientsOnly);

router.post('/addPatient',[],addPatient)

router.delete('/deletePatient:id',[], deletePatient);

router.put('/updatePatient:id',[], updatePatient);
 
router.get('/getExtraDatos:id',[], getExtraDatos);

router.post('/addExtraDatos',addExtraDatos);

router.put('/updateExtraDatos',[], updateExtraDatos);

router.post('/uploadImgConsulta:id', uploadImgConsulta, uploadConsultaImg)

router.get('/getAllImgPatients:id',[], getAllImgPatients);

router.put('/uploadPatientProfil:id', uploadProfilPatient, uploadPatientProfil)


// Dashboard Doctors
router.get('/getCountPatients',[], getCountPatients);
router.get('/getCountAppointments',[], getCountAppointments);
router.get('/getAllCitaWeb',[], getAllCitaWeb);
router.get('/getAllCorreoWeb',[], getAllCorreoWeb);
router.delete('/deleteCitaWeb:id',[], deleteCitaWeb);
router.delete('/deleteCorreoWeb:id',[], deleteCorreoWeb);
router.post('/addCitaWeb',[], addCitaWeb);
router.post('/addCorreoWeb',[], addCorreoWeb);




// Cotizaciones
router.get('/getAllCotizaciones',[], getAllCotizaciones);
router.delete('/deleteCotizacion:id',[], deleteCotizacion);
router.post('/uploadCotizacion', uploadCotizacionArchivo, uploadCotizacion);


// Archvivos pacientes
router.get('/getAllArchivosPaciente:id',[], getAllArchivosPaciente);
router.delete('/deleteArchivoPaciente:id',[], deleteArchivoPaciente);
router.post('/uploadArchivoPaciente:id', uploadArchivo, uploadArchivoPaciente);

// PROVEEDORES
router.get('/getAllProveedores',[], getAllProveedores);
router.post('/addProveedor',[], addProveedor);
router.put('/updateProveedores:id',[], updateProveedores);
router.delete('/deleteProveedores:id',[], deleteProveedores);

// RECETA MEDICA
 
router.get('/getRecetaMedicaID:id',[], getRecetaMedicaID);

router.post('/addRecetaMedica',[], addRecetaMedica);
router.put('/updateRecetaMedica:id',[], updateRecetaMedica);
router.get('/getRecetaMedicaIndividual',[], getRecetaMedicaIndividual);


// HISTORIAL CLINICO
router.post('/addHistorialClinico',[], addHistorialClinico);
router.get('/getHistorialClinicoID:id',[], getHistorialClinicoID);
router.get('/getReporteHistorialClinicoID:id',[], getReporteHistorialClinicoID);




// CONSULTA MEDICA
router.get('/getConsultaID:id',[], getConsultaID);
router.post('/addConsulta',[], addConsulta);
router.put('/updateHistorialClinico',[], updateHistorialClinico);


// Cumpleaños
router.get('/getCumpleanos',[], getCumpleanos);



// CORREO ELECTRONICO PAGINA WEB
// router.post('/envioEmail', envioCorreo);


module.exports = router

 