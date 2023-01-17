const mysql = require('mysql');

const conexion = mysql.createConnection({
    // host: 'sql9.freesqldatabase.com',
    // user: 'sql9584173',
    // password: 'ZIzh1YkKiI',
    // port: 3306,
    // database: 'sql9584173' 

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'test1'
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