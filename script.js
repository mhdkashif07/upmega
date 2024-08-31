const navbar = document.querySelectorAll(".navbar-collapse a");
const dropdownIcon = document.querySelector(".dropdown");
const logo = document.querySelector(".logo");
const logob = document.querySelector(".logo-b");
const icons = document.querySelectorAll(".social-icons img");
const toggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".navbar-drop-down");

console.log(logo, logob);

dropdownIcon.addEventListener("mouseenter", () => {
  dropdown.classList.remove("hide");

  logo.classList.toggle("hide");
  logob.classList.toggle("hide");

  navbar.forEach((item) => {
    console.log(item.innerHTML);

    item.classList.toggle("black");
    item.style.fontWeight = "600";
    if (
      item.innerHTML == "Home" ||
      item.innerHTML == "About" ||
      item.innerHTML == "Contact"
    ) {
      item.addEventListener("mouseenter", () => {
        dropdown.classList.add("hide");
      });
    }
  });

  icons.forEach((item) => {
    // item.addEventListener('')
    item.classList.toggle("filter-icons");
    dropdown.classList.remove("hide");
  });
});

console.log(dropdown, "dropdddd");

dropdown.addEventListener("mouseleave", () => {
  console.log("leaved");
  dropdown.classList.add("hide");
  // navbar.forEach((item) => {
  //   item.classList.remove("black");
  //   item.style.fontWeight = "";
  // });
});

// dropdownIcon.addEventListener("mouseleave", () => {
//   console.log("leaved");
//   dropdown.classList.add("hide");
//   // navbar.forEach((item) => {
//   //   item.classList.remove("black");
//   //   item.style.fontWeight = "";
//   // });
// });
