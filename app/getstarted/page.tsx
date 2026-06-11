export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s find the right service for you.
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto">
            Tell us a little about what you need. We’ll review your information
            and follow up with next steps, pricing, and any documents needed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Left Info Panel */}
          <div className="lg:col-span-1 bg-[var(--primary)] text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              What happens next?
            </h2>

            <div className="space-y-5">
              <div>
                <p className="font-bold">1. Submit your details</p>
                <p className="text-sm text-white/80">
                  Share basic contact info and what service you need.
                </p>
              </div>

              <div>
                <p className="font-bold">2. We review your request</p>
                <p className="text-sm text-white/80">
                  We look over your situation and determine the best next step.
                </p>
              </div>

              <div>
                <p className="font-bold">3. We follow up</p>
                <p className="text-sm text-white/80">
                  You’ll receive guidance on pricing, documents, and timing.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-2 border border-gray-200 rounded-2xl p-8 shadow-sm bg-white space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600 text-sm">
                Please provide the best way for us to reach you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />
            </div>

            <div>
              <p className="font-bold mb-3">
                What service are you interested in?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-[var(--secondary)] transition">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" value="tax" />
                    <span className="font-semibold">Tax Preparation</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-6">
                    Filing support for individuals, contractors, and small businesses.
                  </p>
                </label>

                <label className="border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-[var(--secondary)] transition">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" value="bookkeeping" />
                    <span className="font-semibold">Bookkeeping</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-6">
                    Monthly support to keep your books clean and organized.
                  </p>
                </label>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">
                Tell us briefly what you need
              </p>

              <textarea
                placeholder="Example: I need help filing a small business return, or I need monthly bookkeeping for my LLC."
                className="w-full min-h-36 text-sm p-3 rounded-md text-black border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-sm text-gray-500">
                We’ll be in touch with next steps after reviewing your request.
              </p>

              <button className="bg-[var(--secondary)] text-white px-8 py-3 rounded-md hover:opacity-90 transition">
                Submit Request
              </button>
            </div>
          </form>

        </div>
      </section>
    </main>
  );
}