export default function Hero01() {
  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Build amazing experiences with modern design
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Create beautiful, responsive websites with our collection of carefully crafted components. 
            Start building your next project today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
              Get started
            </button>
            <button className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

