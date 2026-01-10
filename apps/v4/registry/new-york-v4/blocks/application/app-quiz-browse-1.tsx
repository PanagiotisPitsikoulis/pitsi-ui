"use client"

import * as React from "react"

import { BookOpen, Clock, Search, Star, Users } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"

const quizzes = [
  {
    id: 1,
    name: "JavaScript Fundamentals",
    category: "Programming",
    difficulty: "Medium",
    questions: 10,
    duration: "10 min",
    plays: 1240,
    rating: 4.8,
  },
  {
    id: 2,
    name: "World Capitals",
    category: "Geography",
    difficulty: "Easy",
    questions: 15,
    duration: "8 min",
    plays: 2100,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Advanced Physics",
    category: "Science",
    difficulty: "Hard",
    questions: 12,
    duration: "15 min",
    plays: 680,
    rating: 4.9,
  },
  {
    id: 4,
    name: "History of Art",
    category: "History",
    difficulty: "Medium",
    questions: 10,
    duration: "12 min",
    plays: 890,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Basic Mathematics",
    category: "Math",
    difficulty: "Easy",
    questions: 20,
    duration: "10 min",
    plays: 3200,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Literature Classics",
    category: "Literature",
    difficulty: "Hard",
    questions: 10,
    duration: "12 min",
    plays: 540,
    rating: 4.4,
  },
]

const categories = [
  "All",
  "Programming",
  "Geography",
  "Science",
  "History",
  "Math",
  "Literature",
]

interface QuizBrowseProps {
  onStartQuiz?: (quizId: number) => void
}

export function AppQuizBrowse1({ onStartQuiz }: QuizBrowseProps) {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || quiz.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "Hard":
        return "text-red-600"
      default:
        return ""
    }
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div>
          <h1 className="display text-foreground text-3xl font-bold tracking-tight">
            Quizzes
          </h1>
          <p className="text-muted-foreground">Browse and start a new quiz</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search quizzes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredQuizzes.map((quiz) => (
            <Card key={quiz.id} className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                    <BookOpen className="text-muted-foreground size-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className={getDifficultyColor(quiz.difficulty)}
                  >
                    {quiz.difficulty}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base">{quiz.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{quiz.category}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <p className="font-medium">{quiz.questions}</p>
                    <p className="text-muted-foreground text-xs">Questions</p>
                  </div>
                  <div>
                    <p className="font-medium">{quiz.duration}</p>
                    <p className="text-muted-foreground text-xs">Duration</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="flex items-center font-medium">
                      <Star className="mr-1 size-3 fill-current text-amber-500" />
                      {quiz.rating}
                    </p>
                    <p className="text-muted-foreground text-xs">Rating</p>
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => onStartQuiz?.(quiz.id)}
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="text-muted-foreground py-12 text-center">
            <BookOpen className="mx-auto mb-3 size-12 opacity-30" />
            <p>No quizzes found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
