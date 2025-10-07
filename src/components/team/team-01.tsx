export default function Team01() {
  const team = [
    { name: "John Doe", role: "CEO & Founder", initials: "JD" },
    { name: "Jane Smith", role: "CTO", initials: "JS" },
    { name: "Mike Johnson", role: "Lead Designer", initials: "MJ" },
    { name: "Sarah Williams", role: "Head of Marketing", initials: "SW" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We're a dynamic group of individuals passionate about what we do.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-3xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

