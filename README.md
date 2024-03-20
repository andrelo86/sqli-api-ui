# SQLI CODE CHALLENGE

# API

## stack
- Docker
- Javascript
- npm  
- jest  
- superagent  
- eslint  
- allure  

This repository contains automated tests for a RESTfull api  
It's a basic and small framework just for challenge purposes. The same could be extended and improved as project requirements.  
The contained automated test cases are for PET and USERS.
Test data consumed by the test cases are provided by running local swagger application.
I select the mentioned stack due to it's a simply and powerfull stack to start to build a robust automation framework.

# API

# setup
1. Checkout repository  
```git@github.com:andrelo86/sqli-api-ui.git```
2. Install **npm** if you don't have it installed
3. At project API root level execute: ```npm install```
4. Run docker-compose build
5. Run docker-compose up -> All tests will be expected


# UI

## stack
- Docker
- Javascript
- npm  
- cypress

This repository contains automated tests for a UI
This is a basic and small framework just for challenge purposes. The same could be extended and improved as project requirements.  

# setup
1. Checkout repository  
```git@github.com:andrelo86/sqli-api-ui.git```
2. Install **npm** if you don't have it installed
3. At project UI root level execute: ```npm install```
4. At project root level execute: ```npx cypress open```
