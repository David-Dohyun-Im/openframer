export default function CTA02() {
  return (
    <div className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 shadow-2xl sm:px-12 sm:py-32 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of satisfied users who have transformed their workflow. 
              No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
                Get started for free
              </button>
              <button className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

