export default {
  title: "What do you want to observe?",
  tabIcons: true,
  thumbnailImages: true,
  tabs: [
    {
      title: "APM",
      id: "apm",
      icon: "apmApp",
      items: [
        {
          title: "Monitor application performance",
          description: "Learn how to collect and visualize APM data with Elastic.",
          slug: "/en/observability/traces-get-started",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/traces-get-started.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Monitor application logs",
          description: "Correlate application logs and traces for increased visibility into your services.",
          slug: "/en/observability/application-logs",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/application-logs.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Integrate with OpenTelemetry",
          description: "Reuse existing OTel instrumentation to easily send observability data to Elastic.",
          pageId: "enObservabilityOpenTelemetry",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/open-telemetry.png",
            alt: ""
          },
          footer: true
        }
      ]
    },
    {
      title: "Infrastructure",
      id: "infrastructure-monitoring",
      icon: "metricsApp",
      items: [
        {
          title: "Get started",
          description: "Learn how to monitor logs and infrastructure metrics from systems and services across your organization.",
          slug: "/en/observability/logs-metrics-get-started",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/ingest-logs-metrics-uptime.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Integrations",
          description: "Stream in and visualize logs, metrics, traces, content, and more from all the sources in your ecosystem.",
          slug: "/en/observability",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/integrations.png",
            alt: ""
          },
          footer: true
        },
      ]
    },
    {
      title: "RUM",
      id: "real-user-monitoring",
      icon: "rumApp",
      items: [
        {
          title: "User experience",
          description: "Quantify and analyze the perceived performance of your web application.",
          slug: "/en/observability/user-experience",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/user-experience.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Monitor your users",
          description: "Deploy the Elastic APM Real User Monitoring (RUM) JavaScript Agent to add detailed performance metrics and error tracking of your web applications.",
          pageId: "enApmAgentRumJsIntro",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/rum-js-intro.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Integrate with your favorite framework",
          description: "Easily integrate the RUM agent with React, Angular, and Vue applications.",
          pageId: "enApmAgentRumJsFrameworkIntegrations",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/framework-integrations.png",
            alt: ""
          },
          footer: true
        }
      ]
    },
    {
      title: "Logs",
      id: "log-monitoring",
      icon: "logsApp",
      items: [
        {
          title: "Get started",
          description: "Learn how to monitor logs and metrics from systems and services across your organization.",
          slug: "/en/observability/logs-metrics-get-started",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/ingest-logs-metrics-uptime.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Integrations",
          description: "Stream in and visualize logs, metrics, traces, content, and more from all the sources in your ecosystem.",
          slug: "/en/observability",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/integrations.png",
            alt: ""
          },
          footer: true
        },
        // {
        //   title: "",
        //   description: "",
        //   pageId: "",
        //   image: {
        //     url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/",
        //     alt: ""
        //   }
        // }
      ]
    },
    {
      title: "Synthetics",
      id: "synthetic-monitoring",
      icon: "logoUptime",
      items: [
        {
          title: "Get started",
          description: "Choose a method and create your first synthetic monitor.",
          slug: "/en/observability/synthetics-get-started",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/synthetics-get-started.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Write a synthetic test",
          description: "Write a synthetic test to check critical actions that an end-user might make on your site.",
          slug: "/en/observability/synthetics-create-test",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/synthetics-create-test.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Analyze data from synthetic monitors",
          description: "See a high-level overview of your service's availability, and dig into details to diagnose what caused downtime.",
          slug: "/en/observability/synthetics-analyze",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/synthetics-analyze.png",
            alt: ""
          },
          footer: true
        }
      ]
    },
    {
      title: "Universal profiling",
      id: "universal-profiling",
      icon: "profilingApp",
      items: [
        {
          title: "Universal Profiling",
          description: "Inspect, filter, and compare your data to gain visibility and optimize performance.",
          slug: "/en/observability/universal-profiling",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/universal-profiling.png",
            alt: ""
          },
          footer: true
        },
        {
          title: "Get started",
          description: "Set up Universal Profiling in Elastic Cloud and install your host-agent.",
          slug: "/en/observability/profiling-get-started",
          image: {
            url: "https://www.elastic.co/guide/en/observability/current/landing-page/images/profiling-get-started.png",
            alt: ""
          },
          footer: true
        }
      ]
    }
  ]
}