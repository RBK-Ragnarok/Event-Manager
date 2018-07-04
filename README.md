# Event-Manager
Create or attend different kind of events

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Table of Contents

1. [Getting Started](#getting-started)
    1. [Prerequisites](#prerequisites)
    1. [Installation](#installation)
1. [File Hieghrarcy](#file-hieghrarcy)
1. [Delopyment](#delopyment)
1. [Built With](#built-with)
1. [Authors](#authors)

### Prerequisites
Make sure you installed the following technologies locally:

    React using webpack
    Nodejs
    Express
    Mongodb

### Installation

 - Get a copy of the repo
```
$ git clone https://github.com/Sarakoki/Event-Manager
```
 -  install all dependencies found in 'packkage.json' file
```
$ npm install
``` 
```
$ mongod
```   
```
$ npm run dev
```

## File Hieghrarcy
Event-Manager
        - server
          - index.js
          - routes.js
          - util.js
        - database-mongo
          - Comment.js
          - event-handler.js
          - Event.js
          - index.js
          - Message.js
          - user-handler.js
          - User.js
        - react-client
          - dist
            - photos
            - index.html
          - src
            - components
              - About.jsx
              - Comment.jsx
              - CreateEvent.jsx
              - EventInfo.jsx
              - EventItem.jsx
              - EventList.jsx
              - Events.jsx
              - EventTimer.jsx
              - Home.jsx
              - login.jsx
              - Map.jsx
              - NavBarComponent.jsx
              - Profile.jsx
              - Signup.jsx
            - routes
              - AppRouter.jsx
            - index.jsx
        - tests
          - components
            - EventList.js
            - Home.js
            - Login.js
          - database
            - EventTest.js
            - UserTest.js
          - serverTest.js
          - test.js
        - package.json
        - README.md

## Delopyment
You can see a demo of the app in [Heroku](https://guarded-reaches-36133.herokuapp.com/)

## Built With
- [ReactJS](https://reactjs.org/docs/hello-world.html) - Front-end framework
- [Nodejs/Express](https://nodejs.org/en/docs/) - the server/server framework
- [MongoDB/mongoose](https://docs.mongodb.com/) - Database and ORM used
- [npm](https://www.npmjs.com/) - Dependency Management

## Authors
- [Abduallah AlRamahi](https://github.com/abdallahalramahi) - Product Owner.
- [Belal Faouri](https://github.com/BelalFaouri) - Scrum master.
- [Sara Koki](https://github.com/Sarakoki) - Team member.
- [Lena Salamat](https://github.com/lenaSalamat) - Team member.