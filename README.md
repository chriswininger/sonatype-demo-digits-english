#### sonatype-demo-digits-english

### Description

This is a simple demo to show how numbers can be converted from a descimal representation into strings of English words in JavaScript using a simple React UI.

### Run The Application (local)
1. cd to root directory
2. execute `npm install`
3. execute `npm start`

### Preview The Application (remote)
* I have deployed the application to netlify. You view it by [clicking here](https://cranky-mahavira-383b15.netlify.com/).

### Tests
* Tests are located under `[root]/src/tests/[functionality]` where functionality refers to the structure of our app source (i.e. src/lib in src/tests/lib)
* You can run tests with `npm run test`

### Building
* execute `npm run build`, for release builds make sure to set `production=true` in the environment

### Troubleshooting
* When running tests on OSX if you see an error like `(FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)`, make sure that watchman is installed and up to date. Try running `brew install watchman`.
