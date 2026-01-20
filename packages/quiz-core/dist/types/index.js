// src/types/quiz.ts
import { z } from "zod";
var answerSchema = z.object({
  id: z.string(),
  text: z.string(),
  isCorrect: z.boolean().optional()
});
var questionTypeSchema = z.enum([
  "multiple_choice",
  "single_choice",
  "true_false",
  "text_input"
]);
var questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: questionTypeSchema,
  answers: z.array(answerSchema),
  explanation: z.string().optional(),
  points: z.number().default(1),
  timeLimit: z.number().optional(),
  // in seconds
  imageUrl: z.string().optional()
});
var quizSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  questions: z.array(questionSchema),
  timeLimit: z.number().optional(),
  // total quiz time in seconds
  shuffleQuestions: z.boolean().default(false),
  shuffleAnswers: z.boolean().default(false),
  showResults: z.boolean().default(true),
  passingScore: z.number().optional(),
  // percentage
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});
export {
  answerSchema,
  questionSchema,
  questionTypeSchema,
  quizSchema
};
//# sourceMappingURL=index.js.map