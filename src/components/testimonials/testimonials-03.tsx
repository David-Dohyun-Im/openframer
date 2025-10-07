export default function Testimonials03() {
  const testimonials = [
    {
      quote: "Game changer for our business.",
      author: "Alex Rivera",
      role: "Founder",
      rating: 5,
    },
    {
      quote: "Incredible value for the price.",
      author: "Sam Taylor",
      role: "Director",
      rating: 5,
    },
    {
      quote: "Support team is amazing!",
      author: "Jordan Lee",
      role: "Manager",
      rating: 5,
    },
    {
      quote: "Easy to use and powerful.",
      author: "Casey Morgan",
      role: "Developer",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">★</span>
            ))}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Rated 5 stars by our customers
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Join thousands of satisfied customers.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-xs">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

