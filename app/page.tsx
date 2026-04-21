import Image from "next/image"

export default function Home() {
  // home page
  // export default makes this the default page when visiting the root URL
  return ( // returns what is to be shown on the page
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
    <main className="min-h-screen flex flex-col items-center justify-start pt-25 bg-white text-black text-center p-6"> 
      <Image
      src="/logo.png"
      alt="Caribou Tax Preparations and Bookkeeping"
      width={600}
      height={500}
      />

      <h1 className="text-4xl font-bold mb-3">
        Caribou Tax Preparation and Bookkeeping
      </h1>

      <p className="text-lg mb-20">
        A single source for all your financial needs
      </p>


            <h1 className="text-lg text-[var(--secondary)] mb-4">
                Get started with Caribou Accounting!
            </h1>
            <h2 className="text-sm text-[var(--primary)] mb-4">
                Getting started is simple.  Share a few details and we'll guide you through the next steps.
            </h2>
            <p className="text-sm text-[var(--primary)] mb-4">
                2 options: Tax Preperation, Bookkeeping
            </p>
<div className="flex flex-col items-center space-y-4 mt-8 mb-8">

  <div className="border p-4 rounded-lg w-full max-w-md text-center">
    1. Submit your information
  </div>

  <span className="text-2xl">↓</span>

  <div className="border p-4 rounded-lg w-full max-w-md text-center">
    2. We review your details
  </div>

  <span className="text-2xl">↓</span>

  <div className="border p-4 rounded-lg w-full max-w-md text-center">
    3. We follow up with next steps and pricing
  </div>

  <span className="text-2xl">↓</span>

  <div className="border p-4 rounded-lg w-full max-w-md text-center">
    4. Upload documents and we get to work
  </div>

</div>
<button className="bg-[var(--secondary)] text-white px-6 py-6 rounded-md">
        Get Started
      </button>

    </main>
  );
}