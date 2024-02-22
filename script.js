//This will grey out the image(s) when you mouseover
var ovrImg = elem => elem.style.filter = "grayscale(1)";
//This will restore color on the image(s) when you mouseleave
var outImg = elem => elem.style.filter = "grayscale(0)";

//Function to make particles
function snowBlower() {

    //defines the container where the snow will fall from
    var snowBlower = $('#snowBlower');

    function createSnow() {

        //creates a div for the "snow" and randomly defines its sizes and opacity
        var snow = $('<div class="snow"></div>').css({
            top: '0px',
            left: Math.random() * $(window).width(),
            opacity: Math.random(),
            transform: 'scale(' + (Math.random() * 0.5 + 0.5) + ')'
        });

        //inserts "snow" into the snowBlower div
        snowBlower.append(snow);

        //animate the snow so that the "snow" fades out as it falls down the page. then this.remove removes them.
        snow.animate({
            top: $(window).height() + 'px',
            left: '+=' + (Math.random() * 200 - 100) + 'px',
            opacity: 0
        }, Math.random() * 3000 + 2000, function() {
            $(this).remove();
        });
    }

    //an interval for the snow to be generated at, preventing the screen from flooding with "snow"
    setInterval(createSnow, 100);
}

$(document).ready(function() {
    //.fadeIn will fade the element in from display:none
    //.css will set the element to a grid

    $('header').fadeIn(500);
    $('header').css('display', 'grid');

    $('main').fadeIn(500);
    $('main').css('display', 'grid');

    $('footer').fadeIn(500);

    snowBlower();
})