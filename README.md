## Links:
Client Deployment: https://swholm19.github.io/full-stack-tffm-project-client/

Database Deployment: https://full-stack-tffm-project-api.herokuapp.com/

GitHub API Code: https://github.com/swholm19/full-stack-tffm-project-api

GitHub Client Code: https://github.com/swholm19/full-stack-tffm-project-client

## What the App Does and How it Works:
The application allows for fantasy football player tracking. You can input your
players from previous years and the system will hold onto them so you can
see who you have on your team and which ones are keepers.

Once you log in, you can set your manager information. Once you have done that
you can add, modify, delete any players. With the players that you do own, you
can assign them to your roster by using the select button.

## Technologies Used:
Front-End: HTML5, SCSS, Bootstrap, jQuery, AJAX, HandleBars

Back-End: Ruby on Rails, Postgresql, RESTful Services

Deployment: GitHub and Heroku

## Unresolved Problems/ Future Work:
-Add new resource table for League information.

-Better automation for when assigning players roster spots, for QB spot filter
down so only QBs you have show as options for that spot.

-Save your roster year to year and be able to pull it back up.

-Seperate league databases so multiple leagues can utilize tool at the same time

## Planning and Development Process:
For this project it took me a little while to find a problem i want to create
an application to help solve. My motivation came from playing in a none
typical fantasy football league where you have keeper players from the year
before so you need to remember who was on your roster from the previous year
to beable to play succesfully in this league. What it came down to was the
league commissioner always ended up with a big excel that he kept and
no one knew if it was completely accurate. That is why i decided to make this
to provide transparency about each managers players and keepers from year
to year, across our entire league.

Once i figured out what i was going to do. Then i created user stories on
what the application was going to need to do to make it at least
useful to our leage in some fashion. Once if figured out my MVP release i,
started to create the Entity Relationship Diagrams (ERD) for how i was going to
structure my database most efficiently, so i could have high performance and
limit the number of API calls i would have to do. Once the ERD was complete
I created wireframes of how i would be presenting the data, and what the user
experience would be like.

Once i got all the preliminary work completed, i started coding. I started
setting up the environments that i would be working in both development and
production and made sure everything was deploying and running smoothly. Then i
began on the API. I used the rails feature to scaffold out my resources.
The template i started with already had a user resource created so i
modified that till it matched my ERD, then i created my second resource
player. Once they were created i linked them one-to-many relationship. After
they were created i made curl-scripts to test the interfaces to make sure they
were working.

Once the API was complete, i began on the front end. I first started with a
quick wireframe in HTML so i had buttons and elements that i could manipulate
to make sure my code was working the way i intended. From there i created
curlscripts to test all of my APIs. Then i started working on all the
authentication code for sign-in, sign-up, sign-out, change-password. Once the
authentication was working, I started with the first section the "Manger Info"
which allowed the user to update all of there user/manager info and display
it in the UI.

The next part was the biggest and most complicated. I started on the player
section, where the manager could CRUD players and assign them to roster spots.
There was a lot of logic to make sure only certain players can go to certain
roster spots and if someone is alreay assigned they cannot be reassigned. In
this section i used a combination of HandleBars and jQuery to manipulate the
UI to present to user the feedback on there actions.

The last part i did was styling, making sure everything looked orginized and
presentable. I also played a round with with all the actions and fixed bugs as
i ran into them.

The application is far from a finished product but it is a first step that
my fantasy league can start using to better help player tracking in our league.

## Wireframes, User Stories:
Wireframe: https://imgur.com/gallery/jpOmujM

User Stories:
As a user, i want to be able to sign into my team page.
As a user, I want to be able to view a single player.
As a user, I want to be able to view all of my players.
As a user, I want to be able to create a new player on my team.
As a user, I want to be able to update an existing player on my team.
As a user, I want to be able to delete a player from my team.
As a user, I want to assign a single player to my team.
As a user, I want to assign multiple players to my team.
