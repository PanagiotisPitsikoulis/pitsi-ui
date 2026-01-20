"use client"

import { useCallback, useReducer } from "react"

import type { Quiz, QuizAction, QuizResult, QuizState, UserAnswer } from "../types"
import { calculateQuizResult, prepareQuiz } from "../utils"

const initialState: QuizState = {
  quiz: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  isStarted: false,
  isCompleted: false,
  startTime: null,
  result: null,
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        ...initialState,
        quiz: prepareQuiz(action.quiz),
      }

    case "START_QUIZ":
      return {
        ...state,
        isStarted: true,
        startTime: new Date(),
      }

    case "ANSWER_QUESTION": {
      const existingIndex = state.userAnswers.findIndex(
        (a) => a.questionId === action.questionId
      )

      const newAnswer: UserAnswer = {
        questionId: action.questionId,
        selectedAnswerIds: action.answerIds,
        textAnswer: action.textAnswer,
      }

      const newAnswers =
        existingIndex >= 0
          ? state.userAnswers.map((a, i) => (i === existingIndex ? newAnswer : a))
          : [...state.userAnswers, newAnswer]

      return {
        ...state,
        userAnswers: newAnswers,
      }
    }

    case "NEXT_QUESTION":
      if (!state.quiz) return state
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.quiz.questions.length - 1
        ),
      }

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      }

    case "GO_TO_QUESTION":
      if (!state.quiz) return state
      return {
        ...state,
        currentQuestionIndex: Math.max(
          0,
          Math.min(action.index, state.quiz.questions.length - 1)
        ),
      }

    case "COMPLETE_QUIZ": {
      if (!state.quiz || !state.startTime) return state

      const result = calculateQuizResult(
        state.quiz,
        state.userAnswers,
        state.startTime
      )

      return {
        ...state,
        isCompleted: true,
        result,
      }
    }

    case "RESET_QUIZ":
      return state.quiz
        ? {
            ...initialState,
            quiz: prepareQuiz(state.quiz),
          }
        : initialState

    default:
      return state
  }
}

export interface UseQuizOptions {
  onComplete?: (result: QuizResult) => void
}

export function useQuiz(options: UseQuizOptions = {}) {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  const loadQuiz = useCallback((quiz: Quiz) => {
    dispatch({ type: "LOAD_QUIZ", quiz })
  }, [])

  const startQuiz = useCallback(() => {
    dispatch({ type: "START_QUIZ" })
  }, [])

  const answerQuestion = useCallback(
    (questionId: string, answerIds: string[], textAnswer?: string) => {
      dispatch({ type: "ANSWER_QUESTION", questionId, answerIds, textAnswer })
    },
    []
  )

  const nextQuestion = useCallback(() => {
    dispatch({ type: "NEXT_QUESTION" })
  }, [])

  const previousQuestion = useCallback(() => {
    dispatch({ type: "PREVIOUS_QUESTION" })
  }, [])

  const goToQuestion = useCallback((index: number) => {
    dispatch({ type: "GO_TO_QUESTION", index })
  }, [])

  const completeQuiz = useCallback(() => {
    dispatch({ type: "COMPLETE_QUIZ" })
    // Call onComplete callback if result is available
    if (state.quiz && state.startTime) {
      const result = calculateQuizResult(state.quiz, state.userAnswers, state.startTime)
      options.onComplete?.(result)
    }
  }, [state.quiz, state.userAnswers, state.startTime, options])

  const resetQuiz = useCallback(() => {
    dispatch({ type: "RESET_QUIZ" })
  }, [])

  // Derived values
  const currentQuestion = state.quiz?.questions[state.currentQuestionIndex] ?? null
  const currentAnswer = state.userAnswers.find(
    (a) => a.questionId === currentQuestion?.id
  )
  const totalQuestions = state.quiz?.questions.length ?? 0
  const answeredCount = state.userAnswers.length
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0
  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1
  const isFirstQuestion = state.currentQuestionIndex === 0
  const canComplete = answeredCount === totalQuestions

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
    resetQuiz,
  }
}
