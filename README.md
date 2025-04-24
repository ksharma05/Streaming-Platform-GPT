# React + Vite

# Features
1) Login/Sign up
    -Sign In/Sign Up form
    -redirect to Browse Page

2) Browse Page(After authentication)
    -Header
    -Banner
        -Trailer preview in BG
    -Overlay Title & Description
    -Movie Suggestions

3) Netflix GPT
    -Search Bar
    -Suggested Movies


# Netflix GPT
1) Create a new project using the following command:
    npm create vite@latest --template react
    selected react as framework
    selected variant as javascript (without SWC)

2) Configured Tailwind CSS
3) Header
4) Routing setup
5) Login Form
6) Sign up Form
7) Form Validation
8) useRef hook for validation
9) Firebase setup
10) Application deployment
11) Signup user @ firebase
12) Login user @ firebase
13) Created Redux store along with userSlice
14) Implemented signout
15) update user profile
16) Bug fixed : Fixed the route and navigation
17) Moved the navigation to App.js
18) made all the routes children of Body component i.e Login and Browse
19) Moved the Header to Body component and used Outlet to render the child component.
20) Fixed the OnAuthStateChanged and implemented navigate for login and logout redirection
21) Unsubscribed to the onAuthStateChanged on component unmount.
22) Hardcoded values maintained in constants.jsx
23) Used TMDB api( Registering and getting the access token)
24) Added VideoBanner, BrowseContent, and Background video along with Movie title on top
25) created custom hook useNowPlayingMovies to fetch the data from TMDB API and adding the data to MovieSlice of appStore
26) Subscribed to MovieSlice to get nowPlayingMovies data for banner video
27) Created MovieCard and MovieList under BrowseContent section to show the moviesList as cards
28) Created different custom hooks to fetch and dispatch data to movieSlice for various different categories
29) Subscribed to the movies data to show the list in MovieList component.
30) Styled the component using TailwindCss to make the page look appealing
31) Made GPT search page
32) Made GPT search bar
33) Made multi lingual page
34) Integrate GPT API
35) GPT search using API
36) fetched suggested movies by GPT from TMDB
37) GPT slice for tmdb movies data
38) Reused Movie card 
39) Memoization
40) added .env file
41) made the page responsive


