Movie Recommendation Platform
Table of Contents
•	Overview
•	Features
•	Technologies Used
•	Installation and Setup
•	Usage
•	Project Structure
•	API Endpoints

________________________________________

Overview
The Movie Recommendation Platform is a dynamic and interactive web application that allows users to explore, rate, and manage movies. With features such as a floating menu, personalized ratings, sign-up/sign-in capabilities, and a Django REST Framework (DRF)-powered backend, the platform offers a seamless movie browsing experience.
________________________________________

Features
•	User Authentication:
    o	Sign-up, sign-in, and sign-out functionality.
    o	User session management using tokens (Django REST Framework).
•	Movie Ratings:
    o	Users can rate movies, and the system dynamically updates ratings.
    o	Ratings are persisted in the backend database.
•	Floating Menu:
    o	A responsive floating menu for quick navigation.
•	Movie Overview:
    o	Dynamic UI updates based on user interactions.
    o	Information includes movie posters, trailers, descriptions, and tags.
•	Django REST Framework Backend:
    o	API endpoints for user authentication, ratings, and movie data retrieval.
•	Frontend:
    o	Built using HTML, CSS, and JavaScript.
    o	Smooth UI transitions and hover effects for better user experience.
________________________________________

Technologies Used
Frontend
•	HTML5
•	CSS3
•	JavaScript (ES6)
Backend
•	Python (Django)
•	Django REST Framework
Database
•	SQLite (Default with Django)
Other Tools
•	LocalStorage for managing temporary user data.
•	Fetch API for communication with the backend.
________________________________________

Installation and Setup
1. Clone the Repository
    git clone <repository-url>
    cd <project-folder>
2. Set Up the Backend
    1.	Create a virtual environment and activate it: 
    2.	python -m venv venv
    3.	source venv/bin/activate  # On Windows: venv\Scripts\activate
    4.	Install the required Python packages: 
    5.	pip install -r requirements.txt
    6.	Apply migrations to set up the database: 
    7.	python manage.py migrate
    8.	Start the Django development server: 
    9.	python manage.py runserver
3. Serve the Frontend
    1.	Open the HomePage.html file in your browser: 
    2.	Open frontend/HomePage.html
________________________________________

Usage
1.	Sign Up:
    Navigate to the sign-up page, enter your details, and create an account.
2.	Sign In:
    Log in using your email or mobile number and password.
3.	Browse Movies:
    Explore the "Recommendation" section. Click "Rate" to add your rating for a movie.
4.	Rate Movies:
    Select a star rating from 1 to 10 and submit your review. Updates are reflected immediately.
5.	Sign Out:
    Use the Signout to sign out and clear your session.
________________________________________
Project Structure
MovieRecommendation/
│
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   ├── backend/       # Project folder
│   ├── Movies/        # App for handling movie data
│   ├── Ratings/       # App for handling the ratings
│   ├── Customuser/    # App for user authentication
│
├── frontend/
│   ├── HomPage.html
│   ├── signup.html
│   ├── signin.html
│   ├── MoviesMain.html
│   ├── FeaturedMovies.html
│   ├── Recommendation.html
│   ├── css/
│   │   ├── Signin.css
│   │   ├── HomePage.css
│   │   ├── MoviesMain.css
│   │   ├── FeaturedMovies.css
│   │   ├── Recommentation.css
│   ├── js/
│   │   ├── FeatureMovies.js
│   │   ├── Recommentation.js
│   ├── assets/
│       ├── Teaser/
│       ├── Movies/
│       └── images/
│
└── README.md
________________________________________
API Endpoints
Authentication
•	POST /register/ - Create a new user.
•	POST /signin/ - Authenticate and log in.
•	POST /logout/ - Log out and clear the session.
Ratings
•	POST /rate_movie/ - Submit or update a movie rating.
•	POST /submit-rating/ - Submit user ratings.
•	GET /get_rate/ - Retrieve a user's rating for a specific movie.
Movies
•	GET /api/movies/ - Retrieve all movies.
•	GET /api/movies/<id>/ - Retrieve details for a specific movie.
Ratings
•	POST /api/rate_movie/ - Submit or update a movie rating.
•	GET /api/get_rate/?email=<email>&movie_name=<movie_name> - Retrieve a user's rating for a specific movie.
________________________________________
Contributing
Feel free to contribute to the project! Fork the repository, make your changes, and submit a pull request.
________________________________________
