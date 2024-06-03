export default [
  {
    id: "cloud-monitoring",
    title: "Cloud monitoring",
    description: "Cross-platform and multi-cloud visibility and analytics.",
    "docs": [
      {
        linkText: "Monitor Amazon Web Services (AWS)",
        description: "Learn how to monitor AWS logs (VPC Flow and S3 access) and metrics (billing and EC2).",
        id: "enObservabilityMonitorAwsElasticAgent"
        // url: "monitor-aws-elastic-agent.html",
      },
      {
        linkText: "Monitor Microsoft Azure",
        description: "Learn how to monitor Azure billing metrics and activity logs.",
        id: "enObservabilityMonitorAzureElasticAgent"
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
        id: "enObservabilityCiCdObservability"
        // "url": "ci-cd-observability.html",
      },
      {
        linkText: "ECS logging",
        description: "Leverage the Elastic Common Schema logging libraries to automatically link application traces to their corresponding logs.",
        id: "enObservability"
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
        id: "enObservability",
        // url: "{blog-ref}reduce-mttd-ml-machine-learning-observability",
      },
      {
        linkText: "APM Correlations",
        description: "Automatically identify the probable causes of slow or failed transactions.",
        id: "enObservability",
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
        id: "enObservabilitySyntheticsJourneys",
        // url: "synthetics-journeys.html",
      },
      {
        linkText: "User experience",
        description: "Learn how to track Core Web Vitals and how to use them to quantify the real-world user experience.",
        id: "enObservabilityUserExperience",
        // url: "user-experience.html",
      }
    ]
  }
]