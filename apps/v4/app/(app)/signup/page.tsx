import { SignupForm } from "@/components/auth/signup-form"
import { AuthPageLayout } from "@/components/layout/auth-page-layout"

export default function SignUpPage() {
  return (
    <AuthPageLayout>
      <SignupForm />
    </AuthPageLayout>
  )
}
