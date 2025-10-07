export default function Integrations02() {
  const categories = [
    {
      name: "Communication",
      integrations: ["Slack", "Discord", "Teams"],
    },
    {
      name: "Development",
      integrations: ["GitHub", "GitLab", "Bitbucket"],
    },
    {
      name: "Design",
      integrations: ["Figma", "Sketch", "Adobe XD"],
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Integrations
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Works with your workflow
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Connect your favorite apps and services in just a few clicks.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl bg-white dark:bg-slate-800 p-8 ring-1 ring-slate-200 dark:ring-slate-700"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.integrations.map((integration) => (
                    <div
                      key={integration}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 hover:border-blue-500 transition-colors cursor-pointer"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                        {integration[0]}
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {integration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

