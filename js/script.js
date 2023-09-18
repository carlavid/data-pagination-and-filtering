/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// ELEMENT SELECTORS
// Access ul w/ student-list class
const studentList = document.querySelector(".page").children[1];
// Access ul within pagination div
const paginationList = document.querySelector(".pagination").firstElementChild;
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(array, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage) - 1;
   studentList.textContent = "";

   for (let i = 0; i < array.length; i++) {
      if (i >= start && i <= end) {
         const html = `
            <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${array[i].picture.large} alt="Profile Picture">
               <h3>${array[i].name.first} ${array[i].name.last}</h3>
               <span class="email">${array[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${array[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML("beforeend", html);
      }
   }
}
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
