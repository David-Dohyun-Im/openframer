export default function Pricing01() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      features: ["10 Projects", "5GB Storage", "Basic Support", "Core Features"],
    },
    {
      name: "Pro",
      price: "$49",
      features: ["Unlimited Projects", "50GB Storage", "Priority Support", "Advanced Features"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited Everything", "500GB Storage", "24/7 Support", "Custom Features"],
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Choose the perfect plan for your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.featured
                  ? "border-blue-600 ring-2 ring-blue-600"
                  : "border-slate-200 dark:border-slate-800"
              } bg-white dark:bg-slate-900`}
            >
              {plan.featured && (
                <div className="mb-4 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-slate-600 dark:text-slate-400">/month</span>
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md px-4 py-3 text-sm font-semibold ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                } transition-colors`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

