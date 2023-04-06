$(document).ready(function() {
    var lukaszDiv = $('#lukaszdiv').height();
    var ewaDiv = $('#ewadiv').height();

    if(lukaszDiv > ewaDiv){
        $('#ewadiv').css('height', lukaszDiv + 'px');
    }
    else {
        $('#lukaszdiv').css('height', ewaDiv + "px");
        }
    });
    
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
