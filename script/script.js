var infoIconVisible = 0;

$(document).ready(function() {
    $('#info-icon').on('click', function(){
        if($('.info-product').is(":hidden")){
            $('.info-product').show();
            $('.product').addClass('opacity');
        } else {
            $('.info-product').hide();
            $('.product').removeClass('opacity');
        }
        
    })

    $('.img-left').on('click', function(){
        $('.site-cover').removeClass("none");
    })

    $('.img-right').on('click', function(){
        $('.site-cover').removeClass('none');
    })
});

$(document).click(function(event){
    if(event.target.class != 'info-product' && 
    $('.info-product').find(event.target).length === 0 &&
    event.target.id != 'info-icon') {
        $('.info-product').hide();
        $('.product').removeClass('opacity');
    }
})

