export default function Testimonials01() {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we work. The productivity gains are incredible.",
      author: "Sarah Johnson",
      role: "CEO at TechCorp",
    },
    {
      quote: "Best investment we've made this year. Our team loves it and our customers are happier.",
      author: "Michael Chen",
      role: "CTO at StartupXYZ",
    },
    {
      quote: "The support team is outstanding. They've helped us every step of the way.",
      author: "Emily Davis",
      role: "Product Manager at InnovateCo",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            See what our customers have to say about their experience.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8"
            >
              <div className="mb-6 text-4xl text-blue-600 dark:text-blue-400">"</div>
              <p className="text-slate-600 dark:text-slate-400">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

