import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "@/pages/home-page.tsx";
import StartQuizPage from "@/pages/start-quiz-page.tsx";
import QuizResultsPage from "@/pages/quiz-results-page.tsx";
import QuizRoomPage from "@/pages/quiz-room-page.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/start-quiz/:quizId",
        element: <StartQuizPage/>,
    },
    {
        path: "/quiz-results",
        element: <QuizResultsPage/>,
    },
    {
        path: "/quiz-room",
        element: <QuizRoomPage/>,
    },

]);
export default router