export default function Footer02() {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">OpenFramer</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Building the future, one component at a time.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Social
              </h3>
              <ul className="space-y-2">
                {["Twitter", "GitHub", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2024 OpenFramer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

