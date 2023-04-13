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
