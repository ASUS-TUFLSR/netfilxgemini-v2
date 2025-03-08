# React + Vite netfilx-gemini

- Created react app
- configured tailwind css
- Built header
  - login form
  - routing
  - sign up form
  - form validation
  - useRef Hook
  - Firebase Setup
  - !Deploying the app to production
  - Create signIn/Up users in firebase
  - Implemented SignIn user Api
  - Created Redux Store to manage state of a user
  - Fixed minor bug in auth
  - Update profile auth
  - Implemented Sign Out
  - Bugfix : SignUp user displayname and profile update
  - Bugfix : If the user is not logged in  Redirect /browse to Login Page and vice-versa
  - Unsubscribed to the onAuthStateChange Callback
  - Added hardcoded values to constants file
  - Registered TMDB API & created an app to get access token 
  - Get Data from Now-Playing movies list api from api-reference
  - Created custom hooks for now playing movies
  - Updated the store(slice) with movie data
  - Planning for main & secondary container
  - Fetched Data For Trailer Video
  - Updated the store with trailer video
  - Embeded the youtube video and made it autoplay&mute
  - Added to TailwindCSS to UI
  - Fetched new API from tmbd to diplay in secondary Container
  - created usePopularMovies in redux store and added fetched api
  - added .noScrollbar in index.css to hide scroll effect/ui 
  - GPT search feature
  - Integrated multi-language functionality
  - created OpenAi key and added it to .env file
  - use VITE_ for adding .env variables for project initialized with vite@
  - Change of plans, now will use Google's GEMINI API KEY 
  - OPENAI key had usage issue better alternative is GEMINI
  - Created a backend folder and server.js file to store and post the query/question 
  - Ditched OPEN_AI, now will use GEMINI_AI
  - Frontend (React + Vite): Handles UI interactions.
  - Backend (server.js): Manages API calls, security, and interactions with external services (like Gemini API).
  - React cannot directly call Gemini API because it exposes your API key in the browser (security risk).
  - server.js allows us to keep the API key hidden and make API calls safely.
  - If you call Gemini API directly from React, Google blocks it due to CORS restrictions.
  - A backend (server.js) proxies the request, preventing CORS errors.
  - The backend lets us log errors properly and return meaningful messages.
  - If we need to add user authentication, databases, or other services, it’s easier to expand in server.js.
  - Installed Concurrently to run both frontend & backend simultaneously
  - Used concept of memoization to avoid unnecessary API-Calls slowind down server
  - fetched the movies data from redux store which was initially null and used async-await inside useEffect(); for better api-calling
  - 

# Features

- Login & Signup page for (auth)
  - SignIN / SignUp Form
  - redirect to browse page
- Browse (after authentication)
- Header

  - Main movie
    - Trailer in background
    - title & description
    - Movie Suggesstion more like a carousels
      - MovieList + N

- Netflix Gpt v2
- search bar
- movie suggestions


# Tech Stack
 - HTML/CSS
 - TailwindCSS
 - JavaScript
 - React
 - FireBaseAuth
 - Redux/RTK
 - NodeJs