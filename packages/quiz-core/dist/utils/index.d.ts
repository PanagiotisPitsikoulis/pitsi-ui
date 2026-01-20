import { Question, UserAnswer, Quiz, QuizResult } from '../types/index.js';
import 'zod';

/**
 * Calculate the score for a single question
 */
declare function calculateQuestionScore(question: Question, userAnswer: UserAnswer | undefined): {
    isCorrect: boolean;
    points: number;
};
/**
 * Calculate the total quiz result
 */
declare function calculateQuizResult(quiz: Quiz, userAnswers: UserAnswer[], startTime: Date): QuizResult;
/**
 * Shuffle an array using Fisher-Yates algorithm
 */
declare function shuffleArray<T>(array: T[]): T[];
/**
 * Prepare quiz by optionally shuffling questions and answers
 */
declare function prepareQuiz(quiz: Quiz): Quiz;
/**
 * Format time in seconds to mm:ss string
 */
declare function formatTime(seconds: number): string;
/**
 * Get progress percentage
 */
declare function getProgressPercentage(currentIndex: number, totalQuestions: number): number;

export { calculateQuestionScore, calculateQuizResult, formatTime, getProgressPercentage, prepareQuiz, shuffleArray };
