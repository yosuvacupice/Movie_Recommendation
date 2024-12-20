var seeMoreSection = document.querySelector(".top-picks.see");
var seemore = document.querySelectorAll(".Seemore");

function Seemore() {
  if (
    seeMoreSection.style.display === "none" ||
    seeMoreSection.style.display === ""
  ) {
    seeMoreSection.style.display = "block";
    seemore.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    seeMoreSection.style.display = "none";
    seemore.forEach((item) => {
      item.style.display = "block";
    });
  }
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const images = document.querySelectorAll(".carousel-container img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  });
});


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Reset all images and dots
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  // Activate the selected image and dot
  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active-dot");
}
  