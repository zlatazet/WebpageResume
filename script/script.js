// Menu opener
const menu = document.getElementById("menu");
const listContainer = document.getElementsByClassName("nav__items-con")[0];
const body = document.querySelector("body");
let clickCount = 0;

menu.onclick = function() {
    clickCount++;
    menu.classList.toggle("openmenu");
    if (clickCount % 2 === 0) {
        listContainer.style.display = "none";
        body.style.overflow = "scroll";
    } else {
        listContainer.style.display = "block";
        body.style.overflow = "hidden";
    }
};

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

// Get information from the form


jQuery(document).ready(function () {

 

 jQuery('.submit-form__button').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 form.find('.form__status').html('форма отправлена успешно');
                 document.getElementById("form").reset();
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.form__status').html('серверная ошибка');
       }
     });
   }
 });


});