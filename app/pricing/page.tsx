export default function PricingPage(){
    return(
        <main className="min-h-screen justify-start pt-15 bg-white text-black p-8">

            <h1 className="text-4xl font-bold mb-3">
            Pricing
            </h1>

            <p className="text-md text-black mb-3"> 
            We believe in clear, upfront pricing with no surprises. Our goal is to make it easy to understand what 
            you’re paying for - so you can focus on your finances, not hidden fees.
            </p>

            <h2 className="text-2xl font-semibold mb-3">
                Tax Preparation:
            </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Basic */}
        <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="mb-2">W-2 income, standard deduction, simple filings</p>
            <p className="font-bold">$175</p>
        </div>

  {/* Standard */}
        <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Standard</h3>
            <p className="mb-2">Multiple income sources (W-2, 1099), itemized deductions</p>
            <p className="font-bold">$275</p>
        </div>

  {/* Business */}
        <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Business</h3>
            <p className="mb-2">Self-employed / Schedule C, more complex returns</p>
            <p className="font-bold">$500</p>
            <p className="text-sm mt-1">(final pricing after review)</p>
        </div>

    </div>

        <h2 className="text-2xl font-semibold mb-3">
            Bookkeeping:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Starter */}
            <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">
                    Starter
                </h3>

                <p className="font-bold text-sm mb-1">
                    (freelancers, gig workers, single member LLCs, less than 75 transactions / month, no employees)
                </p>

                <p className="mb-2">
                    Includes: Monthly transaction categorization, 1 bank + 1 credit card account, quarterly financial summary (P&L), 
                    year-end tax ready books
                </p>

                <p className="font-bold mb-2">
                    $129/mo
                </p>
            </div>

            {/* Growth */}
            <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold">
                    Growth
                </h3>

                <p className="font-bold text-sm mb-1">
                    (small business less than 250 transactions / month) some complexity
                </p>

                <p className="mb-2">
                    Includes: everything in starter, up to 3 accounts, monthly reconciliation, Monthly P&L, 
                    email support, quarterly planning check-ins
                </p>

                <p className="font-bold mb-2">
                    $249/mo
                </p>
            </div>

            {/*Pro*/}
            <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold">
                    Pro
                </h3>

                <p className="font-bold text-sm mb-1">
                    (Growing / established business, 250-500+ transactions, payroll, sales tax, etc.)
                </p>

                <p className="mb-2">
                    Includes: everything in growth, sales tax tracking, payroll coordination and priority support
                </p>

                <p className="font-bold mb-2">
                    $499/mo
                </p>

            </div>
    
        </div>
        <h2 className="text-2xl font-semibold mb-3">
            Other Services:
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border p-5 rounded-lg shadow-sm">


        <h3 className="text-md font-bold mb-2">
            Cleanup / Catch-up work
        </h3>
        
        <p className="mb-2">
            Get a quote
        </p>
        </div>

        <div className="border p-5 rounded-lg shadow-sm">
            <h3 className="text-md font-bold mb-2">
                Payroll
            </h3>

            <p className="mb-2">
                $99/mo
            </p>
        </div>

        <div className="border p-5 rounded lg shadow-sm">
            <h3 className="text-md font-bold mb-2">
                Sales tax filings
            </h3>

            <p className="mb-2">
                $50/mo
            </p>
        </div>
    </div>
        </main>

        
    )
}