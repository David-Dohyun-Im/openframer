export default function CTA01() {
  return (
    <div className="w-full bg-slate-900 dark:bg-black">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-400">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors">
              Get started
            </button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-slate-50 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

