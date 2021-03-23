import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://f4961c4c91924b42a890d0174ec44d4c@o553700.ingest.sentry.io/5681366",
  //   integrations: [new Integrations.BrowserTracing()],
  //   release: "1.0.1",
  //   environment: "development-test",
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
