export default function LogoCloud01() {
  const logos = [
    { name: "Vercel", width: "w-24" },
    { name: "Next.js", width: "w-20" },
    { name: "Tailwind", width: "w-28" },
    { name: "React", width: "w-20" },
    { name: "TypeScript", width: "w-32" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-slate-900 dark:text-white">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="col-span-2 flex justify-center lg:col-span-1"
            >
              <div className={`${logo.width} h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center`}>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

