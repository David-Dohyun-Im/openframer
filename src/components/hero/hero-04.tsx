interface Hero04Props {
  badge?: {
    text: string;
    label: string;
  };
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  showPreview?: boolean;
}

export default function Hero04({
  badge = {
    text: "New",
    label: "Just launched v2.0"
  },
  title = "The future of web development is here",
  description = "Experience the next generation of component libraries. Built with performance, accessibility, and developer experience in mind. Ship faster without compromising on quality.",
  primaryButton = {
    text: "Get started for free",
    href: "#"
  },
  secondaryButton = {
    text: "View documentation",
    href: "#"
  },
  showPreview = true
}: Hero04Props) {
  return (
    <div className="relative w-full bg-slate-900 dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex items-center gap-x-4">
            <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              {badge.text}
            </div>
            <div className="text-sm leading-6 text-slate-300">
              {badge.label}
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {primaryButton.text}
            </button>
            <button className="text-sm font-semibold leading-6 text-white hover:text-slate-200">
              {secondaryButton.text} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        {showPreview && (
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <div className="relative rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                  <div className="h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
