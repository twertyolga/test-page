import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, createRoutesFromChildren, matchRoutes,
    RouterProvider, useLocation, useNavigationType,
} from "react-router-dom"
import * as Sentry from "@sentry/react"

import App from './App.tsx'
import AdditionalPage from "./AdditionalPage.tsx";
import './index.css'

Sentry.init({
    dsn: "https://d4b86ec0973ba637e72ab20249540a64@o4506633876799488.ingest.sentry.io/4506633879355392",
    environment: __APP_ENVIRONMENT__,
    integrations: [
        new Sentry.BrowserTracing({
            // See docs for support of different versions of variation of react router
            // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
            routingInstrumentation: Sentry.reactRouterV6Instrumentation(
                React.useEffect,
                useLocation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes
            ),
        }),
        new Sentry.Replay({
            maskAllText: false,
            blockAllMedia: false,
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    tracesSampleRate: 1.0,
    // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/twertyolga\.github\.io\/test-page/],
    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});
const sentryCreateBrowserRouter =
    Sentry.wrapCreateBrowserRouter(createBrowserRouter);

const router = sentryCreateBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/test",
        element: <AdditionalPage/>,
    },
], { basename: "/test-page" });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
