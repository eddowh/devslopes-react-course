# Installing & Running

If you wish to clone the repository, given the submodules, the `--recursive` option needs to be specified:

`$ git clone --recursive git@github.com:eddowh/devslopes-react-course.git`

## No Back-End Interaction

The following folders/projects are front-end only:

- forms
- ingredients
- routing
- skeleton

### Running

To run it, simple go to a directory and run a virtual server.

The easiest way to run a virtual server is to install `http-server` from `npm`:

```
$ npm -g install http-server
$ cd skeleton
$ http-server -p 8000
```

Your React application is now running at `http://localhost:8000`! Feel free to change the port number.

## With Back-End Interaction

The following folders/projects require back-end interaction for data exchange, and relies on the Flux/Reflux architecture:

- http-fetch (interacts with submodule `simple-express-server/server.js`)
- product-shop-app (interacts with `simple-express-server-subscribers/server.js`)

### Running

1. First, run the React front-end with `http-server`:

    ```
    $ cd <proj_folder>
    $ http-server -p 8000  # feel free to modify
    ```

2. Then, navigate to one of the backend server folders and run the server:

    ```
    $ cd simple-express-server  # or simple-express-server-subscribers
    $ node server.js
    ```

3. Your back-end server is now avaiable at `http://localhost:6069` and is ready to interact with your React front-end at `http://localhost:8000` (or whatever port number specified)!


# Tools

- [**Browserify**](http://browserify.org/): allows the browser to use NPM modules
- [**Babel**](https://babeljs.io/): compiles ES6/JSX into browser-readable JavaScript
- [**Babel-React-Preset**](https://www.npmjs.com/package/babel-preset-react): tells Babel how to compile JSX
- [**Babelify**](https://github.com/babel/babelify): allows you to use Babel with Browserify
- [**Watchify**](https://github.com/substack/watchify): watches for changes and instantly starts compiling
- [**Bootstrap**](http://getbootstrap.com/): front-end framework to make things look more aesthetically pleasing with minimal effort
- [**Postman**](https://www.getpostman.com/): API inspection and testing
- [**React Developer Tools**](https://github.com/facebook/react-devtools): an extension that allows inspection of React component hierarchy in Chrome Developer Tools
