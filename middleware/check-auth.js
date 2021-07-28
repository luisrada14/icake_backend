const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "MisionTic2021_secret_for_iCakeApp");
    req.userData = { _id: decodedToken._id };
    next();
  } catch (error) {
    res.status(401).json({ message: "Autenticación fallida" });
  }
};
