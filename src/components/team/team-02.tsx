export default function Team02() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Product Manager",
      bio: "10+ years in product development",
    },
    {
      name: "Sam Chen",
      role: "Engineering Lead",
      bio: "Building scalable systems",
    },
    {
      name: "Jordan Taylor",
      role: "UX Designer",
      bio: "Crafting delightful experiences",
    },
    {
      name: "Casey Morgan",
      role: "Growth Manager",
      bio: "Data-driven marketing expert",
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our leadership team
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Passionate experts dedicated to building the future.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-8"
            >
              <div className="mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

