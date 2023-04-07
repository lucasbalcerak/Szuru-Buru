$(document).ready(function() {  

    $('#send').on('click', function(){
        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var textValue = $('#text').val();

        console.log(nameValue != "");
        console.log(emailValue);
        console.log(textValue);

        if(nameValue === "" && $('#name-req').hasClass('none')) {
            $('#name-req').removeClass('none');
        } else {
            $('#name-req').addClass('none');
        }

        if(emailValue === "" && $('#email-req').hasClass('none')) {
            $('#email-req').removeClass('none');
        } else {
            $('#email-req').addClass('none');
        }

        if($('.modal').hasClass('none') && 
        nameValue != "" &&
        emailValue != "" &&
        textValue != "" ){
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
