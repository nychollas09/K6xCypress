const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      "https://3s3780ve08.execute-api.us-east-2.amazonaws.com/default/api-producer",
  },
});
