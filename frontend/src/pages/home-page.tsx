import {categories} from "@/lib/data.ts";
import Appbar from "@/components/appbar.tsx";
import {RiTerminalLine} from "react-icons/ri";
import TopicCard from "@/components/topic-card.tsx";
import Footer from "@/components/footer.tsx";


function HomePage() {

    return <div>
        <Appbar/>
        <div className="bg-brand-50 ">
            <div className="relative max-w-screen-lg pt-24 pb-16 mx-auto px-3">
                <RiTerminalLine className="h-36 w-36 text-brand-100 md:text-brand-600 absolute right-4"/>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold py-4">Test yourself with <span
                        className="text-brand-600">techwiz.</span>
                    </h1>
                    <p className="md:px-3 max-w-screen-sm">Unlock the door to boundless knowledge and sharpen your tech
                        prowess with techwiz,
                        the premier platform for tech enthusiasts and coding aficionados alike.</p>
                </div>
            </div>
        </div>
        <div>
            <div className="max-w-screen-lg py-10 md:py-16 mx-auto px-3">
                <div className="pb-6">
                    <h1 className="relative text-2xl md:text-4xl font-bold py-4">
                        <span>Choose topic to start</span>
                        <div className="h-1 w-20 bg-brand-600 mx-1 mt-2"></div>
                    </h1>
                </div>
                <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {categories.map((category) => {
                        return <TopicCard key={category.name} category={category}/>
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default HomePage