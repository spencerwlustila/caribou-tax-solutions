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

      <p className="text-lg mb-6">
        A single source for all your financial needs
      </p>

      <button className="bg-[var(--secondary)] text-white px-6 py-6 rounded-md">
        Get a Quote
      </button>

    </main>
  );
}