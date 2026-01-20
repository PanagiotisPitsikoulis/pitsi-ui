"use client"

import { useQuiz, type Quiz } from "@pitsi/quiz-core"

const sampleQuiz: Quiz = {
  id: "sample-quiz-1",
  title: "Sample Quiz",
  description: "Test your knowledge with this sample quiz",
  shuffleQuestions: false,
  shuffleAnswers: false,
  showResults: true,
  questions: [
    {
      id: "q1",
      text: "What is 2 + 2?",
      type: "single_choice",
      points: 1,
      answers: [
        { id: "a1", text: "3", isCorrect: false },
        { id: "a2", text: "4", isCorrect: true },
        { id: "a3", text: "5", isCorrect: false },
      ],
    },
    {
      id: "q2",
      text: "What is the capital of France?",
      type: "single_choice",
      points: 1,
      answers: [
        { id: "a1", text: "London", isCorrect: false },
        { id: "a2", text: "Paris", isCorrect: true },
        { id: "a3", text: "Berlin", isCorrect: false },
      ],
    },
  ],
  passingScore: 50,
}

export default function HomePage() {
  const {
    quiz,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isStarted,
    isCompleted,
    result,
    loadQuiz,
    startQuiz,
    answerQuestion,
    nextQuestion,
    completeQuiz,
    resetQuiz,
    currentAnswer,
    isLastQuestion,
  } = useQuiz()

  if (!quiz) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Quiz Web
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Interactive quiz application
          </p>
          <button
            onClick={() => loadQuiz(sampleQuiz)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 rounded-lg px-6 py-3 font-semibold"
          >
            Load Sample Quiz
          </button>
        </div>
      </main>
    )
  }

  if (!isStarted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          <p className="text-muted-foreground mt-2">{quiz.description}</p>
          <p className="text-muted-foreground mt-4">
            {totalQuestions} questions
          </p>
          <button
            onClick={startQuiz}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 rounded-lg px-6 py-3 font-semibold"
          >
            Start Quiz
          </button>
        </div>
      </main>
    )
  }

  if (isCompleted && result) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Quiz Complete!</h1>
          <div className="mt-6 space-y-2">
            <p>
              Score: {result.correctAnswers} / {result.totalQuestions}
            </p>
            <p>Percentage: {result.percentage.toFixed(1)}%</p>
            <p className={result.passed ? "text-success" : "text-destructive"}>
              {result.passed ? "Passed!" : "Failed"}
            </p>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 rounded-lg px-6 py-3 font-semibold"
          >
            Try Again
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="text-muted-foreground mb-4 text-sm">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
        <h2 className="mb-6 text-2xl font-bold">{currentQuestion?.text}</h2>
        <div className="space-y-3">
          {currentQuestion?.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() =>
                answerQuestion(currentQuestion.id, [answer.id])
              }
              className={`w-full rounded-lg border p-4 text-left transition-colors ${
                currentAnswer?.selectedAnswerIds.includes(answer.id)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-muted"
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          {isLastQuestion ? (
            <button
              onClick={completeQuiz}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!currentAnswer}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground rounded-lg px-6 py-3 font-semibold disabled:cursor-not-allowed"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
