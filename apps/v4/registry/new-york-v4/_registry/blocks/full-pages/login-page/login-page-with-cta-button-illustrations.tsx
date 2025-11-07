export default function LoginPageWithCtaButtonIllustrations() {
  return (
    <section className="pt-10 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-14 flex items-center justify-center lg:mb-0">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1702362108.png"
              alt="pagedone logo"
              className="mx-auto mb-7 object-cover lg:mb-11"
            />
            <h2 className="font-manrope mb-3 text-center text-2xl leading-9 font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-center text-base leading-6 font-medium text-gray-500">
              Let’s get started with your 30 days free trail
            </p>
            <div className="my-11">
              <button className="mb-5 flex h-12 w-full items-center justify-center rounded-full border border-gray-300 text-base leading-6 font-semibold text-gray-900 shadow-xs transition-all duration-700 hover:bg-gray-100">
                Sign in with Google{" "}
              </button>
              <button className="mb-5 flex h-12 w-full items-center justify-center rounded-full border border-gray-300 text-base leading-6 font-semibold text-gray-900 shadow-xs transition-all duration-700 hover:bg-gray-100">
                Sign in with Facebook{" "}
              </button>
              <button className="mb-5 flex h-12 w-full items-center justify-center rounded-full border border-gray-300 text-base leading-6 font-semibold text-gray-900 shadow-xs transition-all duration-700 hover:bg-gray-100">
                Sign in with Facebook{" "}
              </button>
              <button className="flex h-12 w-full items-center justify-center rounded-full border border-gray-300 text-base leading-6 font-semibold text-gray-900 shadow-xs transition-all duration-700 hover:bg-gray-100">
                Sign in with Email{" "}
              </button>
            </div>
            <h6 className="text-center text-base leading-6 font-medium text-gray-900">
              Don’t have an account?{" "}
              <a
                href="javascript:;"
                className="pl-2 text-base leading-6 font-semibold text-indigo-600"
              >
                Sign Up
              </a>
            </h6>
          </div>
        </div>
        <img
          src="https://pagedone.io/asset/uploads/1702373643.png"
          alt="curve design image"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
