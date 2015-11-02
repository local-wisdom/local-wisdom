# Local Knowledge

Project description here..


## Running the project

To install dependencies run:
```
npm i
```

For a development server you will need to run:
```
npm start
```

If you are building in dev env run:
```
npm run build
```
Check the app at http://localhost:8080

## API server

The API server expects rethinkdb to be installed and running. To start up your rethinkdb run:
```
rethinkdb --http-port 8000
```

To run the api server:

```
babel-node server.js
```

For testing of the API server there is a [Postman](https://www.getpostman.com/) collection available [here](https://www.getpostman.com/collections/01029afe445a37e300d2).
