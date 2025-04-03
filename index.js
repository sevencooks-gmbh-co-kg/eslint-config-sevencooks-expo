const expoConfig = require("eslint-config-expo/flat");
const coreConfig = require("./config/core.js");
const reactConfig = require("./config/react.js");
const formatjsConfig = require("./config/formatjs.js");
const testingConfig = require("./config/testing.js");

module.exports = [...expoConfig, ...coreConfig, ...reactConfig, ...formatjsConfig, ...testingConfig];
