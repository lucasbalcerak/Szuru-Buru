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

var infoIconVisible = 0;

$(document).ready(function() {
    $('#info-icon').on('click', function(){
        if($('.info-product').is(":hidden")){
            $('.info-product').show();
            $('.product').addClass('opacity');
            $('.img-left').addClass('disabled');
            $('.img-right').addClass('disabled');
        } else {
            $('.info-product').hide();
            $('.product').removeClass('opacity');
            $('.img-left').removeClass('disabled');
            $('.img-right').removeClass('disabled');
        }
        
    })

    $('.img-left').on('click', function(){
        $('.site-cover').removeClass("none");
        $('.big-image').removeClass('none');
        $('#big-img-left-photo').removeClass('none');
    })

    $('.img-right').on('click', function(){
        $('.site-cover').removeClass('none');
        $('.big-image').removeClass('none');
        $('#big-img-right-photo').removeClass('none');
    })
});

$(document).click(function(event){
    if(event.target.class != 'info-product' && 
    $('.info-product').find(event.target).length === 0 &&
    event.target.id != 'info-icon') {
        $('.info-product').hide();
        $('.product').removeClass('opacity');
        $('.img-left').removeClass('disabled');
        $('.img-right').removeClass('disabled');
    }

    if(event.target.class != 'gallery' &&
    $('.gallery').find(event.target).length === 0 &&
    event.target.id != 'big-img-left' &&
    event.target.id != 'big-img-right') {
        $('.site-cover').addClass('none');
        $('.big-image').addClass('none');
        $('#big-img-left-photo').addClass('none');
        $('#big-img-right-photo').addClass('none');
    }
})
