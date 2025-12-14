import { Metadata } from "next"

import { LoginForm } from "@/components/auth/login-form"
import { AuthPageLayout } from "@/components/layout/auth-page-layout"

const title = "Sign In"
const description = "Sign in to your pitsi/ui account"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function SignInPage() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  )
}
