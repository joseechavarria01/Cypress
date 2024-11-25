import { defineConfig } from "cypress";

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require('@cypress/browserify-preprocessor');

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };
      on("file:preprocessor", cucumber(options));
    },
  },
});
