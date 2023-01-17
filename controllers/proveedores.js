const { response } = require('express');
const conexion = require('../db/conexion');
const multer = require('multer');

// All Doctors
const getAllProveedores = (req, res) => {
    try {
        let sql = `SELECT p.idProveedores, p.empresa, p.proveedor, p.categoria, p.rfc, p.telefono FROM Proveedores p`;
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
const addProveedor = (req, res) => {
    const { empresa, proveedor, categoria, rfc, telefono } = req.body
    try {
        let sql = `INSERT INTO Proveedores (empresa,proveedor,categoria,rfc,telefono) 
                values  ('${empresa}', '${proveedor}', '${categoria}', '${rfc}', '${telefono}' )`;

        conexion.query(sql, (err, rows, field) => {
            if (err) throw err
            else {
                res.json({ status: 'Proveedor agregado' });
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
const updateProveedores = (req, res) => {
    const { id } = req.params;
    const { empresa, proveedor, categoria, rfc, telefono, idProveedor } = req.body;
    try {
        let sql = `update Proveedores set empresa = '${empresa}',
                    proveedor = '${proveedor}',
                    categoria = '${categoria}',
                    rfc = '${rfc}',
                    telefono = '${telefono}' 
                    where idProveedores = '${idProveedor}'`;

        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Proveedor Modificado' });
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
const deleteProveedores = (req, res) => {
    const { id } = req.params;
    try {
        let sql = `delete from Proveedores where idProveedores = '${id}'`;
        conexion.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                res.json({ status: 'Proveedor Eliminado' });
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

// EXPORTS.
module.exports = {
    getAllProveedores,
    addProveedor,
    deleteProveedores,
    updateProveedores,

}