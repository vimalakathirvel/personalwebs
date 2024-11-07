let mobileMenu=document.querySelector(".mobile-menu");
let hamBurgur=document.querySelector(".header-burgur");
let displaySize=window.innerWidth;
let hamBurgur.addEventListener("click",showMenu);
let fMain=document.querySelector(".main-1");
let mobibleMenuContent=document.querySelectorAll(".header-menu");
function showMenu(){
    mobileMenu.classList.toggle("d-none");
    mobileMenu.classList.toggle("slider-menu");
}
let images=['img/background/download.jpg','img/background/img2','img/background/img3'];
let red="red"
let i=0;
if(displaySize>903){
    fMain.style.backgroundImage=`url(${images[i]})`
fMain.style.backgroundSize ="cover";
    setInterval(()=>{
        fMain.style.backgroundImage = `url(${images[i]})`;
        fMain.style.backgroundSize ="cover"; 
        i=(i+1)%images.length 
    } ,3000
    )
}
else if(displaySize<=903){
    fMain.style.backgroundImage=`url(${images[i]})`
fMain.style.backgroundSize ="cover";
fMain.style.backgroundPosition="right";
    setInterval(()=>{
        fMain.style.backgroundImage = `url(${images[i]})`;
        fMain.style.backgroundSize ="cover"; 
        fMain.style.backgroundPosition="right";
        i=(i+1)%images.length 
    } ,3000
    )
}
console.log(displaySize)