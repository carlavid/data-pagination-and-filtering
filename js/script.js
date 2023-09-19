/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Global constants 
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");
const header = document.querySelector(".header");
const studentsPerPage = 9;


/**
 * Function will create and insert/append the elements needed to display a "page" of nine students
 * @param {list} - the array of student objects 
 * @param {number} - the requested page number
 */
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage);
   // Access ul w/ student-list class
   studentList.innerHTML = "";

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
         studentList.insertAdjacentHTML("beforeend", html);
      }
   }
};


/**
 * Function will create and insert/append the elements needed for the pagination buttons
 * @param {list} - the array of student objects 
 */
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / studentsPerPage);
   linkList.innerHTML = "";

   for (let i = 1; i <= numberOfButtons; i++) {
      const html = `
         <li>
            <button>${i}</button>
         </li>`;
      linkList.insertAdjacentHTML("beforeend", html);
   }
   linkList.querySelector("button").classList.add("active");

   linkList.addEventListener("click", (e) => {
      const activeButton = linkList.querySelector(".active");
      const buttonClicked = e.target.closest("button");

      if (activeButton && buttonClicked) {
         activeButton.classList.remove("active");
      }
      if (buttonClicked) {
         buttonClicked.classList.add("active");
         showPage(data, buttonClicked.innerHTML);
      }
   })
};


// Call functions
showPage(data, 1);
addPagination(data);


// Create and add search bar in header
const searchForm = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>`;

header.insertAdjacentHTML("beforeend", searchForm);


// Add search functionality & pagination for search results
const studentSearch = document.querySelector("#search");
studentSearch.addEventListener("keyup", () => {
   const newData = [];
   const userInput = studentSearch.value.toLowerCase();

   for (let i = 0; i < data.length; i++) {
      const studentName = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;

      if (studentName.includes(userInput)) {
         newData.push(data[i]);
      }
   }
   
   if (newData.length > 0) {
      addPagination(newData);
      showPage(newData, 1);
   } else {
      const html = "<h3>No Results Found...</h3>";
      studentList.innerHTML = html;
      linkList.innerHTML = "";
   }
});