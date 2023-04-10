$(document).ready(function(e) {  

    $('#send').on('click', function(e){
        e.preventDefault();

        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var nameBool = false;
        var emailBool = false;

        var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        console.log($('#thanks-h2').html());
        if(nameValue === "") {
            $('#name-req').removeClass('none');
            nameBool = false;
        } else {
            $('#name-req').addClass('none');
            nameBool = true;
        }

        if(!pattern.test(emailValue)) {
            $('#email-req').removeClass('none');
            emailBool = false;
        } else {
            $('#email-req').addClass('none');
            emailBool = true;
        }

        if($('.modal').hasClass('none') && 
        nameBool &&
        emailBool ){
            $('.modal').removeClass('none');
            $('.site-cover').removeClass('none');
            $('#thanks-h2').html("Dziękujemy za wiadomość " + nameValue);
        }  
    })

    $('#close').on('click', function(){
        if(!$('.modal').hasClass('none')){
            $('.modal').addClass('none');
            $('.site-cover').addClass('none');
        }        
    })
});


