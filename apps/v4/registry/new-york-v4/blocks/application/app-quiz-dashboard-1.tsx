"use client"

import { BookOpen, Flame, Target, TrendingUp, Zap } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const stats = [
  {
    title: "Quizzes Completed",
    value: "47",
    change: "+5 this week",
    icon: BookOpen,
  },
  {
    title: "Accuracy Rate",
    value: "84%",
    change: "+2% from last week",
    icon: Target,
  },
  {
    title: "Current Streak",
    value: "12 days",
    change: "Personal best!",
    icon: Flame,
  },
  {
    title: "Total Points",
    value: "2,340",
    change: "+180 this week",
    icon: Zap,
  },
]

const recentQuizzes = [
  {
    name: "JavaScript Fundamentals",
    score: 9,
    total: 10,
    category: "Programming",
    date: "Today",
  },
  {
    name: "World Geography",
    score: 7,
    total: 10,
    category: "Geography",
    date: "Yesterday",
  },
  {
    name: "Science Trivia",
    score: 8,
    total: 10,
    category: "Science",
    date: "2 days ago",
  },
]

const weeklyProgress = [65, 72, 68, 85, 78, 90, 84]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

interface QuizDashboardProps {
  onStartQuiz?: () => void
}

export function AppQuizDashboard1({ onStartQuiz }: QuizDashboardProps) {
  const maxScore = Math.max(...weeklyProgress)
  const minScore = Math.min(...weeklyProgress)
  const range = maxScore - minScore

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your learning progress
            </p>
          </div>
          <Button onClick={onStartQuiz}>
            <Zap className="mr-2 size-4" />
            Start Quiz
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-muted-foreground text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="text-muted-foreground size-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-muted-foreground text-xs">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Weekly Accuracy</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Your performance this week
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">84%</p>
                  <p className="text-muted-foreground flex items-center justify-end text-xs">
                    <TrendingUp className="mr-1 size-3" />
                    +2% from last week
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-end gap-2">
                {weeklyProgress.map((score, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex w-full flex-col items-center">
                      <span className="text-muted-foreground mb-1 text-[10px]">
                        {score}%
                      </span>
                      <div
                        className="w-full rounded-t transition-all hover:opacity-80"
                        style={{
                          height: `${((score - minScore + 10) / (range + 20)) * 150}px`,
                          backgroundColor: "var(--brand)",
                          opacity: i === weeklyProgress.length - 1 ? 1 : 0.5,
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {days[i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Quizzes</CardTitle>
              <p className="text-muted-foreground text-sm">
                Your latest attempts
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentQuizzes.map((quiz, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <BookOpen className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{quiz.name}</p>
                        <p className="font-bold">
                          {quiz.score}/{quiz.total}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-xs">
                          {quiz.category}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {quiz.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
