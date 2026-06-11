export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Caribou Accounting
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A family-run firm focused on reliable tax preparation and bookkeeping
          for individuals, freelancers, and small businesses.
        </p>
      </section>

      {/* Main About Content */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Simply:
            </h2>

            <div className="space-y-4 text-gray-700 leading-7">
              <p>
                Caribou Accounting is a family-run firm focused on providing
                reliable tax preparation and bookkeeping services for individuals
                and small businesses.
              </p>

              <p>
                With experience as a former H&amp;R Block tax associate, we bring
                a strong foundation in tax preparation along with a practical,
                client-focused approach.
              </p>

              <p>
                We understand that every situation is different, and we work
                closely with clients to ensure their taxes and financials are
                handled accurately and efficiently.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              How We Work
            </h2>

            <div className="space-y-4 text-gray-700 leading-7">
              <p>
                We offer both{" "}
                <span className="font-bold text-[var(--secondary)]">
                  virtual appointments and in-person support
                </span>
                , making it easy to work with us in a way that fits your schedule.
              </p>

              <p>
                Our approach is simple: clear communication, transparent pricing,
                and dependable service.
              </p>

              <p>
                As we continue to grow, we plan to expand into a dedicated
                storefront location to better serve our local community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Why Clients Work With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--secondary)] mb-2">
                Clear Communication
              </h3>
              <p className="text-gray-700 text-sm">
                We explain the process clearly and keep clients informed.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--secondary)] mb-2">
                Dependable Support
              </h3>
              <p className="text-gray-700 text-sm">
                We provide straightforward help for tax and bookkeeping needs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--secondary)] mb-2">
                Long-Term Relationships
              </h3>
              <p className="text-gray-700 text-sm">
                We aim to be a trusted resource year after year.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}