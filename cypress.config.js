const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  video: false,
  defaultCommandTimeout: 31000, // Add this line to set the timeout
  
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {// implement node event listeners here
},
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com' 
    },
});
