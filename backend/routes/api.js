
const express = require('express');
const router = express.Router();

/*MongoDB Schemas*/ 
const Course = require('../models/Course.js'); 
const Building = require('../models/Building.js');


/* 
@route:POST /addCourse
@desc: Adds a new course , its address  and other fields for specificiations.
*/

router.route('/addCourse').post(async (req,res)=> {


const newCourse = new Course({
   course_name: req.body.course_name,
  course_section: req.body.course_section,
  address: req.body.address,
  day: req.body.day,
  start_time: req.body.start_time,
  end_time:req.body.end_time
})

newCourse.save().then( course=>res.json(course)).catch(err=>console.log(err));

})

/* 
@route: POST /addBuilding
@desc: Adds a new building and it's addresses and code
*/

router.route('/addBuilding').post(async (req,res)=> {
  const newBuilding = new Building({

 building_code: req.body.code,
  address: req.body.addresss,
  building_name: req.body.name,

  })


  newBuilding.save((err,building)=>{

if(err) return console.log(err);
return res.json(building)

})

}
)
/* 
@route: GET /course/:course
@desc: returns an  array of  available addresses  of a given course
*/
router.route('/course/:course').get(async (req,res)=> {

let course_name = req.params.course;
let addresses = [];

params = {course_name:course_name};


await Course.find(params).exec((err, courses) => {
  if (err) return console.log(err);

  courses.forEach((course) => {
    addresses.push(course.address);
  });
});

return addresses;



}
)
/* 
@route:GET /course/:course/:section
@desc: returns an  array of available addresses  of a given course and course section
*/

router.route('/course/:course/:section').get(async (req,res)=> {

let course_name = req.params.course;
let course_section = req.params.section;

let addresses = [];

let params = {course_name:course_name, course_section:course_section}

await Course.find(params).exec((err, courses) => {
  if (err) return console.log(err);

  courses.forEach((course) => {
    addresses.push(course.address);
  });
});

 return addresses;

}
)



/* 
@route:GET /building/:id
@desc: returns an  array of available addresses of a given building code.
*/


router.route("/building/:id").get(async (req, res) => {

let addresses = [];
  let building_code = req.params.id;
  let params  = { buidling_code: building_code };

await Building.find(params).exec((err, buildings) => {
  if (err) return console.log(err);

  buildings.forEach((building) => {
    addresses.push(building.address);
  });
});
  return  addresses;

});


/* 
@route: DELETE /removeBuilding/:building_code
@desc: deletes tuple from database and returns a copy of removed building 
*/
router.route("/removeBuilding/:building_code").delete(async (req, res)=>{


Building.find({buidling_code:req.params.building}).remove().then( building=> res.json(building)).catch( err=> console.log(err));



})

/* 
@route: DELETE /removeCourse/:course
@desc: deletes tuple from database and returns a copy of removed course
*/
router.route("/removeCourse/:course").delete(async (req, res) => {
  Course.find({ course_code: req.params.course }).remove().then( course=> res.json(course)).catch( err=> console.log(err));
});

/* 
@route: DELETE /removeCourse/:course/:section
@desc: deletes tuple from database and returns a copy of removed course
*/
router.route("/removeCourse/:course/:section").delete(async (req, res) => {
  Course.find({ course_code: req.params.course ,course_section:req.params.section}).remove().then( course=> res.json(course)).catch( err=> console.log(err));
});







module.exports = router;