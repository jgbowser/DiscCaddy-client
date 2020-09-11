# DiscCaddy
DiscCaddy is a mobile first web app designed to aid disc golfers on the course.<br> 
Check out the [DiscCaddy](https://disccaddy.vercel.app)

## Summary
Users can create accounts, save a list of discs they own to their 'virtual bag', create and save scorecards, view their scores from previous rounds, and get disc suggestions for shot shapes from the list of discs they own.<br>
The app uses the DiscCaddy API to handle HTTP requests. see the documentation for the API here: [DiscCaddy API](https://github.com/jgbowser/DiscCaddy-server)

## App Screens
The app has 7 main page views. The components for each page view are found in the routes directory. Smaller components that are part of each screen, both unique and reused, are found in the components directory.

### Landing Page
The landing page gives new users a brief description of the app and its purpose.<br>
<img src='/src/images/README-assets/landing-page.jpg' width='300' />

### Login Page
From the Landing Page users can view the Login Page. Already registered users can log in here. New users can click the link to create an account. A demo user account is also available to allow new users to try out the app as well.<br>
<img src='/src/images/README-assets/login-page.jpg' width='300' />

### Registration Page
The registration page is accessed from the Login Page. New users can create accounts here.<br>
<img src='/src/images/README-assets/registration-page.jpg' width='300' />

### Home Screen
Once a user logs in they are redirected to the Home Screen. Here users can navigate to their Scorecard page or My Bag page.<br>
<img src='/src/images/README-assets/home-screen.jpg' width='300' />

### My Bag
The my bag page fetches the user's saved discs as well as a complete list of discs from the DiscCaddy API and displays them as a list of accordion elements. The accordion can be expanded to view a detailed view including the discs stats. The form at the top of the bag page allows users to browse all the discs in the DiscCaddy DB and add to their own list.<br>
<img src='/src/images/README-assets/user-bag.jpg' width='300' />

### Scorecards Page
The Scorecards page displays all of the users previously saved scorecards. These are displayed as a list of accordion elements. Minimized view displays the date the scorecard was saved as well as the total score and +/- par. From this page users can choose to create a new scorecard and be navigated to the Create a Scorecard page.<br>
<img src='/src/images/README-assets/scorecards-list.jpg' width='300' />

### Creat a Scorecard Page
The Create a Scorecard page starts with a new, empty scorecard at the top of the screen. Below the scorecard the user inputs are found. Users can move forward and backward through the wholes. The stroke count for each hole is set by clicking the '+' or '-' buttons. Once a user clicks to advance to the next hole the stroke count is set and displayed on the score card.<br>
<img src='/src/images/README-assets/scorecard.jpg' width='300' /><br>
While on this page view users also have the disc suggestion feature available to them. The user can select one of the 4 basic shot shapes. Once a shape is selected DiscCaddy will filter the list of discs in the user's bag and list any discs which have stats that would match the desired shot shape.<br>
<img src='/src/images/README-assets/disc-suggest.jpg' width='300' />

## Stack
Create-React-App was used to bootstrap the project.<br> React Router(DOM) was used to handle navigation through page views.<br> ReactFontAwesome was used to display various svg icons throughout the app.<br>
Testing used the Jest test framework.


