// mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "lautarodron@gmail.com",
    pass: "rffpyenwxaorehzi",
  },
});

function enviarCorreo(destinatario, asunto, mensaje) {
  const mailOptions = {
    from: "lautarodron@gmail.com", // Cambiar por tu cuenta de correo
    to: destinatario,
    subject: asunto,
    text: mensaje,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
}

module.exports = enviarCorreo;
