export default function CTA03() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-slate-200 dark:ring-slate-800 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
              Get unlimited access to all our features, forever. No monthly fees, 
              no hidden charges. Pay once and enjoy lifetime benefits.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">
                What's included
              </h4>
              <div className="h-px flex-auto bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:grid-cols-2 sm:gap-6">
              {[
                'All premium features',
                'Unlimited projects',
                'Priority support',
                'Advanced analytics',
                'Custom integrations',
                'Lifetime updates',
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 py-10 text-center ring-1 ring-inset ring-slate-900/5 dark:ring-slate-700 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600 dark:text-slate-400">
                    USD
                  </span>
                </p>
                <button className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                  Get lifetime access
                </button>
                <p className="mt-6 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

