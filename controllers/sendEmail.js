const {request, response} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request,resp=response) =>{

    const body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        
        secureConnection: false,
        auth:{
            user: 'estebanguzman970@gmail.com',
            pass: 'bolobania9'
        }
    });

    const opciones = {
        from: 'Dra Lizeth Luna',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    }

    config.sendMail(opciones, function(error, resultado){

        if (error) return resp.json({ok:false, msg:error})
        return resp.json({
            ok:true,
            msg:resultado
        })
    })
}

module.exports = {
    envioCorreo
}