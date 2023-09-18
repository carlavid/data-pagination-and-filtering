/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage);
   // Access ul w/ student-list class
   const studentList = document.querySelector(".student-list");
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
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / studentsPerPage);
   const linkList = document.querySelector(".link-list");
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

      if (buttonClicked) {
         activeButton.classList.remove("active");
         buttonClicked.classList.add("active");
         showPage(data, buttonClicked.innerHTML);
      }
   })
}


// Call functions
showPage(data, 1);
addPagination(data);

