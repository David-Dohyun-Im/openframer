export default function LogoCloud03() {
  const partners = [
    { name: "Partner A", size: "text-2xl" },
    { name: "Partner B", size: "text-xl" },
    { name: "Partner C", size: "text-2xl" },
    { name: "Partner D", size: "text-xl" },
    { name: "Partner E", size: "text-2xl" },
    { name: "Partner F", size: "text-xl" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
            Our Partners
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Partnering with industry leaders
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We work with the best companies to deliver exceptional results
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:shadow-md hover:ring-blue-500 dark:hover:ring-blue-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex h-20 items-center justify-center">
                  <span className={`${partner.size} font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {partner.name.split(' ')[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

