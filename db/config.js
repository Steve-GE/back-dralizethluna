// const mongoose = require('mongoose');



// const dbConnection = async() => {

//     try {
        
//         await mongoose.connect( process.env.BD_CNN, {
//             // useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('DB Online');


//     } catch (error) {
//         console.log(error);
//         throw new Error('Error a la hora de inicializad DB');
//     }



// }


// module.exports = {
//     dbConnection
// }



const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'sql9.freesqldatabase.com',
    user: 'sql9584173',
    password: 'ZIzh1YkKiI',
    port: 3306,
    database: 'sql9584173'
});

conexion.connect((err) => {
    if(err){
        console.log('Ha ocurrido un error ' + err);
    }
    else{
        console.log('Conexión correcta.');
    }
});

module.exports = conexion;