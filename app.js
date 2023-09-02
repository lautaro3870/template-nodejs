const express = require("express");
const enviarCorreo = require("./mailer");
const cron = require("node-cron");

const cors = require("cors");
const app = express();

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT ?? 3000;

app.use(express.static("public"));

cron.schedule("12 12 * * *", () => {
  console.log("Envio programado");
  const destinatario = "lautarodisbro@gmail.com"; // Cambiar por el correo del destinatario
  const asunto = "Correo automático semanal";
  const mensaje = "desde la nube";
  enviarCorreo(destinatario, asunto, mensaje);
});

app.get("/envioMail", function (req, res) {
  res.send("Hello World");
  const destinatario = "lautarodisbro@gmail.com"; // Cambiar por el correo del destinatario
  const asunto = "Correo automático semanal";
  const mensaje =
    "Este es un correo automático que se envía una vez a la semana.";
  enviarCorreo(destinatario, asunto, mensaje);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
