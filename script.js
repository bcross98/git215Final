//This is a really quick and easy way to grayscale images, I learned this from a professor I had at another college when I was still dabbling in the idea of pursuing a degree in the CS field.
var ovrImg = elem => elem.style.filter = "grayscale(1)";
var outImg = elem => elem.style.filter = "grayscale(0)";

//This function creates a div with the id of snowblower, appends it to the body (doesn't matter where, I defined the "snow" in a separate function), then set a 10 second timeout before fading the snowBlower div out and removing it.
function makeSnowBlowerDiv() {
    var blowerDiv = $("<div id='snowBlower'></div>");

    blowerDiv.appendTo("body");
    
    snowBlower();

    setTimeout(function(){
        $('#snowBlower').fadeOut(2000, function(){
            $('#snowBlower').remove();
        })
    }, 10000);
}

//This function creates the "snow". I start with assigning a variable "snowBlower" to a div with the id of snowBlower (created in the function above). Then in the function "createSnow" I assigned a variable named "snow" a new div with the class of "snow". I use the .css function to alter the properties of the "snow". Top is 0 because I want it to start at the top of the page. Left is math.random() which generates a number between 0-1, multiplied by the width of the window to make the "snow" spread the width of the window at random intervals. Opacity is math.random, which is any number between 0-1 (opaque or not). Transform uses the scale property to change the size of the "snow", I'm using math.random() here too, but I set the scale to be between 0-0.5 with the "* 5" and add another 0.5 to it, bringing the scale to between 0.5-1. I use the append function to add it to the snowBlower variable I defined earlier, then I animate it. The animate function is what makes the "snow" look like it's falling, I defined the top and left here to set the endpoint of the snow (with more math.random()). the final Math.random() is to define the amount of time the snow is visible before it's removed by $(this).remove. To finish the whole function I set the snow to fall at an interval of every 100ms.
//
//The .snow css styling: 
//.snow {
//    position: absolute;
//    background-color: white;
//    width: 10px;
//    height: 10px;
//    border-radius: 50%;
//}

function snowBlower() {

    var snowBlower = $('#snowBlower');

    function createSnow() {

        var snow = $('<div class="snow"></div>').css({
            top: '0px',
            left: Math.random() * $(window).width(),
            opacity: Math.random(),
            transform: 'scale(' + (Math.random() * 0.5 + 0.5) + ')'
        });

        snowBlower.append(snow);

        snow.animate({
            top: $(window).height() + 'px',
            left: '+=' + (Math.random() * 200 - 100) + 'px',
            opacity: 0
        }, Math.random() * 3000 + 2000, function() {
            $(this).remove();
        });
    }

    setInterval(createSnow, 100);
}

//this function runs on page load. Here I have fadeIn functions to make the page load nicely, I did have to manually set the css function to display a grid otherwise the default is block. The last thing I have in here is the makeSnowBlowerDiv(); function call to start the snow.
$(document).ready(function() {

    $('header').fadeIn(500);
    $('header').css('display', 'grid');

    $('main').fadeIn(500);
    $('main').css('display', 'grid');

    $('footer').fadeIn(500);

    makeSnowBlowerDiv();

});