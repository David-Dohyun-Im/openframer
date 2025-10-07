export default function Comparator02() {
  const comparison = [
    {
      feature: "API Requests",
      us: "Unlimited",
      competitor: "10,000/month",
      highlight: true,
    },
    {
      feature: "Support Response",
      us: "< 1 hour",
      competitor: "24 hours",
      highlight: true,
    },
    {
      feature: "Uptime SLA",
      us: "99.99%",
      competitor: "99.9%",
      highlight: true,
    },
    {
      feature: "Price",
      us: "$49/mo",
      competitor: "$79/mo",
      highlight: true,
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Why choose us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            See how we compare
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-4">
            {comparison.map((item) => (
              <div
                key={item.feature}
                className="grid grid-cols-3 gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6"
              >
                <div className="flex items-center">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.feature}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {item.us}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.competitor}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm font-semibold">
            <div></div>
            <div className="text-blue-600 dark:text-blue-400">Our Platform</div>
            <div className="text-slate-500 dark:text-slate-400">Competitors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

