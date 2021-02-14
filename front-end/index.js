

/*
@description: Gets user location using geolocation API
*/ 
var getLocation = ()=> {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 

}
function showPosition(position) {

  lat =position.coords.latitude;
    lon = position.coords.longitude;
}


/* 
@descp: handles submit form and returns street address from given course name and section
*/

async function addressByCourse(course_name,section) {
  let params = `/courseAddress/:${course_name}/:${section}`;
  var addresses = await getAddress(params);
}

/*

@desc: handles submit form and returns street address from given buidling code
*/
async function addressByBuilding(buildingCode){

let params = `/buildingAddress/:${buildingCode}`;
var addresses = await getAddress(params);

}

/* 
@descp: method does an http request for address with given parameters from local host server. Server returns an array of
available address.
*/
async function  getAddress (params){

fetch(`https://localhost:3000/${params}`).then((res)=> res.json()).then((data)=> {return data}).catch((err)=>console.log(err))


}


