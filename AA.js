//active menu-icon

let menuIcon = document.querySelector(".menu-icon");
//open and close navbar

let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click",() =>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
    
});





//navlist color change while we scroll


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Change the scroll position threshold as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//button switch in about section

const buttons = document.querySelectorAll('.about-btn button');
const contents =document.querySelectorAll(".content");

buttons.forEach((button, index)=>{
    button.addEventListener("click",() =>{
        contents.forEach(content => content.style.display = "none");
        contents[index].style.display = "block";
        buttons.forEach(btn => btn.classList.remove("active"));
        buttons.classList.add("active");
    })
})

//fillter for js effect

var mixer = mixitup('.port-gallary');

//for progressing bar in skills section


// script.js
window.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach((progressBar) => {
      const progress = progressBar.querySelector('.progress');
      const percentage = progressBar.querySelector('.percentage');
      const width = progressBar.dataset.percent;
      let currentWidth = 0;
  
      const animationInterval = setInterval(() => {
        if (currentWidth >= width) {
          clearInterval(animationInterval);
        } else {
          currentWidth++;
          progress.style.width = currentWidth + '%';
          percentage.textContent = currentWidth + '%';
        }
      }, 15); 
    });
  });
  
  
  

