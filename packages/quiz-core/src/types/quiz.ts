import { z } from "zod"

// Answer schema and type
export const answerSchema = z.object({
  id: z.string(),
  text: z.string(),
  isCorrect: z.boolean().optional(),
})

export type Answer = z.infer<typeof answerSchema>

// Question types
export const questionTypeSchema = z.enum([
  "multiple_choice",
  "single_choice",
  "true_false",
  "text_input",
])

export type QuestionType = z.infer<typeof questionTypeSchema>

// Question schema and type
export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: questionTypeSchema,
  answers: z.array(answerSchema),
  explanation: z.string().optional(),
  points: z.number().default(1),
  timeLimit: z.number().optional(), // in seconds
  imageUrl: z.string().optional(),
})

export type Question = z.infer<typeof questionSchema>

// Quiz schema and type
export const quizSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  questions: z.array(questionSchema),
  timeLimit: z.number().optional(), // total quiz time in seconds
  shuffleQuestions: z.boolean().default(false),
  shuffleAnswers: z.boolean().default(false),
  showResults: z.boolean().default(true),
  passingScore: z.number().optional(), // percentage
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Quiz = z.infer<typeof quizSchema>

// User answer type
export interface UserAnswer {
  questionId: string
  selectedAnswerIds: string[]
  textAnswer?: string
  timeSpent?: number // in seconds
}

// Quiz result type
export interface QuizResult {
  quizId: string
  totalQuestions: number
  correctAnswers: number
  totalPoints: number
  earnedPoints: number
  percentage: number
  passed: boolean
  timeSpent: number // total time in seconds
  answers: UserAnswer[]
  completedAt: Date
}

// Quiz state for the hook
export interface QuizState {
  quiz: Quiz | null
  currentQuestionIndex: number
  userAnswers: UserAnswer[]
  isStarted: boolean
  isCompleted: boolean
  startTime: Date | null
  result: QuizResult | null
}

// Quiz actions
export type QuizAction =
  | { type: "LOAD_QUIZ"; quiz: Quiz }
  | { type: "START_QUIZ" }
  | { type: "ANSWER_QUESTION"; questionId: string; answerIds: string[]; textAnswer?: string }
  | { type: "NEXT_QUESTION" }
  | { type: "PREVIOUS_QUESTION" }
  | { type: "GO_TO_QUESTION"; index: number }
  | { type: "COMPLETE_QUIZ" }
  | { type: "RESET_QUIZ" }
