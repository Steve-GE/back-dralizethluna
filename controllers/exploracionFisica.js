// const {response} = require('express');
// const conexion = require('../db/conexion');


// // Exploración Fisica
// const getAllExploracionFisica = (req,res) => {
//     const {id} = req.params;
// // console.log(id);
// // console.log('Aqui esta');
//     let sql = `select * from ExploracionFisica where idPatient = ?`;
//     conexion.query(sql,[id], (err, rows, fields) => {
//         if(err) 
//         {throw err;
//         console.log('error')}
//         else{
//             return res.json(rows);
//             // console.log('bien');
//         }
//     });

//     // console.log(sql);
// }



// // EXPORTS.
// module.exports = {
//     getAllExploracionFisica
// }