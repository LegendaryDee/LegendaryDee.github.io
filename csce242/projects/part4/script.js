// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("main-nav").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

const updateThermomether = () => {
    const goal = 10000;
    const number = document.getElementById("txt-number").value;
    const errorSpan = document.getElementById("number-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermometer");
    document.querySelector(":root").style.setProperty('--number', "0%");

    /* Error */
    if (isNaN(number)) {
        errorSpan.innerHTML = "* Not a valid number";
        return;
    } else if (funds < 0) {
        errorSpan.innerHTML = "* Negative number";
        return;
    }

    const percent = number / goal * 100;
    document.querySelector(":root").style.setProperty('--number', percent + "%");

};

const evalForm = (e) => {
    e.preventDefault();


};

document.getElementById("btn-cont").onclick = updateThermomether;
document.getElementById("my-form").onsubmit = evalForm;