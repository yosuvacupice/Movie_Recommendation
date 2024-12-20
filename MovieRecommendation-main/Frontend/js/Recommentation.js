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

// Movie Data (for dynamic updates)
const movies = {
  Amaran: {
    name: "Amaran",
    yearDuration: "2024 . 2h 47m",
    rating: "8.9",
    yourratingBtn: "Your Rating",
    description:
      "The life of Major Mukund Varadarajan and is set against the backdrop of the Qazipathri Operation in Shopian, Kashmir, which took place back in 2014.",
    poster: "assets/Teaser/Amaranoverview.jpeg",
    teaser: "assets/Teaser/Amaranteaser.jpg",
    trailerLink: "https://youtu.be/UPKLS4pRnSo?si=HxqzO-tB58shIXG_",
    officialname: "Amaran | Official Trailer ",
    tags: ["Action", "Drama", "Biography"],
  },
  "Moana 2": {
    name: "Moana 2",
    yearDuration: "2025 . 1h 40m",
    rating: "8.7",
    yourratingBtn: "Your Rating",
    description:
      "Moana embarks on another daring journey across the ocean to save her people and uncover ancient secrets.",
    poster: "assets/Teaser/moanaoverview.jpg",
    teaser: "assets/Movies/Moana2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=qkgkUCqEum4",
    officialname: "Moana 2 | Official Trailer ",
    tags: ["Adventure", "Family", "Fantasy"],
  },
  "Gladiator II": {
    name: "Gladiator II",
    yearDuration: "2024 . 2h 28m",
    yourratingBtn: "Your Rating",
    rating: "9.0",
    description:
      "A thrilling continuation of the epic story, following the next generation in the Roman Empire, filled with battles, vengeance, and honor.",
    poster: "assets/Teaser/Gladiatoroverview.jpeg",
    teaser: "assets/Movies/Gladiator2.webp",
    trailerLink: "https://www.youtube.com/watch?v=Ts0N8swyWFI",
    officialname: "Gladiator II | Official Trailer ",
    tags: ["Action", "Drama", "Historical"],
  },
  Kolaigaran: {
    name: "Kolaigaran",
    yearDuration: "2019 . 2h 02m",
    rating: "8.0",
    yourratingBtn: "Your Rating",
    description:
      "A gripping murder mystery that unfolds through the intense battle of wits between a suspect and a determined police officer.",
    poster: "assets/Movies/Kolaikaran.jpg",
    teaser: "assets/Teaser/kolaigaranteaser.jpg",
    trailerLink: "https://www.youtube.com/watch?v=qTWop1q5V54",
    officialname: "Kolaigaran | Official Trailer ",
    tags: ["Crime", "Thriller", "Mystery"],
  },
  "Dune part II": {
    name: "Dune part II",
    yearDuration: "2024 . 2h 46m",
    rating: "8.6",
    yourratingBtn: "Your Rating",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, as he faces a choice between love and the fate of the known universe.",
    poster: "assets/Movies/Dunepart2.webp",
    teaser: "assets/Teaser/Dunepart2teaser.jpg",
    trailerLink: "https://www.youtube.com/watch?v=U2Qp5pL3ovA",
    officialname: "Dune part II | Official Trailer ",
    tags: ["Sci-Fi", "Adventure", "Drama"],
  },
  LuckyBaskar: {
    name: "LuckyBaskar",
    yearDuration: "2024 . 2h 31m",
    rating: "8.8",
    yourratingBtn: "Your Rating",
    description:
      "The story of an ordinary man, Baskar, whose life takes an extraordinary turn when luck favors him in unexpected ways, leading to thrilling and humorous events.",
    poster: "assets/Movies/LuckyBhaskar.jpg",
    teaser: "assets/Teaser/LuckyBhaskarteaser.jpg",
    trailerLink: "https://www.youtube.com/watch?v=38zkfXEhsJI",
    officialname: "LuckyBaskar | Official Trailer ",
    tags: ["Comedy", "Drama", "Thriller"],
  },
  OKadhalkanmani: {
    name: "OKkanmani",
    yearDuration: "2015 . 2h 19m",
    rating: "8.7",
    yourratingBtn: "Your Rating",
    description:
      "A heartwarming story of two young lovers navigating the challenges of a modern-day relationship, while rediscovering the beauty of love and commitment.",
    poster: "assets/Movies/OKadhalkanmani.jpg",
    teaser: "assets/Teaser/OKadhalkanmaniteaser.jpg",
    trailerLink: "https://www.youtube.com/watch?v=GoqNN6fA9c8",
    officialname: "OKadhalkanmani | Official Trailer ",
    tags: ["Romance", "Drama", "Musical"],
  },
  TheHouseNextDoor: {
    name: "TheHouseNextDoor",
    yearDuration: "2002 . 1h 30m",
    rating: "8.6",
    yourratingBtn: "Your Rating",
    description:
      "A nightmare-prone children's book illustrator and her weak-willed husband move next door to an ex-marine bar owner and his timid wife.",
    poster: "assets/Movies/TheHouseNextDoor.jpg",
    teaser: "assets/Teaser/TheHouseNextDoorteaser.jpg",
    trailerLink: "https://www.youtube.com/watch?v=cb0SLQRt83k",
    officialname: "TheHouseNextDoor | Official Trailer ",
    tags: ["Horror", "Thriller", "Drama"],
  },
  "The Batman": {
    name: "The Batman",
    yearDuration: "2022 . 2h 56m",
    rating: "8.0",
    yourratingBtn: "Your Rating",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham.",
    poster: "assets/Movies/TheBatman.jpg",
    teaser: "assets/Teaser/TheBatman.jpg",
    trailerLink: "https://youtu.be/S-GJ3lk0GCA?si=JTmay1btLamxhpTT",
    officialname: "The Batman | Official Trailer ",
    tags: ["Action", "Thriller", "Crime"],
  },
  RaguThatha: {
    name: "RaguThatha",
    yearDuration: "2024 . 2h 40m",
    rating: "9.0",
    yourratingBtn: "Your Rating",
    description:
      "This is the hilarious story of a rebellious young woman, Kayalvizhi, who is forced to choose between principle and patriarchy",
    poster: "assets/Movies/RaaguThatha.jpg",
    teaser: "assets/Teaser/Raghhuthathateaser.jpg",
    trailerLink: "https://youtu.be/1OrM9n87BN0?si=DDe2CbspDRQP4KYC",
    officialname: "RaguThatha | Official Trailer ",
    tags: ["Comedy", "Family", "Drama"],
  },
};
let movieName;
document.querySelectorAll(".rate-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    movieName = event.target.parentElement.querySelector("h3").innerText;

    const movie = movies[movieName];

    if (movie) {
      scrollToTop();

      let email = localStorage.getItem("userEmail");
      const params = new URLSearchParams({
        email: email,
        movie_name: movieName,
      });
      fetch(`http://localhost:8000/get_rate/?${params.toString()}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.rating) {
            document.querySelector(".movieheadline #yourrateBtn").innerText =
              data.rating;
            submitBtn.innerText = "Update";
            rateBtn.style.backgroundColor = "transparent";
            rateBtn.style.margin = "0px 10px";
            rateBtn.style.padding = "0px 10px";
            rateBtn.innerHTML = `<span class="rating-text">Your Rating</span><br>
    <span class="rating-score">⭐ ${data.rating} / 10<i class='bx bxs-pencil' style="margin-left: 10px;"></i></span>`;
            console.log("Rating Fetched:", data);
          }
          else{
            submitBtn.innerText = "Rate";
          }
        })
        .catch((error) => {
          console.error("Error getting rating:", error);
        });
      // Update Movie Overview
      document.querySelector(".movieheadline .moviename").innerText =
        movie.name;
      document.querySelector(".movieheadline .yourrating").innerText =
        movie.yourratingBtn;
      document.querySelector(".movieheadline .yearduration").innerText =
        movie.yearDuration;
      document.querySelector(".movieheadline .rating span").innerText =
        movie.rating;
      document.querySelector(".aboutmovie .description").innerText =
        movie.description;
      document.querySelector(".modal-content #movietitle").innerText =
        movie.name;


      // Update Poster
      document.querySelector(".movieteaser .poster").src = movie.poster;

      // Update Teaser and Trailer Link
      document.querySelector(".movieteaser .trailer").src = movie.teaser;
      document.querySelector(".movieteaser .trailerlink").href =movie.trailerLink;
      document.querySelector(".movieteaser .official").innerText = movie.officialname;
        
        
      // Select the target element
      const yourRatingElement = document.querySelector(
        ".movieheadline .yourrating"
      );

      // Apply styles dynamically using the style property
      yourRatingElement.style.padding = "8px 40px";
      yourRatingElement.style.backgroundColor = "#ffcc33";
      yourRatingElement.style.color = "black";
      yourRatingElement.style.borderRadius = "7px";
      yourRatingElement.style.margin = "5px 10px";
      yourRatingElement.style.fontSize = "13px";
      yourRatingElement.style.textAlign = "center";
      yourRatingElement.style.cursor = "pointer";

      // Add hover styles dynamically (requires a CSS class to be toggled)
      const styleSheet = document.createElement("style");
      styleSheet.textContent = `
            .yourrating:hover {
              color: white;
              background-color: #A61206;
            }
          `;
      document.head.appendChild(styleSheet);


      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Update Tags
      const tagsContainer = document.querySelector(".aboutmovie .tags");
      tagsContainer.innerHTML = "";
      movie.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.innerText = tag;
        tagsContainer.appendChild(span);
      });
    }
  });
});

//  -------- rate button --------------

let rateBtn = document.getElementById("yourrateBtn");
let rateModal = document.getElementById("rateModal");
let cancelBtn = document.getElementById("cancelBtn");
let stars = document.querySelectorAll(".star");
let submitBtn = document.getElementById("submitBtn");
let selectedRating = 0;

// Open Rating Modal
rateBtn.addEventListener("click", () => {
  rateModal.style.display = "flex";
});

// Close Rating Modal
cancelBtn.addEventListener("click", () => {
  rateModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === rateModal) {
    rateModal.style.display = "none";
  }
});

// Handle star rating selection
stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = star.dataset.value;
    resetStars();
    highlightStars(selectedRating);
  });
});

function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
}

function highlightStars(value) {
  for (let i = 0; i < value; i++) {
    stars[i].classList.add("active");
  }
}

// Submit the rating
submitBtn.addEventListener("click", () => {
  if (selectedRating > 0) {
    updateRating(selectedRating);
    rateModal.style.display = "none";
    updateMovieRatingDisplay(selectedRating);
  } else {
    alert("Please select a rating before submitting.");
  }
});

// Function to update the movie rating display
function updateMovieRatingDisplay(rating) {
  rateBtn.style.backgroundColor = "transparent";
  rateBtn.style.margin = "0px 10px";
  rateBtn.style.padding = "0px 10px";

  rateBtn.innerHTML = `<span class="rating-text">Your Rating</span><br>
    <span class="rating-score">⭐ ${rating} / 10<i class='bx bxs-pencil' style="margin-left: 10px;"></i></span>`;
}

// Function to send the rating to the backend

//const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function updateRating(rating) {
  let email = localStorage.getItem("userEmail");
  fetch("http://localhost:8000/rate_movie/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'X-CSRFToken': csrf_token, // Include the CSRF token if you're using Django
    },
    body: JSON.stringify({
      email: email,
      movie_name: movieName,
      rating: rating,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      rateBtn.style.backgroundColor = "transparent";
      rateBtn.style.margin = "0px 10px";
      rateBtn.style.padding = "0px 10px";

      rateBtn.innerHTML = `<span class="rating-text">Your Rating</span><br>
    <span class="rating-score">⭐ ${rating} / 10<i class='bx bxs-pencil' style="margin-left: 10px;"></i></span>`;
      console.log("Rating submitted:", data);
    })
    .catch((error) => {
      console.error("Error submitting rating:", error);
    });
}

submitBtn.addEventListener("click", () => {
  if (selectedRating > 0) {
    // Get the movie name and user name (from session or input)
    const movieName = document.querySelector(
      ".movieheadline .moviename"
    ).innerText;
    const userName = "{{ user.username }}"; // Replace this with actual user name from your session

    // Prepare the data to send
    const data = {
      movie_name: movieName,
      user_name: userName,
      rating: selectedRating,
    };

    // Send the POST request to Django backend
    fetch("http://localhost:8000/submit-rating/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  } else {
    alert("Please select a rating before submitting.");
  }
});

// -------- Sign out section ------------

document.querySelector('.signout a').addEventListener('click', async function (event) {
  event.preventDefault();

  try {
      const response = await fetch('http://localhost:8000/logout/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Include the token if you're using token-based auth
              // 'Authorization': `Token ${your_token}`
          },
      });

      if (response.ok) {

          localStorage.removeItem('token'); // Remove token if stored
          sessionStorage.clear();
          alert("You have been logged out.");
          window.location.href = "HomePage.html"; // Redirect to login or home page
      } else {
          const result = await response.json();
          alert("Error: " + (result.detail || "Failed to log out."));
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
  }
});

