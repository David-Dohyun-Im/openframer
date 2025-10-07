export default function Features03() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Powerful features for modern teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-800 p-8 lg:p-12">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">Real-time Collaboration</h3>
                <p className="mt-4 text-slate-300">
                  Work together in real-time with your team. See changes instantly and collaborate
                  seamlessly across projects.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-xl">👥</span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600">
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Advanced Security
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Enterprise-grade security with end-to-end encryption and compliance certifications.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  99.9% Uptime
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Reliable infrastructure that scales with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

