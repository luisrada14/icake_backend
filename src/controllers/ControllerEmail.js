const nodemailer = require("nodemailer");

function enviarEmail(req, res) {
  //nombre,email,celular,mensaje
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "icakecontact@gmail.com",
      pass: "icake123",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "icakecontact@gmail.com",
    subject: `Mensaje de ${req.body.nombre}. Contactar a ${req.body.celular}`,
    text: req.body.mensaje,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
}

module.exports = enviarEmail;
