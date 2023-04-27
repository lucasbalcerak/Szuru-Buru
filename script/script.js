$(window).resize(function(){location.reload();})

$(document).ready(function () { 
    // Hamburger menu
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

 $(document).scroll(function (){
    // Scroll-up icon
    var ikonScrollUp = $('#ikonScrollUp')
    var view = $('#first-section').height();
    var y = window.scrollY;

    if ( y > view) {
        ikonScrollUp.css("opacity", "1");
    } else {
        ikonScrollUp.css("opacity", "0");
    }

 })