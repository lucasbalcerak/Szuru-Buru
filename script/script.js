$(document).ready(function() {
    
    if($(window).width() < 576)
    {
        $('.links').addClass('none');
        $('.logo-footer').addClass('display-none');

        $('#ewadiv').css('height', 'auto');
        $('#lukaszdiv').css('height', 'auto');
    } else {
        $('.links').removeClass('none');
        $('.logo-footer').removeClass('display-none');

        var lukaszDiv = $('#lukaszdiv').height();
        var ewaDiv = $('#ewadiv').height();

        if(lukaszDiv > ewaDiv){
            $('#ewadiv').css('height', lukaszDiv + 'px');
        }
        else {
            $('#lukaszdiv').css('height', ewaDiv + "px");
        }
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
