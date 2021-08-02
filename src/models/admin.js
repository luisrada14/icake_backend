var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AdminSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
