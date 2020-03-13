[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/dcsil/dreamtune)
![CI](https://github.com/dcsil/dream-team/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/7f87a22ae67adec9e7aa/maintainability)](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7f87a22ae67adec9e7aa/test_coverage)](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db/test_coverage)

[Link to Production Web app](https://dreamtune-cdf8a.web.app/)

[Link to CodeClimate](https://codeclimate.com/repos/5e52ed5d4c82bf01780003db) - Test Coverage and Maintability

### First time using the repo
Open your terminal (CMD + Space and type terminal)
`git clone https://github.com/dcsil/dream-team.git` 

`cd dream-team/app` 

`./bootstrap.sh` (only needs to be run the first time after you clone the repo to install dependencies)

`npm start` (starts the local webserver)

Go to the [local website](http://localhost:3000/) (should open automatically) 

### Continued developement workflow

To add and edit React components, look at `app/src/components`

`npm start` (starts the local webserver that automatically loads your changes to local files)

if you are missing dependencies and the webserver doesn't start try `npm install` and retry `npm start`


### Instructions to deploy the app manually

The app is already being deployed automatically using Github actions whenever updates are pushed to `master`, but here is how to do it manually. 

First, make sure that the app is passing automated tests using `npm test`, if not, you should not manually deploy. 

`npm run build`

`firebase login` (only need to do the first time you to authorize your computer) 

if you want to try the production build out locally do `firebase serve` and view [localhost:5000](http://localhost:5000)

to deploy to the production website `firebase deploy`

see (the production website)[https://dreamtune-cdf8a.web.app/] to view your changes

if you need to rollback, you can choose a previous build on the (https://console.firebase.google.com/u/0/project/dreamtune-cdf8a/hosting/main)[Firebase Hosting Console]

### How to use git for 454 students
Edit files

Stage your changes `git add .`

Commit your changes to local repo `git commit -m "<describe your changes here>`

Push your changes to the remote repo (github) `git push`
