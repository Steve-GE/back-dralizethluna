const {response} = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');


/* const storage = multer.diskStorage({
    destination:function(res, file, cb){
        cb(null, `../admin-dralizethluna/src/assets/images/doctors`);
    },
    filename:function(res, file, cb){
        // const ext = file.originalname.split('.').pop();
        // let fileName = Date.now();
        // cb(null, `${fileName}.${ext}`);
        cb(null, `${file.originalname}`)
    },
});
const uploadC= multer({storage:storage});
const uploadD = uploadC.single('myFile');

// All Doctors
const upload = (req,res) => {
    const {id} = req.params;
    const {img} = req.body;
    res.send({data:'ok'})
    console.log('entro al file')

    const tipo = req.file.mimety;
    const nombre = req.file.originalname;
    console.log(id);
  
    console.log(req.file.originalname);

    let sql = `update Doctors set img = 'assets/images/doctors/${nombre}' where id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        try {

            if(err) {
                console.log(err)
                throw err; 
            }
            else{
                res.json({status: 'Usuario Modificado'});
            }
            
        } catch (error) {
            
        }
    });

};
 */
// // Update Doctor
/* const updateImgDoctors  = (req,res) =>{
    const {id} = req.params;
    const {img} = req.body;

    let sql = `update Doctors set img = '${img}'
                                        where id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Usuario Modificado'});
        }
    });
} */


// EXPORTS.
module.exports = {
    uploadD,
    upload,
}