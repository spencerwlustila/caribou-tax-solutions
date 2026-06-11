export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto">
          We believe in clear, upfront pricing with no surprises. Our goal is to
          make it easy to understand what you’re paying for — so you can focus
          on your finances, not hidden fees.
        </p>
      </section>

      {/* Tax Preparation */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">
          Tax Preparation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-2">Basic Return</h3>

            <p className="text-gray-600 mb-6">
              Best for simple W-2 income and standard deduction filings.
            </p>

            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-4xl font-bold text-[var(--secondary)] mb-2">
              $175
            </p>

            <hr className="my-6" />

            <ul className="space-y-3 text-left text-gray-700">
              <li>✓ W-2 income</li>
              <li>✓ Standard deduction</li>
              <li>✓ Simple individual filing</li>
            </ul>
          </div>

          {/* Standard */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
            <h3 className="text-2xl font-bold mb-2">Standard Return</h3>

            <p className="text-gray-600 mb-6">
              For clients with multiple income sources or itemized deductions.
            </p>

            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-4xl font-bold text-[var(--secondary)] mb-2">
              $275
            </p>

            <hr className="my-6" />

            <ul className="space-y-3 text-left text-gray-700">
              <li>✓ W-2 income</li>
              <li>✓ 1099 income</li>
              <li>✓ Itemized deductions</li>
            </ul>
          </div>

          {/* Business */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-2">Business Return</h3>

            <p className="text-gray-600 mb-6">
              For self-employed clients, Schedule C, and more complex returns.
            </p>

            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-4xl font-bold text-[var(--secondary)] mb-2">
              $500
            </p>

            <p className="text-sm text-gray-500">
              Final pricing confirmed after document review.
            </p>

            <hr className="my-6" />

            <ul className="space-y-3 text-left text-gray-700">
              <li>✓ Self-employed income</li>
              <li>✓ Schedule C support</li>
              <li>✓ Small business filing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bookkeeping */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">
            Bookkeeping
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>

              <p className="text-gray-600 mb-6">
                For freelancers, gig workers, and single-member LLCs.
              </p>

              <p className="text-sm text-gray-500">Starting at</p>
              <p className="text-4xl font-bold text-[var(--secondary)] mb-2">
                $129/mo
              </p>

              <p className="text-sm text-gray-500">
                Under 75 transactions per month.
              </p>

              <hr className="my-6" />

              <ul className="space-y-3 text-left text-gray-700">
                <li>✓ Monthly transaction categorization</li>
                <li>✓ 1 bank account</li>
                <li>✓ 1 credit card account</li>
                <li>✓ Quarterly financial summary</li>
                <li>✓ Year-end tax-ready books</li>
              </ul>
            </div>

            {/* Growth - Featured */}
            <div
              className="rounded-2xl p-6 shadow-lg text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <p className="inline-block bg-white text-[var(--primary)] text-sm font-bold px-3 py-1 rounded-full mb-4">
                Most Popular
              </p>

              <h3 className="text-2xl font-bold mb-2">Growth</h3>

              <p className="text-white/90 mb-6">
                For small businesses with more accounts and added complexity.
              </p>

              <p className="text-sm text-white/80">Starting at</p>
              <p className="text-4xl font-bold mb-2">$249/mo</p>

              <p className="text-sm text-white/80">
                Under 250 transactions per month.
              </p>

              <hr className="my-6 border-white/30" />

              <ul className="space-y-3 text-left text-white/95">
                <li>✓ Everything in Starter</li>
                <li>✓ Up to 3 accounts</li>
                <li>✓ Monthly reconciliation</li>
                <li>✓ Monthly P&amp;L</li>
                <li>✓ Email support</li>
                <li>✓ Quarterly planning check-ins</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>

              <p className="text-gray-600 mb-6">
                For growing businesses with payroll, sales tax, and more.
              </p>

              <p className="text-sm text-gray-500">Starting at</p>
              <p className="text-4xl font-bold text-[var(--secondary)] mb-2">
                $499/mo
              </p>

              <p className="text-sm text-gray-500">
                250–500+ transactions per month.
              </p>

              <hr className="my-6" />

              <ul className="space-y-3 text-left text-gray-700">
                <li>✓ Everything in Growth</li>
                <li>✓ Sales tax tracking</li>
                <li>✓ Payroll coordination</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">
          Other Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-2">Cleanup / Catch-up</h3>

            <p className="text-gray-600 mb-6">
              For clients who need prior books organized, corrected, or reviewed.
            </p>

            <p className="text-3xl font-bold text-[var(--secondary)]">
              Get a quote
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-2">Payroll</h3>

            <p className="text-gray-600 mb-6">
              Payroll support for small businesses that need simple monthly help.
            </p>

            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-3xl font-bold text-[var(--secondary)]">
              $99/mo
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-2">Sales Tax Filings</h3>

            <p className="text-gray-600 mb-6">
              Sales tax filing support for businesses that need it.
            </p>

            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-3xl font-bold text-[var(--secondary)]">
              $50/mo
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Not sure which option fits?
        </h2>

        <p className="text-gray-700 mb-8">
          Tell us what you need and we’ll help point you in the right direction.
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