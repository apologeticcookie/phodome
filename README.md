# Phodome
[![Stories in Ready](https://badge.waffle.io/apologeticcookie/apologeticcookie.png?label=ready&title=Ready)](https://waffle.io/apologeticcookie/apologeticcookie)

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

### Front-End Structure

All client code is located inside the `/client` folder. `/client/src/` contains all JavaScript modules (React components and otherwise) that are eventually bundled, by Webpack, into `/client/build/bundle.js`. `/client/src/app.js` serves as the entry point used by Webpack when bundling. `/client/src/components` contains all of the project's React components, while `/client/src/util` contains non-React modules (which is currently only `sphereMath.js`, used for calculating photo positions).

`/client/index.html` is the app's welcome page (completely static), while `/client/app.html` is the actual Phodome VR application that uses `/client/build/bundle.js`. All other static assets are inside `/client/assets`.

#### React Components

Phodome consists of two primary components: the non-VR `<Sidebar>`, which renders the sidebar for user actions (going home and uploading photos), and `<PhodomeScene>`, which contains the entirety of the VR application. `<PhodomeScene>` itself then contains a `<Camera>`, `<Sky>`, and `<Dome>`. `<Dome>` is the container for all `<Image>` components, and `<Dome>` is what makes use of the `sphereMath` module to calculate `<Image>` positions.

### Front-End Testing

Mocha, Chai, and Enzyme are the core of Phodome's front-end testing. Enzyme allows us to selectively render parts of our application and test our React components, but because VR depends on several browser APIs that do not exist in Node, it is necessary to use Karma to run our front-end tests in a real browser environment (Chrome, specifically) rather than in Node. There is additional config inside `.travis.yml` and `karma.conf.js` to ensure this runs smoothly with Travis; see comments inside those files for further explanation.

### Back-End Structure

The structure and the idea of the server is a mix of the implementation of live server and what we have learnt so far during our mini sprints at hack reactor.

It uses express framework with middlewares like boody-parser, formidable, gm, node-static.

All the server files are under /server
/config - holds all the configuration files . since the server here mainly a file server this holds information on the type of files it has to hold , the maximum file server.

/db/models - holds the db information of the URL and Photo table

/db/controllers - For as for now the controller inserts photo information every time a post request is made.

/helpers/fileHelper.js - initURL .. sets up the retun file object for the response validate .. checks if the file is with in the limits of the configuration defined.

/helpers/requestHandler.js -- holds the route path for all the various end points.

/helpers/uploadHandler.js -- holds the actual implementation for the get and post post uses formidable library for recieving files. 
At first the file chunks are saved in the tmp folder and then moved to actual public/images

### Back-End Testing

Server testing is basically endpoint testing , tests have been added for various get requests.
For some reason the post doesnt work with tests . But it works using postman app and from the client side library.



### Installing Dependencies

a) From within the root directory:

```sh
npm install
```

A `postinstall` npm script will ensure that Webpack is run and a production bundle.js is generated as soon as install completes.

b) Set up local database:
> Download [Postgres App](http://postgresapp.com/)
> Start local database from the Desktop app
> In the database shell, enter 'create database phodome;'


### Running the Application Locally (for Development)

a) Start local instance of the app in the root directory

```sh
npm run start
```

b) In another terminal window, start Webpack watching your files

```sh
npm run build watch
```

c) To run client tests, in another terminal window, start Karma

```sh
npm run test:client
```
OR
```sh
npm run test:client:watch
```

d) To run server tests, in another terminal window, start Mocha

```sh
npm run test:server
```


### Roadmap

View the project roadmap [here](https://github.com/apologeticcookie/apologeticcookie/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
