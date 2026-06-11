export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Services Built Around Your Needs
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto">
          From tax preparation to ongoing bookkeeping, Caribou Accounting helps
          individuals, freelancers, and small businesses stay organized and confident.
        </p>
      </section>

      {/* Main Services */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Tax Preparation */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
              Tax Preparation
            </h2>

            <p className="text-gray-700 mb-6">
              Reliable tax filing support for individuals, contractors, and small businesses.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Individual tax returns</li>
              <li>✓ W-2 and 1099 income</li>
              <li>✓ Self-employed and contractor taxes</li>
              <li>✓ Small business returns</li>
              <li>✓ Prior year or amended returns</li>
              <li>✓ Tax guidance and planning</li>
            </ul>
          </div>

          {/* Bookkeeping */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
              Bookkeeping
            </h2>

            <p className="text-gray-700 mb-6">
              Ongoing bookkeeping support to help you stay organized year-round.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Monthly bookkeeping</li>
              <li>✓ Transaction categorization</li>
              <li>✓ Financial statement preparation</li>
              <li>✓ Cleanup and catch-up bookkeeping</li>
              <li>✓ Ongoing support and questions</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            We Work With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-bold text-[var(--secondary)]">
                Individuals & Families
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-bold text-[var(--secondary)]">
                Freelancers
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-bold text-[var(--secondary)]">
                Small Business Owners
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-bold text-[var(--secondary)]">
                Early Stage Businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Need help deciding where to start?
        </h2>

        <p className="text-gray-700 mb-8">
          Tell us what you need and we’ll help guide you to the right service.
        </p>

        <a
          href="/getstarted"
          className="inline-block bg-[var(--secondary)] text-white px-8 py-3 rounded-md hover:opacity-90 transition"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}