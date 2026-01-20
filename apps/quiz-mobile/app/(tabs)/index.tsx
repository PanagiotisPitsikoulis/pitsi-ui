import { Link } from "expo-router"
import { Text, View, Pressable, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const sampleQuizzes = [
  {
    id: "1",
    title: "General Knowledge",
    description: "Test your general knowledge",
    questionCount: 10,
  },
  {
    id: "2",
    title: "Science Quiz",
    description: "Explore the world of science",
    questionCount: 15,
  },
  {
    id: "3",
    title: "History Quiz",
    description: "Journey through time",
    questionCount: 12,
  },
]

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          <Text className="text-3xl font-bold text-gray-900">Quiz Mobile</Text>
          <Text className="mt-2 text-gray-600">
            Choose a quiz to get started
          </Text>
        </View>

        <View className="gap-4">
          {sampleQuizzes.map((quiz) => (
            <Link key={quiz.id} href={`/quiz/${quiz.id}`} asChild>
              <Pressable className="rounded-xl bg-gray-50 p-4 active:bg-gray-100">
                <Text className="text-lg font-semibold text-gray-900">
                  {quiz.title}
                </Text>
                <Text className="mt-1 text-gray-600">{quiz.description}</Text>
                <Text className="mt-2 text-sm text-indigo-600">
                  {quiz.questionCount} questions
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
