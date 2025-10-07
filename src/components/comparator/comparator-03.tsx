export default function Comparator03() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Built for developers, by developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            See why developers choose us over the competition.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8">
              <div className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Our Platform
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Modern & Fast
              </h3>
              <ul className="space-y-3">
                {[
                  "Lightning-fast performance",
                  "Modern developer experience",
                  "Built-in best practices",
                  "Comprehensive documentation",
                  "Active community support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8">
              <div className="mb-4 inline-flex rounded-full bg-slate-300 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                Other Platforms
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Legacy & Slow
              </h3>
              <ul className="space-y-3">
                {[
                  "Outdated technology",
                  "Complex setup process",
                  "Poor documentation",
                  "Limited support",
                  "Small community",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

