** In testing - please do not use this yet!! **

This is a boilerplate based off the tutorial used here:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

and here:
https://medium.com/@dtkatz/use-the-blazing-fast-parcel-bundler-to-build-and-test-a-react-app-e6972a2587e1

This project installs Jest as well. This does not include Redux or other state management frameworks since React Hooks and Context allow some projects to forego that.

To install the project:
navigate to project directory.

command line:
$ npx express-generator api
$ cd api
\$ npm install

$ cd ../
$ mkdir client
\$ cd client

\$ npm install

(if you want to use prettier code formatter make sure the code below is in your package.json file.)

Put the following into your package.json (add format line to scripts if scripts parameter is already in there):
"scripts": {
"format": "prettier --write \"src/\*_/_.{js,jsx}\"",
},

## Development:

To run the project in development you must start the server AND the client in 2 terminal windows:

terminal 1:
cd api
npm start

terminal 2:
cd client
npm run dev

## Test:

npm run test

## Production:
