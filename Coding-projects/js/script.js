let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "flex"; 
}

// Scroll
$('#home').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('../index.html').offset().top}, 500)
})

$('#about').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('../index.html#about-me').offset().top}, 500)
})

$('#skills').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('../index.html#skills-section').offset().top}, 500)
})

$('#contact').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('../index.html#form-section').offset().top}, 500)
})