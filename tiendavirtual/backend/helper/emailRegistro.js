//Aceder el sitio web: Importacion de la dependencia instalada nodemailer:
import nodemailer from 'nodemailer';

//Configuracion del envio del mensaje:
const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            //type: "OAuth2",
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        
        }  
        
    });
    //En base a estos campos del Esquema modelo Usuario.js
    const {email, nombre, token} = datos;
    
    //Se Envia el email:
    const info = await transport.sendMail({
        from: "AEC - Administrador de AgileMarket articulos",
        to: email,
        subject: 'Comprueba tu cuenta en AEC',
        text: 'Comprueba tu cuenta en AEC',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en AEC.</p>
        <p> Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>
        <p> Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`

    });
};
//Exportacion por defecto emailRegistro
export default emailRegistro;