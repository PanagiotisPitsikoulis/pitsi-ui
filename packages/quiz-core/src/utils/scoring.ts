import type { Question, Quiz, QuizResult, UserAnswer } from "../types"

/**
 * Calculate the score for a single question
 */
export function calculateQuestionScore(
  question: Question,
  userAnswer: UserAnswer | undefined
): { isCorrect: boolean; points: number } {
  if (!userAnswer) {
    return { isCorrect: false, points: 0 }
  }

  const correctAnswerIds = question.answers
    .filter((a) => a.isCorrect)
    .map((a) => a.id)

  // For text input, we can't auto-grade (needs manual review)
  if (question.type === "text_input") {
    return { isCorrect: false, points: 0 }
  }

  // Check if user's answers match correct answers exactly
  const userAnswerIds = new Set(userAnswer.selectedAnswerIds)
  const correctIds = new Set(correctAnswerIds)

  const isCorrect =
    userAnswerIds.size === correctIds.size &&
    [...userAnswerIds].every((id) => correctIds.has(id))

  return {
    isCorrect,
    points: isCorrect ? question.points : 0,
  }
}

/**
 * Calculate the total quiz result
 */
export function calculateQuizResult(
  quiz: Quiz,
  userAnswers: UserAnswer[],
  startTime: Date
): QuizResult {
  const answerMap = new Map(userAnswers.map((a) => [a.questionId, a]))

  let correctAnswers = 0
  let earnedPoints = 0
  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0)

  for (const question of quiz.questions) {
    const result = calculateQuestionScore(question, answerMap.get(question.id))
    if (result.isCorrect) {
      correctAnswers++
    }
    earnedPoints += result.points
  }

  const percentage = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0
  const passed = quiz.passingScore ? percentage >= quiz.passingScore : true
  const timeSpent = Math.floor((new Date().getTime() - startTime.getTime()) / 1000)

  return {
    quizId: quiz.id,
    totalQuestions: quiz.questions.length,
    correctAnswers,
    totalPoints,
    earnedPoints,
    percentage,
    passed,
    timeSpent,
    answers: userAnswers,
    completedAt: new Date(),
  }
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Prepare quiz by optionally shuffling questions and answers
 */
export function prepareQuiz(quiz: Quiz): Quiz {
  let questions = [...quiz.questions]

  if (quiz.shuffleQuestions) {
    questions = shuffleArray(questions)
  }

  if (quiz.shuffleAnswers) {
    questions = questions.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }))
  }

  return {
    ...quiz,
    questions,
  }
}

/**
 * Format time in seconds to mm:ss string
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

/**
 * Get progress percentage
 */
export function getProgressPercentage(
  currentIndex: number,
  totalQuestions: number
): number {
  if (totalQuestions === 0) return 0
  return ((currentIndex + 1) / totalQuestions) * 100
}
