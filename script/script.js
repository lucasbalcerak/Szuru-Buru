var infoIconVisible = 0;

$(document).ready(function() {
    $('#info-icon').on('click', function(){
        if($('.info-product').is(":hidden")){
            $('.info-product').show();
            $('.palma').css('opacity', '0.5');
            $('.kokos').css('opacity', '0.5');
        } else {
            $('.info-product').hide();
            $('.palma').css('opacity', '1');
            $('.kokos').css('opacity', '1');
        }
        
    })
});

$(document).click(function(event){
    if(event.target.class != 'info-product' && 
    $('.info-product').find(event.target).length === 0 &&
    event.target.id != 'info-icon') {
        $('.info-product').hide();
        $('.palma').css('opacity', '1');
        $('.kokos').css('opacity', '1');
    }
})