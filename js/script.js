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
 * @param {array} list - the array of student objects 
 * @param {number} page - the requested page number
 */
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage);
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
 * @param {array} list - the array of student objects 
 */
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / studentsPerPage);
   linkList.innerHTML = "";

   for (let i = 1; i <= numOfPages; i++) {
      const html = `
         <li>
            <button type="button">${i}</button>
         </li>`;
      linkList.insertAdjacentHTML("beforeend", html);
   }
   linkList.querySelector("button").className = "active";

   /**
    * Event listener that handles click event on "link-list" element
    * @param {event} e - click event object
    */
   linkList.addEventListener("click", (e) => {
      const activeButton = linkList.querySelector(".active");
      const buttonClicked = e.target.closest("button");

      if (buttonClicked) {
         activeButton.classList.remove("active");
         buttonClicked.classList.add("active");
         showPage(list, buttonClicked.innerHTML);
      }
   })
};


// Create and add search bar in header
const searchForm = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>`;

header.insertAdjacentHTML("beforeend", searchForm);


const studentSearch = document.querySelector("#search");
/**
 * Event listener that handles search input and filters
 * list in real-time as user types
 */
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
      showPage(newData, 1);
      addPagination(newData);
   } else {
      const html = "<h3>No Results Found...</h3>";
      studentList.innerHTML = html;
      linkList.innerHTML = "";
   }
});

// Call functions
showPage(data, 1);
addPagination(data);
