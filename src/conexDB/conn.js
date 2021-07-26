const mongoose = require("mongoose");

mongoose.connect(
  // "mongodb+srv://icakecluster.vzkdm.mongodb.net/icakedb",
  "mongodb://localhost:27017/icakedb",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
