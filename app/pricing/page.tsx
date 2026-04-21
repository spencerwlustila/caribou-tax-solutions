export default function PricingPage() {
    return (
        <main className="min-h-screen justify-start pt-15 bg-white text-black p-8">

            <h1 className="text-4xl font-bold mb-3">
                Pricing
            </h1>

            <p className="text-md text-black mb-3">
                We believe in clear, upfront pricing with no surprises. Our goal is to make it easy to understand what
                you’re paying for - so you can focus on your finances, not hidden fees.
            </p>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Tax Prep */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Tax Preparation</h2>

                    <div className="space-y-4">
                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold">Basic</h3>
                            <p className="mb-2">W-2 income, standard deduction, simple filings</p> 
                            <p className="font-bold">$175</p>
                        </div>

                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-2">Standard</h3> 
                            <p className="mb-2">Multiple income sources (W-2, 1099), itemized deductions</p> 
                            <p className="font-bold">$275</p>
                        </div>

                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold">Business</h3>
                            <p className="mb-2">Self-employed / Schedule C, more complex returns</p> 
                            <p className="font-bold">$500</p> 
                            <p className="text-sm mt-1">(final pricing after review)</p>
                        </div>
                    </div>
                </div>

                {/* Bookkeeping */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Bookkeeping</h2>

                    <div className="space-y-4">
                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold">Starter</h3>
                            <p className="font-bold text-sm mb-1"> (freelancers, gig workers, single member LLCs, less than 75 transactions / month, no employees) </p> 
                            <p className="mb-2"> Includes: Monthly transaction categorization, 1 bank + 1 credit card account, quarterly financial summary (P&L), year-end tax ready books </p> 
                            <p className="font-bold mb-2"> $129/mo </p>
                        </div>

                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold">Growth</h3>
                            <p className="font-bold text-sm mb-1"> (small business less than 250 transactions / month) some complexity </p>
                            <p className="mb-2"> Includes: everything in starter, up to 3 accounts, monthly reconciliation, Monthly P&L, email support, quarterly planning check-ins </p> 
                            <p className="font-bold mb-2"> $249/mo </p>
                        </div>

                        <div className="border p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold">Pro</h3>
                            <p className="font-bold text-sm mb-1"> (Growing / established business, 250-500+ transactions, payroll, sales tax, etc.) </p> 
                            <p className="mb-2"> Includes: everything in growth, sales tax tracking, payroll coordination and priority support </p> 
                            <p className="font-bold mb-2"> $499/mo </p>
                        </div>
                    </div>
                </div>

                {/* Other */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Other Services</h2>

                    <div className="space-y-4">
                        <div className="border p-5 rounded-lg shadow-sm">
                            <h3 className="font-bold">Cleanup</h3>
                            <p>Get a quote</p>
                        </div>

                        <div className="border p-5 rounded-lg shadow-sm">
                            <h3 className="font-bold">Payroll</h3>
                            <p>$99/mo</p>
                        </div>

                        <div className="border p-5 rounded-lg shadow-sm">
                            <h3 className="font-bold">Sales Tax</h3>
                            <p>$50/mo</p>
                        </div>
                    </div>
                </div>

            </div>

        </main>


    )
}