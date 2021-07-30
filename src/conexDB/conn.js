const mongoose = require("mongoose");

var MONGODB_URI =
  process.env.MONGODB_URL ||
  "mongodb+srv://icake:icake2021@icakecluster.vzkdm.mongodb.net/icakedb?retryWrites=true&w=majority";

mongoose.connect(
  // "mongodb+srv://icakecluster.vzkdm.mongodb.net/icakedb",
  // "mongodb://localhost:27017/icakedb",
  // "mongodb+srv://icake:icake2021@icakecluster.vzkdm.mongodb.net/icakedb?retryWrites=true&w=majority",
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    family: 4,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("conexion DB exitosa");
      // console.log("response is", res);
    }
  }
);

module.exports = mongoose;
