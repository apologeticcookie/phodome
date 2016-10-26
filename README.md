# Phodome

> Phodome allows social media users the ability to upload and view photos with a virtual reality feel.

## Team

  - __Product Owner__: Jon Eleiott
  - __Scrum Master__: Riyaz Ahmed
  - __Development Team Members__: John Oksasoglu, Tony Tan

## Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)
    a. [Installing Dependencies](#installing-dependencies)
    b. [Tasks](#tasks)
4. [Team](#team)
5. [Contributing](#contributing)

## Usage

> Start using Phodome [here](https://phodome.herokuapp.com/)

## Requirements

> The app is designed to be used as a single page web application. For development and running the application locally, see instructions below.

## Development

Phodome app is deployed on Heroku, and is built using the following tech stack:

Design language: [Google Material Design](https://material.google.com) (via [Material-UI for React](http://www.material-ui.com/))  
Front-end framework: [React](https://facebook.github.io/react/)  
Web-based VR framework: [Aframe](https://aframe.io/)  
Back-end framework: [Express](https://expressjs.com/)  
Server: [Node](https://nodejs.org)  
Testing Frameworks: [Travis CI](https://travis-ci.org/), [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Karma](https://karma-runner.github.io), [Enzyme](http://airbnb.io/enzyme/)  

The express server is contained in app.js, with the react components contained in the client folder. The test files are seperated neatly into test/client and test/server in the test folders, and the server and db software is contained in the server folder.

Technical work was done to mathematically render the dome positions in the sphere-math folder, and page load speeds were tested via Google PageSpeed Insights, with results placed in the load-speed folder. As a result of page load speed testing, Gzip compression was enabled via the Compression middleware for Express to improve load speeds.

### Installing Dependencies

a) From within the root directory:

```sh
npm install
```

b) Set up local database:
> Download [Postgres App](http://postgresapp.com/)
> Start local database from the Desktop app
> In the database shell, enter 'create database phodome;'

c) Start local instance of the app in the root directory

```sh
node app.js
```

### Roadmap

View the project roadmap [here](https://github.com/apologeticcookie/apologeticcookie/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
