let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 2000);
}



function openForm() {
  document.getElementsByClassName("login").style.display = "block";
}

function closeForm() {
  document.getElementsByClassName("close").style.display = "none";
}
