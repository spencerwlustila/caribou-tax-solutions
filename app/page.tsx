
  // home page
  // export default makes this the default page when visiting the root URL
 // returns what is to be shown on the page
    // main is the main content of the page
    // className is used to apply styles to the element (Tailwind)
    //min-h full screen height 
    // flex flex-col vertical layout
    // items-center center horizontally
    // justify-center center vertically
    // bg-black background color black
    // text-center center text
    // p-6 padding 6


    // h1 is the biggest heading
    // text-4xl is the font size (4 times the base size)
    // font-bold makes the text bold
    // mb-4 margin bottom 4


    // p is a paragraph
    // text-lg is the font size (large)
    // mb-6 margin bottom 6

    // button is a clickable element
    // bg-blue-600 background color blue (600 is a shade)
    // text-white text color white
    // px-6 padding left and right 6
    // py-3 padding top and bottom 3
    // rounded-lg rounded corners (large)
    // hover:bg-blue-700 change background color on hover (darker blue)


    // </main> closes the main section
    // }; closes the function
    // } closes the export default
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-xl font-bold mb-5">
            Tax preparation and bookkeeping made simple.
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Reliable support for individuals, freelancers, and small businesses — 
          without confusion, surprises, or hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/getstarted"
              className="bg-[var(--secondary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition text-center"
            >
              Get Started
            </a>

            <a
              href="/pricing"
              className="border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-md hover:bg-gray-50 transition text-center"
            >
              View Pricing
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/icon.png"
            alt="Caribou Tax Preparations and Bookkeeping"
            width={450}
            height={350}
          />
        </div>

      </section>


{/* Trust Banner */}
<section className="text-white py-8"
          style={{ backgroundColor: "#2F4F6F"}}>
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

    <div>
      <p className="font-bold text-xl mb-1">Clear Pricing</p>
      <p className="text-sm">No surprises or hidden fees.</p>
    </div>

    <div>
      <p className="font-bold text-xl mb-1">Personal Support</p>
      <p className="text-sm">Guidance through every step.</p>
    </div>

    <div>
      <p className="font-bold text-xl mb-1">Secure Process</p>
      <p className="text-sm">Documents handled carefully.</p>
    </div>

  </div>
</section>
      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-3">
            Get started with Caribou Accounting
          </h2>

          <p className="text-[var(--primary)] mb-10">
            Getting started is simple. Share a few details and we’ll guide you
            through the next steps.
          </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">

  <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm w-60 text-center">
    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mx-auto mb-4">
      1
    </div>
    <p>Submit your information</p>
  </div>

  <div className="text-2xl text-[var(--primary)]">→</div>

  <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm w-60 text-center">
    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mx-auto mb-4">
      2
    </div>
    <p>We review your details</p>
  </div>

  <div className="text-2xl text-[var(--primary)]">→</div>

  <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm w-60 text-center">
    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mx-auto mb-4">
      3
    </div>
    <p>We follow up with next steps and pricing</p>
  </div>

  <div className="text-2xl text-[var(--primary)]">→</div>

  <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm w-60 text-center">
    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mx-auto mb-4">
      4
    </div>
    <p>Upload documents and we get to work</p>
  </div>

</div>
          <a
            href="/getstarted"
            className="inline-block mt-10 bg-[var(--secondary)] text-white text-2xl font-bold px-20 py-10 rounded-md hover:opacity-90 transition"
          >
            Start Now
          </a>

        </div>
      </section>

    </main>
  );
}