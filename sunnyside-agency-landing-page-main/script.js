const hamburgerMenu = document.getElementById("hamburger");
const mobilNav = document.getElementById("mobile-nav");
const arrow = document.getElementById("arrow");
const mobileNav = document.querySelector(".mobile-nav");


hamburgerMenu.addEventListener("click", (e) => {
  mobilNav.style.display = mobilNav.style.display == "none" ? "block" : "none";
  arrow.style.display = mobilNav.style.display == "block" ? "none" : "block";
  
})

mobilNav.addEventListener("click", (e) => {
 
 console.log(e.target);
 
  if(e.target.tagName == "A"){
    mobilNav.style.display = "none";
  }
})