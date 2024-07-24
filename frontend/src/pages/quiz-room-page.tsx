import {RiTerminalLine} from "react-icons/ri";
import {AnimatePresence, motion} from "framer-motion";
import {Button, buttonVariants} from "@/components/ui/button.tsx";
import Markdown from "react-markdown";
import {useState} from "react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";
import {wrap} from "popmotion";
import {cn} from "@/lib/utils.ts";
import useStore from "@/state";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {useNavigate} from "react-router-dom";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};


function QuizRoomPage() {
    const {currentTest, setCurrentTest, setQuestionAnswer} = useStore((state) => state);
    const navigate = useNavigate();

    const [[page, direction], setPage] = useState([0, 0]);


    const index = wrap(0, currentTest.questions.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const question = currentTest.questions[index];

    const handleAnswer = (answer_id: string) => {
        setQuestionAnswer(question.id, answer_id)
    }

    return <div className="">
        <div className="flex items-center h-16 w-full ">
            <div className="max-w-screen-lg mx-auto px-6 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <RiTerminalLine className="h-6 w-6"/>
                    <span className="font-semibold">{currentTest.topic}</span>
                </div>
                <div className="flex gap-2 select-none">
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.button
                                className={cn(buttonVariants({variant: 'ghost'}), 'px-4 rounded-full')}>
                                Cancel
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure you want to cancel?</DialogTitle>
                                <DialogDescription>
                                    Cancelling will reset your progress and cannot be undone. Are you sure you want to
                                    cancel?
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary" className="px-4 rounded-full">
                                        No
                                    </Button>
                                </DialogClose>
                                <Button onClick={() => {
                                    setCurrentTest({topic: '', difficulty: '', questions: []});
                                    navigate(-1)
                                }} type="submit" className="bg-brand-600 hover:bg-brand-700 px-4 rounded-full">Yes,
                                    cancel</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.button
                                className={cn(buttonVariants(), 'bg-brand-600 hover:bg-brand-700 px-4 rounded-full')}
                                whileTap={{scale: 0.95}}>SUBMIT
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure you want to submit?</DialogTitle>
                                <DialogDescription>
                                    Any unanswered questions will be failed. You can't
                                    undo this action.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary" className="px-4 rounded-full">
                                        No
                                    </Button>
                                </DialogClose>
                                <Button onClick={() => {
                                    navigate("/quiz-results")
                                }} type="submit" className="bg-brand-600 hover:bg-brand-700 px-4 rounded-full">Yes,
                                    submit</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </div>

        <div>
            <div className="max-w-screen-lg  mx-auto px-3">
                {question && <div className="p-4">
                    <div>
                        <div className="flex items-center justify-between pb-8">
                            <div>
                                <div className="font-bold text-lg"><span
                                    className="text-brand-600">{index + 1}</span> / {currentTest.questions.length}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <motion.button
                                    disabled={page === 0}
                                    onClick={() => paginate(-1)}
                                    whileTap={{scale: 0.95}}
                                    className={cn("select-none p-2 hover:bg-gray-100 rounded-full flex items-center justify-center", {"opacity-50": page === 0})}>
                                    <LuChevronLeft className="h-6 w-6"/>
                                </motion.button>
                                <motion.button
                                    disabled={page === currentTest.questions.length - 1}
                                    onClick={() => paginate(1)}
                                    whileTap={{scale: 0.95}}
                                    className={cn("select-none p-2 hover:bg-gray-100 gap-1 rounded-full flex items-center justify-center", {"opacity-50": page === currentTest.questions.length - 1})}>
                                    <span className="inline-block pl-4">Next</span>
                                    <LuChevronRight className="h-6 w-6"/>
                                </motion.button>
                            </div>
                        </div>
                        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                            <motion.div
                                layout
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {type: "spring", stiffness: 300, damping: 30},
                                    opacity: {duration: 0.2}
                                }}
                                className="space-y-4"
                            >
                                <Markdown className="text-xl md:text-2xl">{question?.question}</Markdown>
                                <div className="py-5 space-y-2">
                                    {question?.options.map((option, index) => (
                                        <label htmlFor={option.id} key={option.label}
                                               className="flex  gap-2 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-3xl">
                                            <div className="pt-0.5">
                                                <input defaultChecked={question.selected_option === option.id}
                                                       onClick={() => handleAnswer(option.id)} name="answer"
                                                       id={option.id} type="radio"
                                                       className="h-4 w-4 accent-brand-600"/>
                                            </div>
                                            <div className="font-bold">
                                                {['A', 'B', 'C', 'D'][index]}.
                                            </div>
                                            <div>
                                                <Markdown>{option.label}</Markdown>
                                            </div>
                                        </label>))
                                    }
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <div
                            className="flex flex-wrap gap-3 w-full pt-16 pb-16 select-none">
                            {currentTest.questions.map((q, index) => {
                                return <button key={q.id} onClick={() => {
                                    const newDirection = page > index ? -1 : 1
                                    setPage([index, newDirection]);
                                }}
                                               className={cn("border-2 border-black shrink-0 flex items-center justify-center h-8 w-8 rounded  text-black", {
                                                   "bg-brand-600": index === page,
                                                   "border-brand-600": q.selected_option
                                               })}>{index + 1}
                                </button>
                            })}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </div>
}

export default QuizRoomPage