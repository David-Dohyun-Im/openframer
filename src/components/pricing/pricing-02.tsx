export default function Pricing02() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Plans for teams of all sizes
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 ring-1 ring-slate-200 dark:ring-slate-700 lg:p-12">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Basic</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                $29
              </span>
              <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">
                /month
              </span>
            </p>
            <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Perfect for small teams and startups getting started.
            </p>
            <ul className="mt-8 space-y-3">
              {["Up to 5 team members", "20GB Storage", "Email support", "Basic integrations"].map(
                (feature) => (
                  <li key={feature} className="flex gap-x-3">
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
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <button className="mt-8 w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
              Get started
            </button>
          </div>
          <div className="rounded-3xl bg-slate-900 dark:bg-slate-950 p-8 ring-1 ring-slate-800 lg:p-12">
            <h3 className="text-xl font-semibold text-white">Professional</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-white">$79</span>
              <span className="text-sm font-semibold leading-6 text-slate-300">/month</span>
            </p>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              For growing teams that need more power and flexibility.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Unlimited team members",
                "100GB Storage",
                "Priority support",
                "Advanced integrations",
                "Custom workflows",
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

