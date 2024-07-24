export interface IQuestion {
    id: string,
    topic: string,
    question: string,
    options: {
        id: string,
        label: string
    }[],
    answer_description: string,
    difficulty: string,
    tags: string[]
    selected_option?: string
}

export interface IQuestionAnswer {
    question: string
    answer: string
    passed: boolean
}