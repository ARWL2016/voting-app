### Voting App 

#### Run in dev mode
- `npm run build:watch` - compile Angular app with webpack 
- `npm run server` - run node backend
- OR `npm run dev` - runs previous two commands in parallel processes
- nb: no local database needed; dev environment connects to mlab 

#### Deployment 
- run a production build 
- push to github and heroku 

#### To do  
- make design responsive 
- move vote buttons into table
- front end checklist
- add proper error handling to the API 
- prepare code base for AOT compilation 
- add tests
- add logger
- debounce the search box
- add documentation 
- time out requests that take too long

#### UI Improvements 
- Make sure the error messaging is appropriate for all of the forms 
- add better validation to the username field (max length) 
- add a modal to the delete topic function
- don't show chart if there is no data

#### Possible Features 
2.	add a recent button and a most popular button to the home page (this will mean changing the data structure 
3.	add paging
4. username availability check






