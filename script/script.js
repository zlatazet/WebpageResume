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

// Circular progress bar 
const progressBar1 = document.querySelector('.progress-bar-1');
const progressText1 = document.querySelector('.progress-percent-1');

function setProgress1(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar1.style.strokeDashoffset = offset;
  progressText1.innerHTML = `${percent}%`;
}

setProgress1(100); // Example: set initial progress to 85%

const progressBar2 = document.querySelector('.progress-bar-2');
const progressText2 = document.querySelector('.progress-percent-2');

function setProgress2(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar2.style.strokeDashoffset = offset;
  progressText2.innerHTML = `${percent}%`;
}

setProgress2(100); // Example: set initial progress to 70%

const progressBar3 = document.querySelector('.progress-bar-3');
const progressText3 = document.querySelector('.progress-percent-3');

function setProgress3(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar3.style.strokeDashoffset = offset;
  progressText3.innerHTML = `${percent}%`;
}

setProgress3(100); // Example: set initial progress to 15%

const progressBar4 = document.querySelector('.progress-bar-4');
const progressText4 = document.querySelector('.progress-percent-4');

function setProgress4(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar4.style.strokeDashoffset = offset;
  progressText4.innerHTML = `${percent}%`;
}

setProgress4(100); // Example: set initial progress to 80%

const progressBar5 = document.querySelector('.progress-bar-5');
const progressText5 = document.querySelector('.progress-percent-5');

function setProgress5(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar5.style.strokeDashoffset = offset;
  progressText5.innerHTML = `${percent}%`;
}

setProgress5(100); // Example: set initial progress to 85%

const progressBar6 = document.querySelector('.progress-bar-6');
const progressText6 = document.querySelector('.progress-percent-6');

function setProgress6(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar6.style.strokeDashoffset = offset;
  progressText6.innerHTML = `${percent}%`;
}

setProgress6(100); // Example: set initial progress to 15%

const progressBar7 = document.querySelector('.progress-bar-7');
const progressText7 = document.querySelector('.progress-percent-7');

function setProgress7(percent) {
  const circumference = 339.292;
  const offset = circumference - percent / 100 * circumference;
  progressBar7.style.strokeDashoffset = offset;
  progressText7.innerHTML = `${percent}%`;
}

setProgress7(100); // Example: set initial progress to 25%

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