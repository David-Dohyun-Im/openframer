export default function Integrations01() {
  const integrations = [
    { name: "Slack", category: "Communication" },
    { name: "GitHub", category: "Development" },
    { name: "Figma", category: "Design" },
    { name: "Stripe", category: "Payments" },
    { name: "Salesforce", category: "CRM" },
    { name: "Shopify", category: "E-commerce" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Connect with your favorite tools
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Integrate seamlessly with the tools you already use and love.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:border-blue-500 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-2xl font-bold text-slate-600 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {integration.name[0]}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {integration.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {integration.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
              View all integrations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

