### Voting App 

VOTOGO is a voting app which allows users to create, share and view the results of surveys, and vote on other people's topics.

####Useful Links
- Github: https://github.com/ARWL2016/voting-app 
- Website: https://votogo.herokuapp.com/home

#### Tech 
- Angular 4.0 
- Typescript 2.2  
- Bootstrap 3.3.7 
- Node 8.9.1
- Express 4.15.3
- MongoDB 2.2.27
- Mongoose 4.13.8
- Authentication: bcryptjs, jsonwebtoken
- Chart: chart.js and ng-charts
- Deployment: Heroku and Mlab (MongoDB cloud host)

#### Features 
- user authentication 
- responsive design 
- toastr notifications 
- angular animations
- data display with donut chart 

#### Run in dev mode
- `npm run build:watch` - compile Angular app with webpack 
- `npm run server` - run node backend
- OR `npm run dev` - runs previous two commands in parallel processes
- nb: no local database needed; dev environment connects to mlab 

#### Deployment 
- run a production build 
- push to github and heroku 

#### To do  
- add proper error handling to the API 
- prepare code base for AOT compilation  
- time out requests that take too long
- add active class to nav links
- resolve handlebars vulnerability 
- add a loader
- security and performance checks

#### Enhancements
- Make sure the error messaging is appropriate for all of the forms 
- add better validation to the username field (max length) 
- add animation to dropdown  
- debounce the search box
- add tests
- add logger

#### Possible Features 
- add a recent button and a most popular button to the home page (this will mean changing the data structure 
- add paging
- username availability check






