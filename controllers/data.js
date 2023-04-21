const {response} = require('express');
const conexion = require('../db/conexion');

// LOGIN
const data = (req,res) => {
    console.log('entro al data');
    conexion.query('SHOW TABLES', (error, results) => {
        if (error) throw error;
        const tables = results.map(result => result[`Tables_in_${conexion.config.database}`]);
        const data = {};
        tables.forEach(table => {
            conexion.query(`SELECT * FROM ${table}`, (error, results) => {
            if (error) throw error;
            data[table] = results;
            if (Object.keys(data).length === tables.length) {
              res.send(data);
            }
          });
        });
      });
}

module.exports = {
    data
}