import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-4">
        <View className="h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
          <Text className="text-3xl">U</Text>
        </View>
        <Text className="mt-4 text-xl font-semibold text-gray-900">
          Guest User
        </Text>
        <Text className="mt-1 text-gray-600">Sign in to track your progress</Text>
      </View>
    </SafeAreaView>
  )
}
