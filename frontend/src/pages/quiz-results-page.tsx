import Appbar from "@/components/appbar.tsx";
import {cn} from "@/lib/utils.ts";
import Markdown from "react-markdown";
import useStore from "@/state";
import {categories} from "@/lib/data.ts";
import pb from "@/lib/pocketbase.ts";
import {IQuestionAnswer} from "@/types/question.ts";
import {useEffect, useState} from "react";
import {Loader} from "lucide-react";
import Footer from "@/components/footer.tsx";


function QuizResultsPage() {
    const {currentTest} = useStore((state) => state);
    const category = categories.find((c) => c.name.toLowerCase() === currentTest.topic.toLowerCase());
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<IQuestionAnswer[]>([])

    const getQuestions = () => {
        setIsLoading(true)
        pb.send<IQuestionAnswer[]>(`/api/c/questions/mark`, {
            method: 'POST',
            body: {questions: currentTest.questions.map(q => ({question_id: q.id, answer_id: q.selected_option}))}
        }).then(questions => {
            setResults(questions)
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getQuestions()
    }, []);

    if (isLoading) {
        return <div className="flex-col gap-3 flex items-center justify-center h-screen">
            <Loader className="text-brand-600 h-10 w-10 animate-spin"/>
            <p>Marking your answers</p>
        </div>
    }


    return <div>
        <Appbar/>
        <div className="bg-brand-50 ">
            <div className="max-w-screen-lg relative pt-24 pb-6 mx-auto px-5">
                <i className={cn(" text-9xl text-brand-100 absolute right-4", category?.icon)}></i>
                <div className="relative z-10">
                    <p className="font-bold text-lg">Results</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl md:text-6xl font-bold py-4">
                                <span className="text-brand-600">{results.filter(r => r.passed).length}</span><span
                                className="text-2xl md:text-4xl">/10</span>
                            </h1>
                        </div>
                        <p className="font-bold text-2xl md:text-4xl space-x-2">
                            <span>{category?.name}</span>
                            <span className="font-normal uppercase">({currentTest.difficulty})</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="max-w-screen-lg  py-10 mx-auto px-3">
                <div className="pb-6">
                    <h1 className="relative text-2xl md:text-4xl font-bold py-4">
                        <span>Question Answers</span>
                        <div className="h-1 w-20 bg-brand-600 mx-1 mt-2"></div>
                    </h1>
                </div>
                <div className="divide-y">
                    {currentTest.questions.map((question, index) => {
                        return <div key={question.id} className="py-4 px-4">
                            <div className="flex gap-3">
                                <div className="font-bold">{index + 1}.</div>
                                <div>
                                    <Markdown className="text-lg">{question.question}</Markdown>
                                </div>
                            </div>
                            <div className="pl-5 py-4 space-y-2">
                                {question.options.map((option, index) => {
                                    return <div key={option.id}
                                                className={cn("px-3 py-2", results.find(r => r.question === question.id)?.answer === option.id ? 'bg-brand-50 border border-brand-600 rounded' : question.selected_option === option.id ? 'bg-red-50 border border-red-600 rounded' : '')}>
                                        <div className="flex gap-3 space-y-0.5">
                                            <div className="font-bold">{['A', 'B', 'C', 'D'][index]}.</div>
                                            <div>
                                                <Markdown>{option.label}</Markdown>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <Markdown className="text-sm p-3 bg-gray-100 rounded">{question.answer_description}</Markdown>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default QuizResultsPage