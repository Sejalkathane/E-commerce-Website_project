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


// document.getElementsByid("login").onclick = function() {openForm()};
// document.getElementsByClassName("close").onclick = function() {closeForm()};

// function openForm() {
//   document.getElementsByid("login").style.display = "block";
//   console.log("print");
//   // document.getElementsByid("login").innerHTML="HIII";
// }

// function closeForm() {
//   document.getElementsByClassName("close").style.display = "none";
// }



// const btn = document.getElementById('login');

// btn.addEventListener('click', () => {
//   const form = document.getElementById('cont');

//   if (form.style.display === 'none') {
//     // 👇️ this SHOWS the form
//     form.style.display = 'block';
//   } else {
//     // 👇️ this HIDES the form
//     form.style.display = 'none';
//   }
// });







