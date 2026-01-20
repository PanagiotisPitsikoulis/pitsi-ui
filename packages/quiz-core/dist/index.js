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

// src/hooks/use-quiz.ts
import { useCallback, useReducer } from "react";
var initialState = {
  quiz: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  isStarted: false,
  isCompleted: false,
  startTime: null,
  result: null
};
function quizReducer(state, action) {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        ...initialState,
        quiz: prepareQuiz(action.quiz)
      };
    case "START_QUIZ":
      return {
        ...state,
        isStarted: true,
        startTime: /* @__PURE__ */ new Date()
      };
    case "ANSWER_QUESTION": {
      const existingIndex = state.userAnswers.findIndex(
        (a) => a.questionId === action.questionId
      );
      const newAnswer = {
        questionId: action.questionId,
        selectedAnswerIds: action.answerIds,
        textAnswer: action.textAnswer
      };
      const newAnswers = existingIndex >= 0 ? state.userAnswers.map((a, i) => i === existingIndex ? newAnswer : a) : [...state.userAnswers, newAnswer];
      return {
        ...state,
        userAnswers: newAnswers
      };
    }
    case "NEXT_QUESTION":
      if (!state.quiz) return state;
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.quiz.questions.length - 1
        )
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      };
    case "GO_TO_QUESTION":
      if (!state.quiz) return state;
      return {
        ...state,
        currentQuestionIndex: Math.max(
          0,
          Math.min(action.index, state.quiz.questions.length - 1)
        )
      };
    case "COMPLETE_QUIZ": {
      if (!state.quiz || !state.startTime) return state;
      const result = calculateQuizResult(
        state.quiz,
        state.userAnswers,
        state.startTime
      );
      return {
        ...state,
        isCompleted: true,
        result
      };
    }
    case "RESET_QUIZ":
      return state.quiz ? {
        ...initialState,
        quiz: prepareQuiz(state.quiz)
      } : initialState;
    default:
      return state;
  }
}
function useQuiz(options = {}) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const loadQuiz = useCallback((quiz) => {
    dispatch({ type: "LOAD_QUIZ", quiz });
  }, []);
  const startQuiz = useCallback(() => {
    dispatch({ type: "START_QUIZ" });
  }, []);
  const answerQuestion = useCallback(
    (questionId, answerIds, textAnswer) => {
      dispatch({ type: "ANSWER_QUESTION", questionId, answerIds, textAnswer });
    },
    []
  );
  const nextQuestion = useCallback(() => {
    dispatch({ type: "NEXT_QUESTION" });
  }, []);
  const previousQuestion = useCallback(() => {
    dispatch({ type: "PREVIOUS_QUESTION" });
  }, []);
  const goToQuestion = useCallback((index) => {
    dispatch({ type: "GO_TO_QUESTION", index });
  }, []);
  const completeQuiz = useCallback(() => {
    dispatch({ type: "COMPLETE_QUIZ" });
    if (state.quiz && state.startTime) {
      const result = calculateQuizResult(state.quiz, state.userAnswers, state.startTime);
      options.onComplete?.(result);
    }
  }, [state.quiz, state.userAnswers, state.startTime, options]);
  const resetQuiz = useCallback(() => {
    dispatch({ type: "RESET_QUIZ" });
  }, []);
  const currentQuestion = state.quiz?.questions[state.currentQuestionIndex] ?? null;
  const currentAnswer = state.userAnswers.find(
    (a) => a.questionId === currentQuestion?.id
  );
  const totalQuestions = state.quiz?.questions.length ?? 0;
  const answeredCount = state.userAnswers.length;
  const progress = totalQuestions > 0 ? answeredCount / totalQuestions * 100 : 0;
  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = state.currentQuestionIndex === 0;
  const canComplete = answeredCount === totalQuestions;
  return {
    // State
    quiz: state.quiz,
    currentQuestionIndex: state.currentQuestionIndex,
    currentQuestion,
    currentAnswer,
    userAnswers: state.userAnswers,
    isStarted: state.isStarted,
    isCompleted: state.isCompleted,
    startTime: state.startTime,
    result: state.result,
    // Derived
    totalQuestions,
    answeredCount,
    progress,
    isLastQuestion,
    isFirstQuestion,
    canComplete,
    // Actions
    loadQuiz,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    completeQuiz,
    resetQuiz
  };
}
export {
  answerSchema,
  calculateQuestionScore,
  calculateQuizResult,
  formatTime,
  getProgressPercentage,
  prepareQuiz,
  questionSchema,
  questionTypeSchema,
  quizSchema,
  shuffleArray,
  useQuiz
};
//# sourceMappingURL=index.js.map