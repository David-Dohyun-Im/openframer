export default function Process02() {
  const steps = [
    {
      number: "1",
      title: "Connect",
      description: "Link your existing tools and data sources with one click.",
    },
    {
      number: "2",
      title: "Configure",
      description: "Set up your workflows and automation rules effortlessly.",
    },
    {
      number: "3",
      title: "Collaborate",
      description: "Invite your team and start working together seamlessly.",
    },
    {
      number: "4",
      title: "Optimize",
      description: "Monitor performance and continuously improve your processes.",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Four steps to success
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We've streamlined everything so you can focus on what matters most.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-grow pb-8 pt-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

