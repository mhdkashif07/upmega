const navbar = document.querySelectorAll(".navbar-collapse a");
const dropdownIcon = document.querySelector(".dropdown");
const logo = document.querySelector(".logo");
const logob = document.querySelector(".logo-b");
const icons = document.querySelectorAll(".social-icons img");
const toggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".navbar-drop-down");

const navbarDefaultColor = () => {
  logo.classList.remove("hide");
  logob.classList.add("hide");
  navbar.forEach((el) => {
    el.style.color = "white";
    el.classList.remove("black");
  });
  icons.forEach((item) => {
    item.classList.remove("filter-icons");

    // // item.addEventListener('')
    // item.classList.toggle("filter-icons");
    // dropdown.classList.add("hide");
  });
};

navbarDefaultColor();

dropdownIcon.addEventListener("mouseenter", () => {
  dropdown.classList.remove("hide");
  logo.classList.add("hide");
  logob.classList.remove("hide");

  navbar.forEach((item) => {
    item.classList.add("black");
    item.style.fontWeight = "600";
    if (
      item.innerHTML == "Home" ||
      item.innerHTML == "About" ||
      item.innerHTML == "Contact"
    ) {
      item.addEventListener("mouseenter", () => {
        const el = navbarDefaultColor();
        dropdown.classList.add("hide");
        // item.style.color = "white";
        // item.classList.remove("black");
      });
    }
  });

  icons.forEach((item) => {
    // item.addEventListener('')
    item.classList.add("filter-icons");
    dropdown.classList.remove("hide");
  });
});

dropdown.addEventListener("mouseleave", () => {
  logob.classList.add("hide");
  logo.classList.remove("hide");

  dropdown.classList.add("hide");
  navbar.forEach((item) => {
    item.classList.remove("black");
    item.style.color = "white";
  });
  icons.forEach((item) => {
    // item.addEventListener('')
    item.classList.remove("filter-icons");
  });
});

// dropdownIcon.addEventListener("mouseleave", () => {
//   console.log("leaved");
//   dropdown.classList.add("hide");
//   // navbar.forEach((item) => {
//   //   item.classList.remove("black");
//   //   item.style.fontWeight = "";
//   // });
// });
