//reference on moongoose schemas: https://mongoosejs.com/docs/guide.html

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BuildingSchema = new Schema({
  building_code: { type: String, required: true },
  address: { type: String, required: true },
  building_name: String,
});


var Building = mongoose.model("building", BuildingSchema);

module.exports = Building;
