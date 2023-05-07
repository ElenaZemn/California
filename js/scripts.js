$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        // autoplay:true,
        // autoplayTimeout: 0,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
})

// // Dropdown Menu
// var dropdown = document.querySelectorAll('.dropdown');
// var dropdownArray = Array.prototype.slice.call(dropdown,0);
// dropdownArray.forEach(function(el){
//     var button = el.querySelector('a[data-toggle="dropdown"]'),
//         menu = el.querySelector('.dropdown-menu'),
//         arrow = button.querySelector('i.icon-arrow');
//
//     button.onclick = function(event) {
//         if(!menu.hasClass('show')) {
//             menu.classList.add('show');
//             menu.classList.remove('hide');
//             arrow.classList.add('open');
//             arrow.classList.remove('close');
//             event.preventDefault();
//         }
//         else {
//             menu.classList.remove('show');
//             menu.classList.add('hide');
//             arrow.classList.remove('open');
//             arrow.classList.add('close');
//             event.preventDefault();
//         }
//     };
// })
//
// Element.prototype.hasClass = function(className) {
//     return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
// };


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})