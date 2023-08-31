//make the header stick to the top whlie scrolling
let header = document.querySelector('header');
//menu bar
let menu = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navBar");
let boxs = document.querySelectorAll(".box");

let contactMe = document.querySelector(".contactMe");


//if the munu bar is open navBar will be Active and bx-x will be add to the menu div
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY)
});
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};

//while scrolling the navBar active class will be removed and bx-x will be removwd 
window.onscroll = () => {
    menu.classList.remove("bx-x")
    navBar.classList.remove("active");
};

boxs.forEach((e) =>{
   e.onclick = () => {
       e.style.background = "var(--text-color)";
       e.style.color = 'var(--bg-color)';
       e.style.transition = "all .30s ease";
       
   } 
});
const contact = document.querySelector(".btn");
const overlay = document.querySelector("#overlay");

contact.addEventListener('click',() =>{
    overlay.style.display= "block";
});
const xBtn = document.querySelector("#xBtn");
xBtn.addEventListener("click",() =>{
    overlay.style.display = "none";
});
