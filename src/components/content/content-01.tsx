export default function Content01() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
                Build faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Streamline your development process with our intuitive tools and features designed for modern teams.
              </p>
              <div className="mt-10 space-y-8">
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                      Connect your tools
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                      Integrate with all your favorite tools and services in just a few clicks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                      Build and deploy
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                      Ship your code to production with confidence using our automated pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-slate-100 dark:bg-slate-900 p-8 lg:p-12">
            <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

