import Appbar from "@/components/appbar.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {categories} from "@/lib/data.ts";
import {cn} from "@/lib/utils.ts";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Label} from "@/components/ui/label.tsx";
import {buttonVariants} from "@/components/ui/button.tsx";
import TopicCard from "@/components/topic-card.tsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import pb from "@/lib/pocketbase.ts";
import useStore from "@/state";
import {IQuestion} from "@/types/question.ts";
import {Loader} from "lucide-react";
import Footer from "@/components/footer.tsx";


const difficulties = ['Easy', 'Medium', 'Hard'] as const;

function StartQuizPage() {

    const {setCurrentTest} = useStore((state) => state);
    const {quizId} = useParams();
    const navigate = useNavigate();


    const [difficulty, setDifficulty] = useState('medium');
    const [isLoading, setIsLoading] = useState(false)

    const category = categories.find((c) => c.name.toLowerCase() === quizId);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [quizId]);

    const getQuestions = () => {
        setIsLoading(true)
        pb.send<IQuestion[]>(`/api/c/questions/${quizId}/${difficulty}`, {}).then(questions => {
            if (category?.name && questions) {
                setCurrentTest({topic: category.name, difficulty: difficulty, questions: questions})
                navigate(`/quiz-room`)
            }
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
        })
    }


    return <div>
        <Appbar/>
        <div className="bg-brand-50 ">
            <div className="max-w-screen-lg relative pt-24 pb-6 mx-auto px-3">
                <i className={cn(" text-9xl text-brand-100 absolute right-4", category?.icon)}></i>
                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <i className={cn("text-6xl text-brand-600 colored", category?.icon)}></i>
                        <h1 className="text-3xl md:text-6xl font-bold py-4"><span
                            className="text-brand-600-">{category?.name}</span>
                        </h1>
                    </div>
                    <p className="md:px-3 max-w-screen-sm">
                        {category?.description}
                    </p>
                </div>
            </div>
        </div>
        <div className="md:pb-16">
            <div className="max-w-screen-lg  py-10 mx-auto px-3">
                <div className="pb-4">
                    <h1 className="relative text-2xl md:text-4xl font-bold py-4">
                        <span>Choose difficulty</span>
                        <div className="h-1 w-20 bg-brand-600 mx-1 mt-2"></div>
                    </h1>
                </div>
                <div className="flex flex-col  md:flex-row md:items-center justify-between gap-3">
                    <div className="">
                        <RadioGroup defaultValue={difficulty} onValueChange={(value) => setDifficulty(value)}
                                    className="flex flex-col  md:flex-row gap-3">

                            {difficulties.map((d) => {
                                return <motion.div key={d} whileTap={{scale: 0.95}}
                                                   className="relative border-2 border-black rounded-lg">
                                    <Label htmlFor={d.toLowerCase()}
                                           className="relative z-10 flex items-center space-x-2 min-w-36  rounded-lg p-4 cursor-pointer">
                                        <RadioGroupItem value={d.toLowerCase()} id={d.toLowerCase()}/>
                                        <span>{d}</span>
                                    </Label>
                                    {d.toLowerCase() === difficulty.toLowerCase() ? (
                                        <motion.div
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 20,
                                                staggerChildren: 0.1
                                            }}
                                            className="rounded-md z-0 top-0 left-0 w-full h-full absolute bg-brand-400"
                                            layoutId="underline"></motion.div>
                                    ) : null}
                                </motion.div>
                            })}


                        </RadioGroup>
                    </div>
                    <div className="">
                        <motion.button
                            whileTap={{scale: 0.95}}
                            onClick={() => getQuestions()}
                            className={cn(buttonVariants(), "flex gap-3 bg-brand-600 text-white hover:bg-brand-700 py-6 px-9 w-full md:w-auto")}>
                            {isLoading && <Loader className="animate-spin"/>} Start {category?.name} Quiz Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="max-w-screen-lg  pb-16 mx-auto px-3">
                <div className="pb-6">
                    <h1 className="relative text-2xl md:text-4xl font-bold py-4">
                        <span>Other topics</span>
                        <div className="h-1 w-20 bg-brand-600 mx-1 mt-2"></div>
                    </h1>
                </div>
                <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {categories.filter((c) => c.id !== category?.id).map((category) => {
                        return <TopicCard key={category.id} category={category}/>
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default StartQuizPage