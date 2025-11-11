"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/lib/client/auth";
import { cn } from "@/lib/utils";
import Flex from "@/registry/components/flex/flex";
import { Spacer } from "@/registry/components/spacer/spacer";
import Typography from "@/registry/components/typography/typography";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signIn.email({
        email,
        password,
        callbackURL: "/blocks",
      });
      router.push("/blocks");
    } catch (err: any) {
      setError(
        err.message || "Failed to sign in. Please check your credentials.",
      );
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Flex
        direction="col"
        className="bg-white border border-border-strength-200 rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <Flex direction="col" align="center" className="px-8 pt-8 pb-6">
          <Typography variant="h3" className="text-center">
            Welcome back
          </Typography>
          <Spacer size="xs" />
          <Typography
            variant="paragraph-md"
            className="text-text-strength-500 text-center"
          >
            Sign in to your account to continue
          </Typography>
        </Flex>

        {/* Content */}
        <Flex direction="col" className="px-8 pb-8">
          <form onSubmit={handleSubmit}>
            <Flex direction="col" gap="md">
              {/* Social Login Buttons */}
              <Flex direction="col" gap="sm">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-border-strength-200 rounded-lg hover:bg-background-strength-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <Typography variant="label-sm">Sign in with Apple</Typography>
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-border-strength-200 rounded-lg hover:bg-background-strength-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <Typography variant="label-sm">
                    Sign in with Google
                  </Typography>
                </button>
              </Flex>

              {/* Separator */}
              <Flex align="center" gap="md" className="my-2">
                <div className="flex-1 h-px bg-border-strength-200" />
                <Typography
                  variant="paragraph-sm"
                  className="text-text-strength-500"
                >
                  Or continue with
                </Typography>
                <div className="flex-1 h-px bg-border-strength-200" />
              </Flex>

              {/* Error Message */}
              {error && (
                <Flex className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
                  <Typography variant="paragraph-sm" className="text-red-800">
                    {error}
                  </Typography>
                </Flex>
              )}

              {/* Email Field */}
              <Flex direction="col" gap="xs">
                <label htmlFor="email">
                  <Typography variant="label-sm">Email</Typography>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-border-strength-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-strength-900 focus:border-transparent"
                />
              </Flex>

              {/* Password Field */}
              <Flex direction="col" gap="xs">
                <Flex align="center" justify="between">
                  <label htmlFor="password">
                    <Typography variant="label-sm">Password</Typography>
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-text-strength-700 hover:text-text-strength-900 underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </a>
                </Flex>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-border-strength-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-strength-900 focus:border-transparent"
                />
              </Flex>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-text-strength-900 text-white rounded-lg font-semibold hover:bg-text-strength-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              {/* Sign Up Link */}
              <Typography
                variant="paragraph-sm"
                className="text-center text-text-strength-500"
              >
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="text-text-strength-900 font-semibold hover:underline"
                >
                  Sign up
                </a>
              </Typography>
            </Flex>
          </form>
        </Flex>
      </Flex>

      {/* Terms */}
      <Typography
        variant="paragraph-sm"
        className="px-6 text-center text-text-strength-500"
      >
        By clicking continue, you agree to our{" "}
        <a href="/terms" className="underline hover:text-text-strength-700">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline hover:text-text-strength-700">
          Privacy Policy
        </a>
        .
      </Typography>
    </div>
  );
}
