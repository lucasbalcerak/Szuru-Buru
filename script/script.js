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
