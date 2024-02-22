//This will grey out the image(s) when you mouseover
var ovrImg = elem => elem.style.filter = "grayscale(1)";
//This will restore color on the image(s) when you mouseleave
var outImg = elem => elem.style.filter = "grayscale(0)";

$(document).ready(function() {
    //.fadeIn will fade the element in from display:none
    //.css will set the element to a grid

    $('header').fadeIn(500);
    $('header').css('display', 'grid');

    $('main').fadeIn(500);
    $('main').css('display', 'grid');

    $('footer').fadeIn(500);
})