import { z } from 'zod';

declare const answerSchema: z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
    isCorrect: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    text: string;
    isCorrect?: boolean | undefined;
}, {
    id: string;
    text: string;
    isCorrect?: boolean | undefined;
}>;
type Answer = z.infer<typeof answerSchema>;
declare const questionTypeSchema: z.ZodEnum<["multiple_choice", "single_choice", "true_false", "text_input"]>;
type QuestionType = z.infer<typeof questionTypeSchema>;
declare const questionSchema: z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<["multiple_choice", "single_choice", "true_false", "text_input"]>;
    answers: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        isCorrect: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        isCorrect?: boolean | undefined;
    }, {
        id: string;
        text: string;
        isCorrect?: boolean | undefined;
    }>, "many">;
    explanation: z.ZodOptional<z.ZodString>;
    points: z.ZodDefault<z.ZodNumber>;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    imageUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
}, {
    id: string;
    text: string;
    type: "multiple_choice" | "single_choice" | "true_false" | "text_input";
    answers: {
        id: string;
        text: string;
        isCorrect?: boolean | undefined;
    }[];
    explanation?: string | undefined;
    points?: number | undefined;
    timeLimit?: number | undefined;
    imageUrl?: string | undefined;
}>;
type Question = z.infer<typeof questionSchema>;
declare const quizSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    questions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<["multiple_choice", "single_choice", "true_false", "text_input"]>;
        answers: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            text: z.ZodString;
            isCorrect: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            text: string;
            isCorrect?: boolean | undefined;
        }, {
            id: string;
            text: string;
            isCorrect?: boolean | undefined;
        }>, "many">;
        explanation: z.ZodOptional<z.ZodString>;
        points: z.ZodDefault<z.ZodNumber>;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        imageUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        id: string;
        text: string;
        type: "multiple_choice" | "single_choice" | "true_false" | "text_input";
        answers: {
            id: string;
            text: string;
            isCorrect?: boolean | undefined;
        }[];
        explanation?: string | undefined;
        points?: number | undefined;
        timeLimit?: number | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    shuffleQuestions: z.ZodDefault<z.ZodBoolean>;
    shuffleAnswers: z.ZodDefault<z.ZodBoolean>;
    showResults: z.ZodDefault<z.ZodBoolean>;
    passingScore: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
        explanation?: string | undefined;
        points?: number | undefined;
        timeLimit?: number | undefined;
        imageUrl?: string | undefined;
    }[];
    timeLimit?: number | undefined;
    description?: string | undefined;
    shuffleQuestions?: boolean | undefined;
    shuffleAnswers?: boolean | undefined;
    showResults?: boolean | undefined;
    passingScore?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
type Quiz = z.infer<typeof quizSchema>;
interface UserAnswer {
    questionId: string;
    selectedAnswerIds: string[];
    textAnswer?: string;
    timeSpent?: number;
}
interface QuizResult {
    quizId: string;
    totalQuestions: number;
    correctAnswers: number;
    totalPoints: number;
    earnedPoints: number;
    percentage: number;
    passed: boolean;
    timeSpent: number;
    answers: UserAnswer[];
    completedAt: Date;
}
interface QuizState {
    quiz: Quiz | null;
    currentQuestionIndex: number;
    userAnswers: UserAnswer[];
    isStarted: boolean;
    isCompleted: boolean;
    startTime: Date | null;
    result: QuizResult | null;
}
type QuizAction = {
    type: "LOAD_QUIZ";
    quiz: Quiz;
} | {
    type: "START_QUIZ";
} | {
    type: "ANSWER_QUESTION";
    questionId: string;
    answerIds: string[];
    textAnswer?: string;
} | {
    type: "NEXT_QUESTION";
} | {
    type: "PREVIOUS_QUESTION";
} | {
    type: "GO_TO_QUESTION";
    index: number;
} | {
    type: "COMPLETE_QUIZ";
} | {
    type: "RESET_QUIZ";
};

export { type Answer, type Question, type QuestionType, type Quiz, type QuizAction, type QuizResult, type QuizState, type UserAnswer, answerSchema, questionSchema, questionTypeSchema, quizSchema };
