"use client"

import { CheckCircle, RotateCcw, Trophy, XCircle } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

interface QuizResultsProps {
  score?: number
  total?: number
  timeTaken?: string
  onRetry?: () => void
  onBrowse?: () => void
}

export function AppQuizResults1({
  score = 8,
  total = 10,
  timeTaken = "6:32",
  onRetry,
  onBrowse,
}: QuizResultsProps) {
  const percentage = Math.round((score / total) * 100)
  const isPassing = percentage >= 70

  const results = [
    { question: "External script syntax", correct: true },
    { question: "Alert box syntax", correct: true },
    { question: "Function creation", correct: true },
    { question: "Function calling", correct: false },
    { question: "IF statement syntax", correct: true },
    { question: "Variable declaration", correct: true },
    { question: "Array methods", correct: true },
    { question: "Object properties", correct: false },
    { question: "Event handling", correct: true },
    { question: "DOM manipulation", correct: true },
  ]

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="text-center">
          <div className="bg-muted mx-auto mb-4 flex size-20 items-center justify-center rounded-full">
            <Trophy className="text-muted-foreground size-10" />
          </div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Quiz Complete!
          </h1>
          <p className="text-muted-foreground">
            {isPassing ? "Great job! You passed!" : "Keep practicing!"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold">
                {score}/{total}
              </p>
              <p className="text-muted-foreground text-sm">Correct Answers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold">{percentage}%</p>
              <p className="text-muted-foreground text-sm">Accuracy</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold">{timeTaken}</p>
              <p className="text-muted-foreground text-sm">Time Taken</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-sm font-medium">
                      Q{index + 1}
                    </span>
                    <span className="text-sm">{result.question}</span>
                  </div>
                  {result.correct ? (
                    <CheckCircle className="size-5 text-green-500" />
                  ) : (
                    <XCircle className="size-5 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" onClick={onRetry}>
            <RotateCcw className="mr-2 size-4" />
            Retry Quiz
          </Button>
          <Button className="flex-1" onClick={onBrowse}>
            Browse More Quizzes
          </Button>
        </div>
      </div>
    </div>
  )
}
