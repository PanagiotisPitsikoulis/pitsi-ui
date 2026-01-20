// src/utils/scoring.ts
function calculateQuestionScore(question, userAnswer) {
  if (!userAnswer) {
    return { isCorrect: false, points: 0 };
  }
  const correctAnswerIds = question.answers.filter((a) => a.isCorrect).map((a) => a.id);
  if (question.type === "text_input") {
    return { isCorrect: false, points: 0 };
  }
  const userAnswerIds = new Set(userAnswer.selectedAnswerIds);
  const correctIds = new Set(correctAnswerIds);
  const isCorrect = userAnswerIds.size === correctIds.size && [...userAnswerIds].every((id) => correctIds.has(id));
  return {
    isCorrect,
    points: isCorrect ? question.points : 0
  };
}
function calculateQuizResult(quiz, userAnswers, startTime) {
  const answerMap = new Map(userAnswers.map((a) => [a.questionId, a]));
  let correctAnswers = 0;
  let earnedPoints = 0;
  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
  for (const question of quiz.questions) {
    const result = calculateQuestionScore(question, answerMap.get(question.id));
    if (result.isCorrect) {
      correctAnswers++;
    }
    earnedPoints += result.points;
  }
  const percentage = totalPoints > 0 ? earnedPoints / totalPoints * 100 : 0;
  const passed = quiz.passingScore ? percentage >= quiz.passingScore : true;
  const timeSpent = Math.floor(((/* @__PURE__ */ new Date()).getTime() - startTime.getTime()) / 1e3);
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
    completedAt: /* @__PURE__ */ new Date()
  };
}
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function prepareQuiz(quiz) {
  let questions = [...quiz.questions];
  if (quiz.shuffleQuestions) {
    questions = shuffleArray(questions);
  }
  if (quiz.shuffleAnswers) {
    questions = questions.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers)
    }));
  }
  return {
    ...quiz,
    questions
  };
}
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
function getProgressPercentage(currentIndex, totalQuestions) {
  if (totalQuestions === 0) return 0;
  return (currentIndex + 1) / totalQuestions * 100;
}
export {
  calculateQuestionScore,
  calculateQuizResult,
  formatTime,
  getProgressPercentage,
  prepareQuiz,
  shuffleArray
};
//# sourceMappingURL=index.js.map