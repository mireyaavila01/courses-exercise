"use strict"


const courseTableBody = document.getElementById("courseTableBody");
const courseBaseUrl = "http://localhost:8081/api/courses"


window.onload = function(){
getCourseInfo();
}

function getCourseInfo(){

    fetch(courseBaseUrl)
    .then(response => response.json())
    .then( data => {
        data.forEach(course => {
            let row = courseTableBody.insertRow(-1);

            let cell1 = row.insertCell(0);
            cell1.innerHTML = course.dept;

            let cell2 = row.insertCell(1);
            cell2.innerHTML = course.courseNum;

            let cell3 = row.insertCell(2);
            cell3.innerHTML = course.courseName;

            let cell4 = row.insertCell(3);
            let anchor = document.createElement("a")
            anchor.href =`http://localhost:8081/details.html?courseid=${course.id}`;
            anchor.text = "Show Details"; 
            cell4.appendChild(anchor);
        });
        
    })

}