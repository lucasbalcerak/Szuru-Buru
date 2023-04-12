$(document).ready(function() {
    var lukaszDiv = $('#lukaszdiv').height();
    var ewaDiv = $('#ewadiv').height();

    if(lukaszDiv > ewaDiv){
        $('#ewadiv').css('height', lukaszDiv + 'px');
    }
    else {
        $('#lukaszdiv').css('height', ewaDiv + "px");
        }

    $('#hamburger-menu').on('click', function(){
        console.log("jestem tutaj");
        $('.links').removeClass('display-none'); 
    }) 

    $('#hamburger-menu-close').on('click', function(){
        $('.links').addClass('display-none');
    })
});
