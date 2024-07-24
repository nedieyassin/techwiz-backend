import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";
import {motion} from "framer-motion";
import {ICategory} from "@/lib/data.ts";

function TopicCard({category}: { category: ICategory }) {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            initial={{scale: 0.95}}
            animate={{scale: 1}}
            transition={{type: "spring", stiffness: 400, damping: 10, staggerChildren: 0.1}}
            key={category.id}
        >
            <Link
                to={`/start-quiz/${category.name.toLowerCase()}`}

                className="relative overflow-clip bg-brand-50 cursor-pointer border-2 border-black rounded-lg flex gap-3 flex-col items-center justify-center py-6">
                <i className={cn(" text-9xl text-brand-100 absolute -left-10 -top-10 rotate-45", category.icon)}></i>
                <i className={cn(" text-6xl relative z-10 colored", category.icon)}></i>
                <h1 className="text-xl">{category.name}</h1>
            </Link>
        </motion.div>
    )
}

export default TopicCard