var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  //alert ("slides.length"+slides.length);
  //alert ("slideIndex--"+ slideIndex);

  if (n > slides.length) {slideIndex = 1}
  //alert ("slideIndex"+ slideIndex);

  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //alert("slides[slideIndex-1]+"+slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}
