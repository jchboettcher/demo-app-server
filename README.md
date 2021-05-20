# Demo App Backend

React demo app using Apollo GraphQL client-server interaction. This repository is the source code for the backend. The website is entirely based on the [World Health Organization website](https://www.who.int/). It is meant as a demo app for showcasing my skills using React, Apollo GraphQL, and PostgreSQL.

Backend structure consists of a set of users and a database of vaccines. Users have a name, email, and password, and in order to view the vaccines, you have to be logged in. The website will store your token in localstorage so even if you navigate away and come back, you'll remained logged in. Logging out will remove this token and return you to the unauthorized homepage. Passwords are hashed and compared using bcrypt, and tokens are created and decoded using jsonwebtoken.

To connect to your own database, run ```npm run copy-env``` in the terminal and fill in the appropriate credentials.