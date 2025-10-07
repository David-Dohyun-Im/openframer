export default function Features02() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Track every metric that matters with real-time dashboards and insights.",
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with built-in collaboration tools.",
    },
    {
      title: "API Access",
      description: "Full API access to integrate with your existing tools and workflows.",
    },
    {
      title: "Custom Integrations",
      description: "Connect with thousands of apps or build your own integrations.",
    },
    {
      title: "Automated Workflows",
      description: "Automate repetitive tasks and focus on what matters most.",
    },
    {
      title: "Enterprise Ready",
      description: "Scale confidently with enterprise-grade infrastructure and support.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to ship faster
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Build and scale your applications with confidence using our comprehensive feature set.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-9">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

