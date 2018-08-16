<a href="http://codeclimate.com/github/ca-cwds/CALS"><img src="http://codeclimate.com/github/ca-cwds/CALS/badges/gpa.svg" /></a>
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8cf2373d85364e24976380e4e5a10cce)](https://www.codacy.com/app/CALS/CALS?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ca-cwds/CALS&amp;utm_campaign=Badge_Grade)

A React front end with a Rails backend serving up assets through webpacker for the state of california CWDS project.

## System
Ruby version: `2.5.1`

Rails version: `5.1.6`

Node version: `>= 8.11.3`

Yarn version: `>= 1.7.0`

## Configuration
Make sure homebrew is up to date and xcode is installed.
`Brew update`

Make sure XCode is installed.
`xcode-select --install`

## Initialization

run the command:
`yarn run dev-build`

from the root folder. This will perform the following actions:
 - `bundle install`
 - `yarn install packages`
 - `compiles webpack assets`
 - `starts assets`
 - `starts rails server`

The App is running on
`localhost:5000`.

to view the facilities demo webapp, go to
`localhost:5000/facilities` .

assets compiled via webpack live on:
`localhost:5080`

## REDIS
NOTE: it is also important to also have redis server running. Start server with
`redis-server`

if redis is not installed, enter the following command from terminal:
`brew install redis `

this command will install all necessary redis files.


## Testing

to run linting on the project:

`yarn lint`

### run all tests instructions
to run all tests and output code coverage:

`yarn all-tests`

### Karma tests instructions
To run the karma tests, from the root folder run:
`yarn karma` (with reports), `yarn karma-ci` (without reports)

this command will run the automated tests and open a browser with the results.

### Rspec tests instructions
 rspec tests live in the root spec/ folder. you can run all tests with either of the following commands

 `yarn spec`
 `rspec spec`


## Deployment
see docker wiki

## Content permission logic
The structural interface of the service contains the array of `roles` and the array of `permissions`. 
The logged in user account has to have one of the listed `roles` or one of the listed `permissions` to see the particular functional button.
If both `roles` and `permissions` arrays of the service are empty/not authorized, than the functional button will not be showed to any user.
