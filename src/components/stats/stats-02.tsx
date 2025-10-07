export default function Stats02() {
  const stats = [
    { value: "2M+", label: "Downloads", change: "+12.5%" },
    { value: "15K+", label: "GitHub Stars", change: "+8.2%" },
    { value: "500+", label: "Contributors", change: "+18%" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Our impact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Growing every day
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8"
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-full w-3/4 bg-blue-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

