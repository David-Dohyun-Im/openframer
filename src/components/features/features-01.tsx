export default function Features01() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance. Your users will love the experience.",
      icon: "⚡",
    },
    {
      title: "Secure by Default",
      description: "Built with security best practices. Your data is always protected.",
      icon: "🔒",
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface that anyone can master in minutes.",
      icon: "✨",
    },
    {
      title: "24/7 Support",
      description: "Our team is always here to help you succeed.",
      icon: "💬",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            All-in-one platform
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Powerful features to help you build better products faster.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

