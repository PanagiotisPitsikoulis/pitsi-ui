import { useLocalSearchParams, router } from "expo-router"
import { useState } from "react"
import { Text, View, Pressable, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { Quiz } from "@pitsi/quiz-core"
import { useQuiz } from "@pitsi/quiz-core"

const sampleQuizData: Record<string, Quiz> = {
  "1": {
    id: "1",
    title: "General Knowledge",
    description: "Test your general knowledge",
    shuffleQuestions: false,
    shuffleAnswers: false,
    showResults: true,
    questions: [
      {
        id: "q1",
        text: "What is the capital of Japan?",
        type: "single_choice",
        points: 1,
        answers: [
          { id: "a1", text: "Beijing", isCorrect: false },
          { id: "a2", text: "Tokyo", isCorrect: true },
          { id: "a3", text: "Seoul", isCorrect: false },
          { id: "a4", text: "Bangkok", isCorrect: false },
        ],
      },
      {
        id: "q2",
        text: "What is the largest ocean on Earth?",
        type: "single_choice",
        points: 1,
        answers: [
          { id: "a1", text: "Atlantic Ocean", isCorrect: false },
          { id: "a2", text: "Indian Ocean", isCorrect: false },
          { id: "a3", text: "Pacific Ocean", isCorrect: true },
          { id: "a4", text: "Arctic Ocean", isCorrect: false },
        ],
      },
    ],
    passingScore: 50,
  },
  "2": {
    id: "2",
    title: "Science Quiz",
    description: "Explore the world of science",
    shuffleQuestions: false,
    shuffleAnswers: false,
    showResults: true,
    questions: [
      {
        id: "q1",
        text: "What is H2O commonly known as?",
        type: "single_choice",
        points: 1,
        answers: [
          { id: "a1", text: "Salt", isCorrect: false },
          { id: "a2", text: "Water", isCorrect: true },
          { id: "a3", text: "Sugar", isCorrect: false },
        ],
      },
    ],
    passingScore: 50,
  },
  "3": {
    id: "3",
    title: "History Quiz",
    description: "Journey through time",
    shuffleQuestions: false,
    shuffleAnswers: false,
    showResults: true,
    questions: [
      {
        id: "q1",
        text: "In what year did World War II end?",
        type: "single_choice",
        points: 1,
        answers: [
          { id: "a1", text: "1943", isCorrect: false },
          { id: "a2", text: "1945", isCorrect: true },
          { id: "a3", text: "1947", isCorrect: false },
        ],
      },
    ],
    passingScore: 50,
  },
}

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [isLoaded, setIsLoaded] = useState(false)

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

  // Load quiz data
  if (!isLoaded && id && sampleQuizData[id]) {
    loadQuiz(sampleQuizData[id])
    setIsLoaded(true)
  }

  if (!quiz) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-600">Quiz not found</Text>
        <Pressable
          onPress={() => router.back()}
          className="mt-4 rounded-lg bg-indigo-500 px-6 py-3"
        >
          <Text className="font-semibold text-white">Go Back</Text>
        </Pressable>
      </SafeAreaView>
    )
  }

  if (!isStarted) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-4">
        <Text className="text-2xl font-bold text-gray-900">{quiz.title}</Text>
        <Text className="mt-2 text-center text-gray-600">
          {quiz.description}
        </Text>
        <Text className="mt-4 text-gray-500">
          {totalQuestions} questions
        </Text>
        <Pressable
          onPress={startQuiz}
          className="mt-8 rounded-xl bg-indigo-500 px-8 py-4"
        >
          <Text className="text-lg font-semibold text-white">Start Quiz</Text>
        </Pressable>
      </SafeAreaView>
    )
  }

  if (isCompleted && result) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-4">
        <Text className="text-2xl font-bold text-gray-900">Quiz Complete!</Text>
        <View className="mt-6 items-center">
          <Text className="text-4xl font-bold text-indigo-500">
            {result.percentage.toFixed(0)}%
          </Text>
          <Text className="mt-2 text-gray-600">
            {result.correctAnswers} / {result.totalQuestions} correct
          </Text>
          <Text
            className={`mt-4 text-lg font-semibold ${
              result.passed ? "text-green-500" : "text-red-500"
            }`}
          >
            {result.passed ? "Passed!" : "Try Again"}
          </Text>
        </View>
        <View className="mt-8 flex-row gap-4">
          <Pressable
            onPress={resetQuiz}
            className="rounded-xl bg-gray-100 px-6 py-3"
          >
            <Text className="font-semibold text-gray-900">Retry</Text>
          </Pressable>
          <Pressable
            onPress={() => router.back()}
            className="rounded-xl bg-indigo-500 px-6 py-3"
          >
            <Text className="font-semibold text-white">Back Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <View className="py-4">
          <Text className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </Text>
          <View className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
            <View
              className="h-full bg-indigo-500"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              }}
            />
          </View>
        </View>

        <Text className="mt-4 text-xl font-semibold text-gray-900">
          {currentQuestion?.text}
        </Text>

        <View className="mt-6 gap-3">
          {currentQuestion?.answers.map((answer) => {
            const isSelected = currentAnswer?.selectedAnswerIds.includes(answer.id)
            return (
              <Pressable
                key={answer.id}
                onPress={() =>
                  answerQuestion(currentQuestion.id, [answer.id])
                }
                className={`rounded-xl border-2 p-4 ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <Text
                  className={`text-base ${
                    isSelected ? "text-indigo-700" : "text-gray-900"
                  }`}
                >
                  {answer.text}
                </Text>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>

      <View className="border-t border-gray-100 px-4 py-4">
        {isLastQuestion ? (
          <Pressable
            onPress={completeQuiz}
            className="rounded-xl bg-indigo-500 py-4"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Finish Quiz
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={nextQuestion}
            disabled={!currentAnswer}
            className={`rounded-xl py-4 ${
              currentAnswer ? "bg-indigo-500" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-center text-lg font-semibold ${
                currentAnswer ? "text-white" : "text-gray-400"
              }`}
            >
              Next Question
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  )
}
