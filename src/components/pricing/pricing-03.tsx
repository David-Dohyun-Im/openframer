export default function Pricing03() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            One price, all features
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Simple pricing with no hidden fees. Cancel anytime.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-blue-600 lg:flex lg:max-w-4xl">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Everything you need
            </h3>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
              Get access to all features with a single subscription. No upsells, no surprises.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2">
              {[
                "Unlimited projects",
                "Unlimited storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "API access",
                "Team collaboration",
                "Advanced security",
              ].map((feature) => (
                <div key={feature} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 py-10 text-center ring-1 ring-inset ring-slate-900/5 dark:ring-slate-700 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
                  Billed monthly
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    $59
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600 dark:text-slate-400">
                    USD
                  </span>
                </p>
                <button className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  Get started
                </button>
                <p className="mt-6 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  14-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

