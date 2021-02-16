//reference on moongoose schemas: https://mongoosejs.com/docs/guide.html
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  course_name: { type: String, required: true },
  course_section: String,
  address: { type: String, required: true },
  day: String,
  start_time: String,
  end_time: String,
});



var Course = mongoose.model("course", CourseSchema);

module.exports = Course;

