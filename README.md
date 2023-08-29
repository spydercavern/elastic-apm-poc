# Elastic APM evaluation for ui and nodejs application

```bash
npm run dev
```


# Usecases

UI -> proxy the tracking request to /tracking api which later sends the data to the actual APM server. this is required in our case as the infra in no publicly accessible.

# NodeJS

Agent is setup at the first step

