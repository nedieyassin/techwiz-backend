import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {IQuestion} from "@/types/question.ts";

interface storeState {
    currentTest: {
        topic: string
        difficulty: string // easy, medium, hard
        questions: IQuestion[]
    },
    setCurrentTest: (test: { topic: string, difficulty: string, questions: IQuestion[] }) => void
    setQuestionAnswer: (question_id: string, answer_id: string) => void
}


const useStore = create(persist<storeState>((set) => ({
            currentTest: {
                topic: '',
                difficulty: '',
                questions: []
            },
            setCurrentTest: (test: { topic: string, difficulty: string, questions: IQuestion[] }) => set({currentTest: test}),
            setQuestionAnswer: (question_id: string, answer_id: string) => set((state) => {
                return {
                    currentTest: {
                        ...state.currentTest,
                        questions: state.currentTest?.questions.map(question => {
                            if (question.id === question_id) {
                                return {
                                    ...question,
                                    selected_option: answer_id
                                }
                            }
                            return question
                        })
                    }
                }
            })
        }),
        {
            name: 'store',
        })
)

export default useStore