const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: '68.178.206.109',
    user: 'usuario',
    password: '7hvn04mQ.!',
    port: 3306,
    database: 'BD_CONSULTAS',
    keepAlive: true

    //  host: '127.0.0.1',
    // user: 'root',
    // password: 'root',
    // port: 3306,
    // database: 'test1',
    // keepAlive: true
});

conexion.connect((err) => {
    if(err){
        console.log('Ha ocurrido un error ' + err);
    }
    else{
        console.log('Conexión correcta.');
    }
    conexion.query('SELECT VERSION()', function(error, results, fields) {
        if (error) throw error;
        console.log('Versión de MySQL: ', results[0]['VERSION()']);
      });
      // Enviar un ping periódico cada 5 minutos
      setInterval(() => {
        conexion.query('SELECT 1', (error) => {
          if (error) throw error;
        });
      }, 500000);
});


module.exports = conexion;