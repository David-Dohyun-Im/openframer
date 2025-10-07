export default function Integrations03() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            100+ Powerful Integrations
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Connect all your tools in one place. No coding required.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-slate-950 px-4 text-sm text-slate-500 dark:text-slate-400">
                Popular Integrations
              </span>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {[
              "Slack",
              "GitHub",
              "Figma",
              "Notion",
              "Linear",
              "Stripe",
              "Discord",
              "Zapier",
              "Airtable",
              "Webflow",
              "Shopify",
              "HubSpot",
            ].map((integration) => (
              <div
                key={integration}
                className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {integration}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="rounded-md bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
              Request an integration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

