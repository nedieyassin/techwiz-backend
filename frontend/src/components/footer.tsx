export default function Footer() {
    return (
        <footer className="bg-white py-4">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-gray-600">© {new Date().getFullYear()} TechWiz. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-right">
                        <p className="text-gray-600">Developed by <a
                            href="https://nedieyassin.com/"
                            target="_blank"
                            className="text-brand-600 hover:text-brand-700">Nedie Yassin</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}