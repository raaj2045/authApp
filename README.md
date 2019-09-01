# authApp

An internshala assignment to build an authentication application using JWT auth strategy with React JS and Django Stack.

## Dependencies and Tech Stack

Django Rest Framework is used to be the top level layer of the backend to expose API's. The Django REST framework JWT gives us the ability to use JWT tokens for our app, and Django CORS headers is necessary to avoid CORS issues while communicating with the frontend. For the front-end ReactJS is used along with material ui theme integrated through materialize css.

### Requirements

1. Python 3
2. Node JS

## Run the app by following steps:

To start the server:

1. git clone https://github.com/raaj2045/authApp
2. cd into authApp.
3. open terminal in the directory and run pip install pipenv.
4. run the command pipenv shell.
5. run the command pip install to install the server dependencies.
6. run python manage.py runserver to start the server.
7. cd into client.
8. run npm install to install frontend dependencies.
9. run npm start to start the application and visit http://localhost:3000
