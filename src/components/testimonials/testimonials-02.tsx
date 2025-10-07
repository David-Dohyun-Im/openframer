export default function Testimonials02() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What our customers are saying
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 lg:p-16 ring-1 ring-slate-200 dark:ring-slate-700">
            <figure>
              <blockquote className="text-xl font-semibold leading-8 text-slate-900 dark:text-white sm:text-2xl sm:leading-9">
                <p>
                  "We've tried many solutions, but this one stands out. The intuitive interface
                  and powerful features have made our workflow so much smoother. Highly recommended!"
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">James Davis</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    VP of Engineering at BuildFast
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

