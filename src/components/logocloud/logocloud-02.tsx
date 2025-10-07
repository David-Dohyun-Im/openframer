export default function LogoCloud02() {
  const companies = [
    "Acme Corp",
    "TechStart",
    "InnovateCo",
    "BuildFast",
    "CloudNine",
    "DataFlow",
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Join 500+ companies
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Building the future together
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="col-span-1 flex justify-center items-center"
              >
                <div className="group relative">
                  <div className="h-16 w-full bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center px-6 transition-all hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

