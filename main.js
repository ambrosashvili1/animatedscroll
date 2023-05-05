
//sticky header  


// window.onscroll = function() {myFunction()};


// var header = document.getElementById("myHeader");


// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }




// scroll pos


// const button = document.getElementById('slide');

// button.onclick = () => {
//   document.getElementById('container').scrollLeft += 20;
// };




//  progress scroll
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }






// scroll animation

const boxes = document.
querySelectorAll('.box');

window.addEventListener('scroll',
checkBoxes);

checkBoxes ();

function checkBoxes() {
const triggerBottom = window.
innerHeight / 5 * 4;

boxes.forEach((box) => {
const boxTop = box.
getBoundingClientRect().top;

if (boxTop < triggerBottom) {
    box.classList.add('show');
} else {
    box.classList.remove('show');
}

});

}
