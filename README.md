# README

A React front end with a Rails backend serving up assets through webpacker for the state of california CWDS project.

## System 
Ruby version: `2.3.1`
Rails version: `5.0.1`

## Configuration 
Make sure homebrew is up to date and xcode is installed. 
Brew update 
Make sure XCode is installed. 
`xcode-select --install`

## initialization

run the command 'npm run dev' from the root folder. This will perform the following actions:
 - `bundle install`
 - `npm install `
 - `compiles webpack assets`
 - `starts assets` 
 - `starts rails server`

The App is running on 
`localhost:5000`. 

to view the facilities demo webapp, go to
`localhost:5000/facilities` .

## Testing 

### Karma details/instructions
TODO

 ### Rspec details/instructions
 rspec tests live in the root spec/ folder. you can run all tests with either of the following commands
 
 `npm run spec`
 `rspec spec`


## Deployment 
TODO: docker link
