# Teamway.PersonalityTest

A sample project for a personality test created for Teamway.

## Project structure
- **Teamway.PersonalityTest.UI** contains UI design
- **teamway_pt_web_app** contains frontend application in React
- **Teamway.PersonalityTest.WebApp** contains backend web application developed in C#
- **Teamway.PersonalityTest.TestApp** contains backend test application in C#

## How to Run
### Frontend
Go into `teamway_pt_web_app` directory.
#### `npm start:development`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Backend
Open `Teamway.PersonalityTest.sln` in Visual Studio (preferrably > 2019) and run the application `Teamway.PersonalityTest.WebApp`
The CORS policy in place allows any origin to connect. For now, I'll keep it in this way and fix the origin at the time of deployment.

## How to run Tests
### Frontend
Go into `teamway_pt_web_app` directory.
### `npm test`

Launches the test runner in the interactive watch mode.\

### Backend
Open `Teamway.PersonalityTest.sln` in Visual Studio (preferrably > 2019) and run the application `Teamway.PersonalityTest.TestApp`

## Copyrights
All the coding is done by myself so I am the sole owner. Images, fonts and other assets are taken from the internet and their rights belong to their owners.
