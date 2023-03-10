$('.features__item > div').on('click', function(){
    $(this).children('.icon__bold').toggleClass('active-f');
    $(this).parent('.features__item').toggleClass('toggleBg-f');
    $(this).next('.after__link').slideToggle(200);
})

$('.about__items > div').on('click', function(){
    // alert('hello') - всплывающее окно
    $(this).children('.about__icon').toggleClass('active');
    $(this).parent('.about__items').toggleClass('toggleBg');
    $(this).children('.mini-about__position').toggleClass('toggleText');
    $(this).next('p').slideToggle(300)
})

$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
})

$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});