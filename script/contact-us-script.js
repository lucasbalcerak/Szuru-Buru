$(document).ready(function() {  

    $('#send').on('click', function(){
        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var textValue = $('#text').val();

        var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        console.log(pattern.test(emailValue));

        if(nameValue === "" && $('#name-req').hasClass('none')) {
            $('#name-req').removeClass('none');
        } else {
            $('#name-req').addClass('none');
        }

        if(!pattern.test(emailValue)) {
            $('#email-req').removeClass('none');
        } else {
            $('#email-req').addClass('none');
        }

        if($('.modal').hasClass('none') && 
        nameValue != "" &&
        pattern.test(emailValue) &&
        textValue != "" ){
            console.log("Cps");
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
