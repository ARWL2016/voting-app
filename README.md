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
- Tested on Chrome 63, Edge, IE11, Opera

#### Features 
- Single Page Application
- user authentication 
- responsive design 
- toastr notifications 
- angular animations
- data display with doughnut chart 

#### Handlebars security issue 
- delete node modules
- npm i @angular/cli@1.5.3 
- delete package-lock.json 
- npm i

#### Run in dev mode
- `npm run build:watch` - compile Angular app with webpack 
- `npm run server` - run node backend
- OR `npm run dev` - runs previous two commands in parallel processes
- nb: no local database needed; dev environment connects to mlab 

#### Deployment 
- run a production build 
- push to github and heroku 

#### To do  
- Figure out why CSP headers are failing in prod

#### Enhancements
- add a loader
- add active class to nav links
- Make sure the error messaging is appropriate for all of the forms 
- add better validation to the username field  
- debounce the search box
- add tests
- add logger

#### Possible Features 
- add a recent button and a most popular button to the home page (this will mean changing the data structure 
- add paging
- username availability check






