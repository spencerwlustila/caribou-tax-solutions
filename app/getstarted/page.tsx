export default function GetStartedPage() {
    return (
        <main className="min-h-screen justify-start pt-25 bg-white text-black p-6">
            <form className="max-w-xl space-y-4 mx-auto border p-4 rounded-lg">
                <h2 className="text-2xl text-[var(--primary)] text-bold text-center">
                    Get in touch
                </h2>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border p-1 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border p-1 rounded-md"
                    />
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full border p-1 rounded-md"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full border p-1 rounded-md"
                    />
                </div>
                <div className="flex gap-6">

                    <label className="flex items-center gap-2 mx-auto">
                        <input type="radio" name="service" value="tax" />
                        Tax Preparation
                    </label>

                    <label className="flex items-center gap-2 mx-auto">
                        <input type="radio" name="service" value="bookkeeping" />
                        Bookkeeping
                    </label>

                </div>

                <textarea
                    placeholder="Short description (optional)"
                    rows={1}
                    className="w-full text-sm px-3 py-2 h-30 rounded-md text-black border resize-none"
                />

                <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-md mx-auto block">
                    Submit
                </button>
            </form>
        </main>
    )
}