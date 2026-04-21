export default function ServicesPage() {
    return (
        <main className="min-h-screen justify-start pt-25 bg-white text-black p-6">
            <h2 className="text-black mb-4 text-lg font-bold">
                Here's what we can do for you:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Tax Prep */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Tax Preparation
                        </h2>
                    <div className="space-y-4">
                        <div className="border p-4 rounded-md shadow-sm">
                            <p className="mb-2">
                                Individual tax returns (W-2, 1099, etc.)
                            </p>
                            <p className="mb-2">
                                Self Employed / contractor taxes
                            </p>
                            <p className="mb-2">
                                Small business returns (Schedule C, basic entitties)
                            </p>
                            <p className="mb-2">
                                Prior year / amended returns
                            </p>
                            <p className="mb-2">
                                Tax guidance and planning
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Bookkeeping
                    </h2>
                <div className="space-y-4">
                    <div className="border p-4 rounded-md shadow-sm mb-10">
                        <p className="mb-2">
                            Monthly bookkeeping
                        </p>
                        <p className="mb-2">
                            Transactional categorization
                        </p>
                        <p className="mb-2">
                            Financial statement preparation
                        </p>
                        <p className="mb-2">
                            Cleanup / catchup bookkeeping
                        </p>
                        <p className="mb-2">
                            Ongoing support & questions
                        </p>

                    </div>
                </div>
                </div>
                </div>
            
            <h2 className="text-center font-semibold text-2xl mb-4">
                We work with:
            </h2>
            <p className="text-center mb-2">
                Individuals and families
            </p>
            <p className="text-center mb-2">
                Freelancers and gig workers
            </p>
            <p className="text-center mb-2">
                Small business owners
            </p>
            <p className="text-center mb-2">
                Early stage businesses
            </p>

        </main>
    );
}