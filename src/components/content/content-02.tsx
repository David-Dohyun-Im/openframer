export default function Content02() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl bg-white dark:bg-slate-800 p-8 lg:p-12 ring-1 ring-slate-200 dark:ring-slate-700">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Everything you need in one place
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Manage your entire workflow from a single, powerful dashboard. No more switching between tools.
            </p>
            <div className="mt-8 flex gap-x-4">
              <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                Get started
              </button>
              <button className="rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

