#Creating a node project that uses NPM.

Run inside your project's root directory:
`$ npm init`

NPM stands for Node Packaged Modules. It's a way to install third party libraries into your application.

At initialization, NPM will ask set up questions. (This can be bypassed by setting up your `package.json` manually.)
    > Hit `Return` key to take the default settings (in parentheses).
    > Creates package.json for node app.

package.json
    > Stores configs, scripts, dependencies and libraries here.

JSON - JavaScript Object Notation
    > Similar to the way we define objects in JS.
    > Key in JSON must be wrapped in double-quotes, which isn't a requirement in JS.
    > Values can be strings, objects numbers, anything.

Install node-persist to save data locally - allows us to store variables on our machine and get them back later. Big part of password mgr app. Allows us to store passwords.

Install modules with NPM. 
`$ npm install node-persist@0.0.6 --save`
    > This will install node-persist version 0.0.6 in app only (not globally) and will save the dependency into package.json under dependencies for future use.
    > First time running `npm install` Will create new directory called `node_modules`.
    > Important to specify version numbers to prevent unnecessary/unexpected updates.

node_modules directory shows one directory for each npm package installed.

Create script to start the app.
    > Create a new file called `app.js`. This will be the primary file that will initialize the running of the app.
    > This allows us to start the app with `$ node app.js`

Create `start` script in package.json.
    > Add `"start": "node app.js"` to scripts section.
    > Allows us to run `node app.js` with simple `npm start` command.
    > We are essentially registering the "start" command for npm and providing the code to run when using "start".

Can always create `package.json` manually without running `npm init`. `npm init` is only a convenience but isn't necessary.

