import { LoginForm } from "@/components/auth/login-form"
import { AuthPageLayout } from "@/components/layout/auth-page-layout"

export default function SignInPage() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  )
}
