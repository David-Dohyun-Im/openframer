export default function Content03() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Learn tips and tricks, insights, and best practices from our team.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="flex flex-col items-start rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full">
                <div className="aspect-video w-full rounded-lg bg-slate-200 dark:bg-slate-800"></div>
              </div>
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time className="text-slate-500 dark:text-slate-400">Mar 16, 2024</time>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-400">
                  Article
                </span>
              </div>
              <div className="relative mt-4">
                <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Building modern web applications
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Learn how to build fast, scalable applications using modern web technologies and best practices.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

