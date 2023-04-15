$(document).ready(function() {

    if($(window).width() < 576) {
        $('#info-icon').on('click', function(){
            if($('.info-product').is(":hidden")){
                $('.info-product').show();
                setTimeout(function() {
                    $('.info-product').addClass('info-modal-in');  
                }, 50)
                setTimeout(function() {
                    $('.info-product').removeClass('none');  
                }, 200)
            } else {
                $('.info-product').hide();
            }
        })
    } else {
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
            $('.big-image').removeClass('display-none');
            $('#big-img-left-photo').removeClass('display-none');
        })
    
        $('.img-right').on('click', function(){
            $('.site-cover').removeClass('none');
            $('.big-image').removeClass('display-none');
            $('#big-img-right-photo').removeClass('display-none');
        })
            
    }
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
        $('.big-image').addClass('display-none');
        $('#big-img-left-photo').addClass('display-none');
        $('#big-img-right-photo').addClass('display-none');
    }
})