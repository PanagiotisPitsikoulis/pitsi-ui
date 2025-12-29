"use client"

import * as React from "react"

import { AppQuizActive1 } from "@/registry/new-york-v4/blocks/application/app-quiz-active-1"
import { AppQuizBrowse1 } from "@/registry/new-york-v4/blocks/application/app-quiz-browse-1"
import { AppQuizDashboard1 } from "@/registry/new-york-v4/blocks/application/app-quiz-dashboard-1"
import { AppQuizResults1 } from "@/registry/new-york-v4/blocks/application/app-quiz-results-1"
import { AppQuizSettings1 } from "@/registry/new-york-v4/blocks/application/app-quiz-settings-1"
import { AppQuizShell1 } from "@/registry/new-york-v4/blocks/application/app-quiz-shell-1"

type QuizView =
  | "dashboard"
  | "quizzes"
  | "active"
  | "results"
  | "history"
  | "leaderboard"
  | "settings"

export function AppQuiz() {
  const [activeView, setActiveView] = React.useState<QuizView>("dashboard")
  const [quizScore, setQuizScore] = React.useState({ score: 0, total: 0 })

  const handleStartQuiz = () => {
    setActiveView("active")
  }

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore({ score, total })
    setActiveView("results")
  }

  const handleNavigate = (view: string) => {
    setActiveView(view as QuizView)
  }

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <AppQuizDashboard1 onStartQuiz={handleStartQuiz} />
      case "quizzes":
        return <AppQuizBrowse1 onStartQuiz={handleStartQuiz} />
      case "active":
        return (
          <AppQuizActive1
            onComplete={handleQuizComplete}
            onExit={() => setActiveView("quizzes")}
          />
        )
      case "results":
        return (
          <AppQuizResults1
            score={quizScore.score}
            total={quizScore.total}
            onRetry={handleStartQuiz}
            onBrowse={() => setActiveView("quizzes")}
          />
        )
      case "history":
        return <AppQuizBrowse1 onStartQuiz={handleStartQuiz} />
      case "leaderboard":
        return <AppQuizDashboard1 onStartQuiz={handleStartQuiz} />
      case "settings":
        return <AppQuizSettings1 />
      default:
        return <AppQuizDashboard1 onStartQuiz={handleStartQuiz} />
    }
  }

  return (
    <AppQuizShell1 activeView={activeView} onNavigate={handleNavigate}>
      {renderContent()}
    </AppQuizShell1>
  )
}
