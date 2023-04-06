$(document).ready(function() {
    $('#send').on('click', function(){
        if($('.modal').hasClass('none')){
            $('.modal').removeClass('none');
            $('.site-cover').removeClass('none');
        }        
    })

    $('#close').on('click', function(){
        if(!$('.modal').hasClass('none')){
            $('.modal').addClass('none');
            $('.site-cover').addClass('none');
        }        
    })
});
