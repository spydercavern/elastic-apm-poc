import { init as initApm } from "@elastic/apm-rum";

export const apm = initApm({
  serviceName: "fsg-ui-app",
  serverUrl: "/tracking",
  serviceVersion: "",
  environment: "development",
  logLevel: "debug",
});

apm.addFilter(function (payload) {
  console.log(`payload data ${JSON.stringify(payload)}`);
  // redact any sensitive data here
  return payload;
});
