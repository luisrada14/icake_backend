var app = require("./app");
var mongoose = require("./src/conexDB/conn");

//el link es localhost:4000/

app.listen(process.env.PORT || 5000, () => {
  console.log("servidor corriendo");
});
