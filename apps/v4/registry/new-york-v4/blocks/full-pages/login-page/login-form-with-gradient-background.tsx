export default function LoginFormWithGradientBackground() {
  return (
    <section className="relative flex justify-center">
      <img
        src="https://pagedone.io/asset/uploads/1702362010.png"
        alt="gradient background image"
        className="fixed h-full w-full object-cover"
      />
      <div className="absolute mx-auto max-w-lg px-6 py-20 lg:px-8">
        <img
          src="https://pagedone.io/asset/uploads/1702362108.png"
          alt="pagedone logo"
          className="mx-auto mb-8 object-cover lg:mb-11"
        />
        <div className="rounded-2xl bg-white shadow-xl">
          <form className="mx-auto p-7 lg:p-11">
            <div className="mb-11">
              <h1 className="font-manrope mb-2 text-center text-3xl leading-10 font-bold text-gray-900">
                Welcome Back
              </h1>
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Let’s get started with your 30 days free trail
              </p>
            </div>
            <input
              type="text"
              className="mb-6 h-12 w-full rounded-full border border-gray-300 px-4 text-lg leading-7 font-normal text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
              placeholder="Username"
            />
            <input
              type="text"
              className="mb-1 h-12 w-full rounded-full border border-gray-300 px-4 text-lg leading-7 font-normal text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
              placeholder="Password"
            />
            <a href="javascript:;" className="mb-6 flex justify-end">
              <span className="text-right text-base leading-6 font-normal text-indigo-600">
                Forgot Password?
              </span>
            </a>
            <button className="mb-11 h-12 w-full rounded-full bg-indigo-600 text-center text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Login
            </button>
            <a
              href="javascript:;"
              className="flex justify-center text-base leading-6 font-medium text-gray-900"
            >
              {" "}
              Don’t have an account?{" "}
              <span className="pl-3 font-semibold text-indigo-600">
                {" "}
                Sign Up
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}
