// Button that bring you to the top of the page
$(window).scroll(function(){
    if($(this).scrollTop() > 500) {
        $('#top').fadeIn();
    }else {
        $('#top').fadeOut();
    }
})

$('#top').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 700)
})