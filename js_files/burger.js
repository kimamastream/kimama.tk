// hamburger //////////////////////////////////////////////////
// hamburger
// hamburger
// hamburger //////////////////////////////////////////////////
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});




// slider  ///////////////////////////////////////////////////////////
// slider
// slider
// slider ////////////////////////////////////////////////////////////
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
	counter = 1;
  }
}, 4200);



// back page function ///////////////////////////////
// back page function
// back page function
// back page function////////////////////////////////
function goBack() {
  window.history.back();
}


// adbd slide///////////////////////////////////////
// adbd slide
// adbd slide
// adbd slide//////////////////////////////////////
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 4 seconds
}



// adbd slide for mobile///////////////////////////////////////
// adbd slide for mobile///////////////////////////////////////
// adbd slide for mobile///////////////////////////////////////
var slideIndexmbl = 0;
showSlidesmbl();

function showSlidesmbl() {
  var i;
  var slidesmbl = document.getElementsByClassName("mySlidesmbl");
  var dotsmbl = document.getElementsByClassName("dotmbl");
  for (i = 0; i < slidesmbl.length; i++) {
    slidesmbl[i].style.display = "none";
  }
  slideIndexmbl++;
  if (slideIndexmbl > slidesmbl.length) {slideIndexmbl = 1}
  for (i = 0; i < dotsmbl.length; i++) {
    dotsmbl[i].className = dotsmbl[i].className.replace(" activembl", "");
  }
  slidesmbl[slideIndexmbl-1].style.display = "block";
  dotsmbl[slideIndexmbl-1].className += " activembl";
  setTimeout(showSlidesmbl, 5000); // Change image every x seconds
}


// search function script////////////////////////////
// search function script////////////////////////////
// search function script////////////////////////////

function filterFunction() {
  let isInputAvail = false;
  var input, filter, ul, li, a, i;
  input = document.getElementById("sea-myInput");
  filter = input.value.toLowerCase();
  if (filter.length > 0) {
      document.getElementById("sea-myDropdown").classList.add("sea-show");
  } else {
      document.getElementById("sea-myDropdown").classList.remove("sea-show");
  }
  div = document.getElementById("sea-myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      txtValue = a[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
          isInputAvail = true;
          a[i].style.display = "block";
      } else {
          a[i].style.display = "none";
      }
  }
  if (!isInputAvail) {
      document.getElementById("sea-noMatches").classList.add('sea-show');
  } else {
      document.getElementById("sea-noMatches").classList.remove('sea-show');
  }
}