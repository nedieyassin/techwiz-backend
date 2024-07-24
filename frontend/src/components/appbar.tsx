import {RiTerminalLine} from "react-icons/ri";
import {Link} from "react-router-dom";

function Appbar() {
    return <div className="flex items-center h-16 w-full fixed top-0 left-0 bg-brand-50 z-50">
        <div className="max-w-screen-lg mx-auto px-6 flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2">
                <RiTerminalLine className="h-6 w-6"/>
                <span className="font-bold">techwiz</span>
            </Link>
            <div className="flex gap-4">
                <Link to="/" className="hover:text-brand-600 font-semibold transition-all">HOME</Link>
            </div>
        </div>
    </div>
}

export default Appbar