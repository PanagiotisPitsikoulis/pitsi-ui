import Flex from "@/registry/components/flex/flex";
import Typography from "@/registry/components/typography/typography";
import { SignupForm } from "../components/signup-form";

export default function SignUpPage() {
  return (
    <div className="bg-background-strength-50 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <Flex
            align="center"
            justify="center"
            className="bg-text-strength-900 text-white w-8 h-8 rounded-md"
          >
            <Typography variant="label-lg" className="font-bold">
              P
            </Typography>
          </Flex>
          <Typography variant="label-lg" className="font-semibold">
            PitsiUI
          </Typography>
        </a>
        <SignupForm />
      </div>
    </div>
  );
}
