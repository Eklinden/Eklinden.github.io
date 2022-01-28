
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
    path.style.strokeDashoffset = pathlength - drawLength;


})