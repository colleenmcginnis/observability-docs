export default [
  {
    id: "cloud-monitoring",
    title: "Cloud monitoring",
    description: "Cross-platform and multi-cloud visibility and analytics.",
    "docs": [
      {
        linkText: "Monitor Amazon Web Services (AWS)",
        description: "Learn how to monitor AWS logs (VPC Flow and S3 access) and metrics (billing and EC2).",
        slug: "/en/observability/monitor-aws-elastic-agent"
        // url: "monitor-aws-elastic-agent.html",
      },
      {
        linkText: "Monitor Microsoft Azure",
        description: "Learn how to monitor Azure billing metrics and activity logs.",
        slug: "/en/observability/monitor-azure-elastic-agent"
        // url: "monitor-azure-elastic-agent.html",
      }
    ]
  },
  {
    id: "dev-ops",
    title: "DevOps",
    description: "Observe your entire software lifecycle — from development to production.",
    "docs": [
      {
        linkText: "CI/CD",
        description: "Get better visibility into your CI/CD pipelines.",
        slug: "/en/observability/ci-cd-observability"
        // "url": "ci-cd-observability.html",
      },
      {
        linkText: "ECS logging",
        description: "Leverage the Elastic Common Schema logging libraries to automatically link application traces to their corresponding logs.",
        slug: "/en/observability"
        // url: "{ecs-logging-ref}/intro.html",
      }
    ]
  },
  {
    id: "ai-ops",
    title: "AIOps",
    description: "Automate anomaly detection and accelerate root cause analysis.",
    "docs": [
      {
        linkText: "Root cause analysis with logs",
        description: "Learn about Elastic’s artificial intelligence for IT operations and machine learning capabilities for root cause analysis.",
        slug: "/en/observability",
        // url: "{blog-ref}reduce-mttd-ml-machine-learning-observability",
      },
      {
        linkText: "APM Correlations",
        description: "Automatically identify the probable causes of slow or failed transactions.",
        slug: "/en/observability",
        // url: "{blog-ref}apm-correlations-elastic-observability-root-cause-transactions",
      }
    ]
  },
  {
    id: "user-experience",
    title: "User experience",
    description: "Measure, gauge, and improve your end users’ experience.",
    "docs": [
      {
        linkText: "Scripting browser monitors",
        description: "Simulate critical user workflows on a regular interval to catch bugs before your users report them.",
        slug: "/en/observability/synthetics-journeys",
        // url: "synthetics-journeys.html",
      },
      {
        linkText: "User experience",
        description: "Learn how to track Core Web Vitals and how to use them to quantify the real-world user experience.",
        slug: "/en/observability/user-experience",
        // url: "user-experience.html",
      }
    ]
  }
]