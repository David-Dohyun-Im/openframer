export default function Process03() {
  const steps = [
    {
      title: "Discovery",
      description: "We start by understanding your unique needs, goals, and challenges through in-depth consultation.",
      features: ["Initial consultation", "Needs assessment", "Goal setting"],
    },
    {
      title: "Planning",
      description: "Our team creates a customized strategy tailored to your specific requirements and timeline.",
      features: ["Custom strategy", "Timeline planning", "Resource allocation"],
    },
    {
      title: "Execution",
      description: "We implement the solution with precision, keeping you informed every step of the way.",
      features: ["Phased rollout", "Quality assurance", "Progress tracking"],
    },
    {
      title: "Support",
      description: "Ongoing support and optimization ensure you continue to get maximum value over time.",
      features: ["24/7 monitoring", "Regular updates", "Continuous improvement"],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Step by step
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our proven process
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A systematic approach that delivers results every time.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

