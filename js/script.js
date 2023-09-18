/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// ELEMENT SELECTORS
// Access ul within pagination div
const paginationList = document.querySelector(".pagination").firstElementChild;
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage);
   // Access ul w/ student-list class
   const ul = document.querySelector(".student-list");
   ul.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i < end) {
         const html = `
            <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;
         ul.insertAdjacentHTML("beforeend", html);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


// Call functions
showPage(data, 1);

