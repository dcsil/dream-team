# Dreamtune
> Liscensing lead generation so easy, you can do it in your sleep

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/dcsil/dreamtune)
![CI](https://github.com/dcsil/dream-team/workflows/ReactAppCI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/7f87a22ae67adec9e7aa/maintainability)](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7f87a22ae67adec9e7aa/test_coverage)](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db/test_coverage)

[Link to Production Web app](https://dreamtune-cdf8a.web.app/)

[Link to CodeClimate](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db) - Test Coverage and Maintability

### First time using the repo
Open your terminal (CMD + Space and type terminal)
`git clone https://github.com/dcsil/dream-team.git` 

`cd dream-team/app` 

`./bootstrap.sh` (only needs to be run the first time after you clone the repo to install dependencies)

`yarn start` (starts the local webserver)

Go to the [local website](http://localhost:3000/) (should open automatically) 

### Continued developement workflow

`cd dream-team/app` 

To add and edit React components, see the files in `app/src/components`

`yarn start` (starts the local webserver that automatically loads your changes to local files)

if you are missing dependencies and the webserver doesn't start try `yarn install` and retry `yarn start`

When you are done using the webserver, open terminal and press `CTL+C` at the same time to shutdown the server


### Instructions to deploy the app manually

The app is already being deployed automatically using Github actions whenever updates are pushed to `master`, but here is how to do it manually. 

First, make sure that the app is passing automated tests using `npm run test-once`, if not, you should not manually deploy. 

`yarn build`

`firebase login` (only need to do the first time you to authorize your computer) 

if you want to try the production build out locally do `firebase serve` and view [localhost:5000](http://localhost:5000)

to deploy to the production website `firebase deploy`

see [the production website](https://dreamtune-cdf8a.web.app/) to view your changes

if you need to rollback, you can choose a previous build on the [Firebase Hosting Console](https://console.firebase.google.com/u/0/project/dreamtune-cdf8a/hosting/main)

### Testing
> **As you add components and functionality, please add tests for the new code**

We have been following the [Create React App documentation](https://create-react-app.dev/docs/running-tests/) for testing. For more information about the Jest framework we are using, check out the [online docs](https://jestjs.io/en/).

`yarn test`: run tests in watch mode, where changes are automatically detected and tested as you develop run

`yarn test-once`: runs the test suite only once and creates a coverage report

Tests are in app/src next to the components that they are testing. For example, `App.js` is tested using the `App.test.js` file. Jest automatically looks for these files and runs the tests. 

**Mocking Firestore with Jest**

Read [this article](https://medium.com/stories-from-upstatement/jest-mocks-roasting-on-an-open-firestore-36fa55b76953) and take a look at the README from package we are using called [firestore-jest-mock](https://github.com/Upstatement/firestore-jest-mock).

### How to use git for 454 students
Configure your credentials 

`git config --global user.name "<FIRST> <LAST>"`

`git config --global user.email "<EMAIL USED WITH GITHUB>"`

Edit files

Stage your changes `git add .`

Commit your changes to local repo `git commit -m "<describe your changes here>`

Push your changes to the remote repo (github) `git push`
