export default function FAQs02() {
  const faqs = [
    {
      question: "What is included in the free plan?",
      answer:
        "The free plan includes basic features, 1GB storage, and email support for up to 2 team members.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and security practices. Your data is stored in secure, redundant data centers.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Changes take effect immediately and we'll prorate any charges.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees. You only pay for your subscription plan.",
    },
    {
      question: "Do you offer educational discounts?",
      answer:
        "Yes, we offer 50% off for students and educators. Contact us with your educational email.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            FAQs
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to know
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

