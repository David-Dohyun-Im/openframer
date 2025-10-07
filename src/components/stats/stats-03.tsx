export default function Stats03() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Numbers speak louder than words
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            See why thousands of teams choose our platform every day.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">5x</div>
              <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Faster deployment
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">98%</div>
              <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Customer satisfaction
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400">45%</div>
              <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Cost reduction
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="text-5xl font-bold text-orange-600 dark:text-orange-400">24h</div>
              <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Average response time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

