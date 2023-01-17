const { response } = require('express');
const conexion = require('../db/conexion');
const bcrypt = require('bcrypt');

// LOGIN
const loginUsuario = (req, res) => { 

  const username = req.body.username;
  const userProvidedPassword = req.body.password; 

  try {
    conexion.query(
      'SELECT username, password FROM Usuarios WHERE username = ?',
      [username],
      function (error, results, fields) {
        if (error) throw error;
        // Si no se encontró ningún usuario con ese nombre, podemos finalizar aquí
        if (results.length === 0) {
          res.send('Error: usuario o contraseña incorrectos');
          return;
        }
        // Si se encontró un usuario, comparamos la contraseña proporcionada con la hasheada
        const hashedPassword = results[0].password;

        bcrypt.compare(userProvidedPassword, hashedPassword, function (err, passwordIsCorrect) {
          console.log(passwordIsCorrect);

          if (passwordIsCorrect) {
            // Si el resultado es true, entonces la contraseña proporcionada es correcta
            // res.send('Inicio de sesión exitoso');
            let sql = `select * from Usuarios where username = '${username}'`;
            conexion.query(sql, (err, rows, fields) => {
              // console.log(conexion.query);
              if (err) throw err;
              else {
                return res.json(rows[0]);
              }
            });
            // Código para iniciar sesión va aquí
          } else {
            res.send('Error: usuario o contraseña incorrectos');
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });
  }
}







const register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Hasheamos la contraseña proporcionada por el usuario
  bcrypt.hash(password, 10, function (err, hashedPassword) {
    // Insertamos el usuario y la contraseña hasheada en la base de datos
    conexion.query(
      'INSERT INTO Usuarios (username, password) VALUES (?, ?)',
      [username, hashedPassword],
      function (error, results, fields) {
        if (error) throw error;
        res.send('Registro completado');
        // Código para manejar el resultado de la inserción va aquí
      }
    );
  });
}

module.exports = {
  loginUsuario,
  // register
}