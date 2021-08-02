const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function registroAdmin(req, res) {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const nuevoAdmin = new Admin({
      username: req.body.username,
      password: hash,
    });

    nuevoAdmin
      .save()
      .then((result) => {
        res.status(201).json({
          message: "usuario creado",
          result: result,
        });
      })
      .catch((err) => {
        console.log(result);
        res.status(500).json({ error: err });
      });
  });
}

function loginAdmin(req, res) {
  let adminGet;
  Admin.findOne({ username: req.body.username })
    .then((admin) => {
      if (admin == null) {
        return res
          .status(401)
          .json({ message: "Autenticación fallida. Revise username" });
      }
      adminGet = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res
          .status(401)
          .json({ message: "Autenticación fallida. Revise password" });
      }

      const token = jwt.sign(
        { username: adminGet.username, adminId: adminGet._id },
        "MisionTic2021_secret_for_iCakeApp_admin",
        { expiresIn: "1h" }
      );

      res
        .status(200)
        .json({ token: token, expiresIn: 3600, adminId: adminGet._id });
    })
    .catch((err) => {
      return res.status(401).json({ message: "Autenticación fallida" });
    });
}

module.exports = {
  loginAdmin,
  registroAdmin,
};
