$(window).resize(function(){location.reload();})

$(document).ready(function () { 

    var hamburgerMenu = $('#hamburger-menu');
    var menuLinks = $('.links');
    var counter = 1;

    hamburgerMenu.click(function (e) { 
        e.preventDefault();
        if(counter % 2 != 0){
            menuLinks.css('width', '200px');
            counter++;
        } else {
            menuLinks.css('width', '0px');
            counter++;
        }
    });

 })