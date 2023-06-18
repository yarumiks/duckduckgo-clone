const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector("#open-menu-btn");
const CloseBtn = document.querySelector("#close-menu-btn");

const closeNav = () => {
    menu.style.opacity = "0";
    menu.classList.remove("active");
    CloseBtn.style.display = "none";
    openBtn.style.display = "inline-block";  
 }
 
 CloseBtn.addEventListener('click', closeNav)

  

 const openNav = () => {
    menu.style.opacity = "1";
    menu.classList.add("active");
    CloseBtn.style.display = "inline-block";
    openBtn.style.display = "none";  
    
 }

 openBtn.addEventListener('click', openNav)


const scrollZero = () =>{
   window.scrollTo({
      top:0,
      behavior: "smooth"
   })
}