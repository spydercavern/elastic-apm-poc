import { init as initApm } from "@elastic/apm-rum";

export const apm = initApm({
  serviceName: "fsg-ui-app",
  serverUrl:
    "https://708ad4887d4544a492efcb1aed995d37.apm.us-central1.gcp.cloud.es.io:443",
  serviceVersion: "",
  environment: "development",
  logLevel: "debug",
});

apm.addFilter(function (payload) {
  console.log(`payload data ${JSON.stringify(payload)}`);
  // redact any sensitive data here 
  return payload;
});
