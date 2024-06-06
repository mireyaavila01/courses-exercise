"use strict"


const courseDetailsTableBody = document.getElementById("courseDetailsTableBody");

window.onload = function (){

const urlParams = new URLSearchParams(location.search);
let id = -1;
if (urlParams.has("courseid")){
   id = urlParams.get("courseid");
   getDetails(id);
}


};



function getDetails(courseid){

const detailUrl = `http://localhost:8081/api/courses/${courseid}`;


    fetch(detailUrl)
    .then(response => response.json())
    .then( course => {
        
            let row = courseDetailsTableBody.insertRow(-1);

            let cell1 = row.insertCell(0);
            cell1.innerHTML = course.courseName;

            let cell2 = row.insertCell(1);
            cell2.innerHTML = course.instructor;

            let cell3 = row.insertCell(2);
            cell3.innerHTML = course.startDate;

            let cell4 = row.insertCell(3);
            cell4.innerHTML = course.numDays;

        });


}
