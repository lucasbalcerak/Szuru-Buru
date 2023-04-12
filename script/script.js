$(document).ready(function() {
    var lukaszDiv = $('#lukaszdiv').height();
    var ewaDiv = $('#ewadiv').height();

    if(lukaszDiv > ewaDiv){
        $('#ewadiv').css('height', lukaszDiv + 'px');
    }
    else {
        $('#lukaszdiv').css('height', ewaDiv + "px");
        }
    
    if($(window).width() < 576)
    {
        $('.links').addClass('none');
    } else {
        $('.links').removeClass('none');
    }

    $('#hamburger-menu').on('click', function(){
        $('.links').removeClass('nav-out');
        $('.links').removeClass('none');
        setTimeout(function() {
            $('.links').addClass('nav-in');  
        }, 100)
    }) 

    $('#hamburger-menu-close').on('click', function(){
        $('.links').removeClass('nav-in');
        $('.links').addClass('nav-out');
        setTimeout(function() {
            $('.links').addClass('none');  
        }, 1000)
    })
});
