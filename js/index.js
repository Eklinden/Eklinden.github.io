
let path = document.querySelector('path');
let pathlength = path.getTotalLength();

path.style.strokeDasharray = pathlength + ' ' + pathlength;

path.style.strokeDashoffset = pathlength;

window.addEventListener('scroll', () => {

    // what % down is it?
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Leanth to offset the dashes
    let drawLength = pathlength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathlength - drawLength - 50;


})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);