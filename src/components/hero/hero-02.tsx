export default function Hero02() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform your ideas</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  into reality
                </span>
              </h1>
              <p className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                The fastest way to build modern web applications. 
                Powered by cutting-edge technology and designed for developers who care about quality.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
                    Start building
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="flex w-full items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 md:py-4 md:px-10 md:text-lg">
                    View demo
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

