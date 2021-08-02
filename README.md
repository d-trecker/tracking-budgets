# Tracking-Budgets

Student: Dylan Trecker </br>
Deployed Link: https://tracking-budgets.herokuapp.com/ 

## General 
A finance tracker with offline capabilities allowing you to add or subtract funds while offline. 

This application was also converted into a PWA and is available for download on your address bar. 

This project was created using MongoDB, Mongoose. Service Workers and IndexedDB were used for offline capabilities. 

## Table of Contents

- [Setup](#setup)
- [Testing](#testing)
- [Technologies](#technologies)

### Setup
* Start by cloning the repo by using the commands:
* `$ git clone git@github.com:d-trecker/tracking-budgets.git`
* From your root directory use the folloing commands
* `npm i`
* Ensure MongoDb is installed before using. Link below:
https://www.mongodb.com/try

### Testing
To test, use the following command in terminal:
`npm start`

* Navigate to your 'http://localhost:3001/' in your web browser. 

* Once at the webpage, open Dev Tools and click on the Network tab and switch to 'offline'.

* Refresh the page and the page display will presist. 

* Add and subtract funds offline funds. 

* Switch back to online and funds will be deposited or withdrawn. 

* Download the app using the install icon located on the right side of your address bar. 

### Technologies
Created  with: 
* express: ^4.17.1
* mongoose: ^5.13.3
* morgan: ^1.9.1
* compression: ^1.7.4
