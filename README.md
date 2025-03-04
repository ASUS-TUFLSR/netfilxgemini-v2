# React + Vite netfilx-gpt

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