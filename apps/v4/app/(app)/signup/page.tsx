import { Metadata } from "next"

import { SignupForm } from "@/components/auth/signup-form"
import { AuthPageLayout } from "@/components/layout/auth-page-layout"

const title = "Sign Up"
const description = "Create your pitsi/ui account"

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

export default function SignUpPage() {
  return (
    <AuthPageLayout>
      <SignupForm />
    </AuthPageLayout>
  )
}
