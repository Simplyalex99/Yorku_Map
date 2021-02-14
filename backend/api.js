const db = require('./database.js');
const express = require('express');
const router = express.Router();



router.route('/courseAddress/:course/:section').get(async (req,res)=> {


/* db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
 */


let course_name = req.params.course;
let course_section = req.params.section;
let data = {course_name:course_name,course_section:course_section};
let sql = `SELECT address FROM Course WHERE course_name = ? and course_section = ?`;

db.query(sql,data).then( rows=>{

return [rows];



})})




router.route("/buildingAddress/:id").get(async (req, res) => {


  let building_code = req.params.id;
  let data = { buidling_code: buidling_code: building_code };
  let sql = `SELECT address FROM Building WHERE building_code = ?`;

  db.query(sql, data).then((rows) => {
    return [rows];
  }).catch(err =>{ console.log(err)});
});








module.exports = router;