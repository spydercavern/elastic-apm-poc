const nodeApm = require("elastic-apm-node");

const apm = nodeApm.start({
  serviceName: "fsg-ui-nodejs",
  secretToken: "v4rsVAkVeyuIESyCOY",
  serverUrl:
    "https://708ad4887d4544a492efcb1aed995d37.apm.us-central1.gcp.cloud.es.io:443",
  environment: "development",
  logLevel: "debug",
});

module.exports = apm;
