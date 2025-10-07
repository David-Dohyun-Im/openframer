export default function Team03() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Join our team
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Work with amazing people
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We're always looking for talented individuals to join our growing team.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Engineering", count: "12 positions" },
            { name: "Design", count: "5 positions" },
            { name: "Product", count: "8 positions" },
            { name: "Marketing", count: "6 positions" },
            { name: "Sales", count: "4 positions" },
            { name: "Support", count: "7 positions" },
          ].map((department) => (
            <div
              key={department.name}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {department.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {department.count}
              </p>
              <button className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500">
                View openings →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

