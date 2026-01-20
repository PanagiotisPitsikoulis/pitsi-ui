"use client"

import * as React from "react"

import { ChevronLeft, ChevronRight, Clock, X } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Progress } from "@/registry/new-york-v4/ui/progress"

const quizData = {
  title: "JavaScript Fundamentals",
  questions: [
    {
      id: 1,
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "<script href='script.js'>",
        "<script name='script.js'>",
        "<script src='script.js'>",
        "<script file='script.js'>",
      ],
      correct: 2,
    },
    {
      id: 2,
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "alertBox('Hello World')",
        "msg('Hello World')",
        "alert('Hello World')",
        "msgBox('Hello World')",
      ],
      correct: 2,
    },
    {
      id: 3,
      question: "How do you create a function in JavaScript?",
      options: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "create myFunction()",
      ],
      correct: 1,
    },
    {
      id: 4,
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "execute myFunction()",
      ],
      correct: 2,
    },
    {
      id: 5,
      question: "How to write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
      correct: 1,
    },
  ],
}

interface QuizActiveProps {
  onComplete?: (score: number, total: number) => void
  onExit?: () => void
}

export function AppQuizActive1({ onComplete, onExit }: QuizActiveProps) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [selectedAnswers, setSelectedAnswers] = React.useState<
    (number | null)[]
  >(new Array(quizData.questions.length).fill(null))
  const [timeLeft, setTimeLeft] = React.useState(600) // 10 minutes

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quizData.questions[index].correct ? 1 : 0)
    }, 0)
    onComplete?.(score, quizData.questions.length)
  }

  const question = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100
  const answeredCount = selectedAnswers.filter((a) => a !== null).length

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="display text-foreground text-2xl font-bold tracking-tight">
              {quizData.title}
            </h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Clock className="text-muted-foreground size-5" />
              {formatTime(timeLeft)}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={onExit}
              aria-label="Exit quiz"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-colors",
                  selectedAnswers[currentQuestion] === index
                    ? "border-foreground/30 bg-muted"
                    : "hover:bg-muted/50"
                )}
              >
                <span className="text-muted-foreground mr-3 font-medium">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="mr-2 size-4" />
            Previous
          </Button>

          <div className="text-muted-foreground text-sm">
            {answeredCount} of {quizData.questions.length} answered
          </div>

          {currentQuestion === quizData.questions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={answeredCount < quizData.questions.length}
            >
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="ml-2 size-4" />
            </Button>
          )}
        </div>

        <div className="flex justify-center gap-2">
          {quizData.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={cn(
                "size-8 rounded-lg text-sm font-medium transition-colors",
                currentQuestion === index
                  ? "bg-foreground text-background"
                  : selectedAnswers[index] !== null
                    ? "bg-muted"
                    : "hover:bg-muted/50 border"
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
