import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3d9c795c3926249ff40c5d804bcd12f0@o4507459150872576.ingest.de.sentry.io/4507459152445520",
  tracesSampleRate: 1,
  debug: false,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [Sentry.replayIntegration()],
});
