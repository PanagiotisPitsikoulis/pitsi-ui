import { QuizResult, UserAnswer, Quiz } from '../types/index.js';
import 'zod';

interface UseQuizOptions {
    onComplete?: (result: QuizResult) => void;
}
declare function useQuiz(options?: UseQuizOptions): {
    quiz: {
        id: string;
        title: string;
        questions: {
            id: string;
            text: string;
            type: "multiple_choice" | "single_choice" | "true_false" | "text_input";
            answers: {
                id: string;
                text: string;
                isCorrect?: boolean | undefined;
            }[];
            points: number;
            explanation?: string | undefined;
            timeLimit?: number | undefined;
            imageUrl?: string | undefined;
        }[];
        shuffleQuestions: boolean;
        shuffleAnswers: boolean;
        showResults: boolean;
        timeLimit?: number | undefined;
        description?: string | undefined;
        passingScore?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } | null;
    currentQuestionIndex: number;
    currentQuestion: {
        id: string;
        text: string;
        type: "multiple_choice" | "single_choice" | "true_false" | "text_input";
        answers: {
            id: string;
            text: string;
            isCorrect?: boolean | undefined;
        }[];
        points: number;
        explanation?: string | undefined;
        timeLimit?: number | undefined;
        imageUrl?: string | undefined;
    } | null;
    currentAnswer: UserAnswer | undefined;
    userAnswers: UserAnswer[];
    isStarted: boolean;
    isCompleted: boolean;
    startTime: Date | null;
    result: QuizResult | null;
    totalQuestions: number;
    answeredCount: number;
    progress: number;
    isLastQuestion: boolean;
    isFirstQuestion: boolean;
    canComplete: boolean;
    loadQuiz: (quiz: Quiz) => void;
    startQuiz: () => void;
    answerQuestion: (questionId: string, answerIds: string[], textAnswer?: string) => void;
    nextQuestion: () => void;
    previousQuestion: () => void;
    goToQuestion: (index: number) => void;
    completeQuiz: () => void;
    resetQuiz: () => void;
};

export { type UseQuizOptions, useQuiz };
