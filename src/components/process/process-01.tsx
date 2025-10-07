export default function Process01() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds. No credit card required to get started.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Customize",
      description: "Tailor the platform to your needs with our intuitive setup wizard.",
      icon: "⚙️",
    },
    {
      number: "03",
      title: "Launch",
      description: "Go live and start seeing results immediately with our powerful tools.",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Grow",
      description: "Scale your business with our advanced features and dedicated support.",
      icon: "📈",
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            How it works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple 4-step process
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Get started in minutes and see results in hours. Our streamlined process makes it easy.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

