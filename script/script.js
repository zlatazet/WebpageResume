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

// Scroll
$('#about').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about-me').offset().top}, 500)
})

$('#skills').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#skills-section').offset().top}, 500)
})

$('#contact').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#form-section').offset().top}, 500)
})