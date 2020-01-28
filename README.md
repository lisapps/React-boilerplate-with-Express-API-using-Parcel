** In testing - please do not use this yet!! **

This was created because I wasn't able to find a boilerplate that met the following criteria:

- A react boilerplate that uses Parcel instead of webpack
- Was extremely minimal and OS agonistic - the opposite of react-boilerplate. (Webpack and it's use of babel aren't OS agnostic)
- Did not include Redux
- Would render React on the Client, and have an express server to call API's for data.
- Used async and hooks in the example files

This is a boilerplate based off the tutorial used here:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

and here:
https://medium.com/@dtkatz/use-the-blazing-fast-parcel-bundler-to-build-and-test-a-react-app-e6972a2587e1

This project installs Jest as well. It doesn't set up Jest to run tests. See the above link for an idea of how to start doing that.

This boilerplate does not include Redux or other state management frameworks since React Hooks and Context allow some projects to forego that.

To install the project:
navigate to project directory.

command line:
This is a modified version of what you get by installing npx express-generator api

\$ cd api
\$ npm install

\$ cd ../client

\$ npm install

(if you want to use prettier code formatter make sure the code below is in your package.json file in the client folder.)

Put the following into your package.json (add format line to scripts if scripts parameter is already in there. These settings allow correct formatting of JSX for react code formatting.):
"scripts": {
"format": "prettier --write \"src/\*_/_.{js,jsx}\"",
},

## Development:

To run the project in development you must start the server AND the client in 2 terminal windows:

terminal 1:
cd api
npm run dev

terminal 2:
cd client
npm run dev

(npm start is be run after setting up a production build to run from the public folder. Instructions on setting that up are beyond the scope of this readme.)

## Test:

npm run test

## Production:

???

cd api
npm start
