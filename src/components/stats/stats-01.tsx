export default function Stats01() {
  const stats = [
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "50K+", label: "Active users" },
    { value: "10M+", label: "API requests daily" },
    { value: "24/7", label: "Customer support" },
  ];

  return (
    <div className="w-full bg-slate-900 dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Join thousands of teams building amazing products with our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

