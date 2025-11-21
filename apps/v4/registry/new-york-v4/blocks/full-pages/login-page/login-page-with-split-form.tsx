export default function LoginPageWithSplitForm() {
  return (
    <section>
      <div className="h-full gap-12 lg:flex lg:gap-16 xl:gap-28">
        <div className="relative grid lg:w-3/5">
          <img
            src="https://pagedone.io/asset/uploads/1702374726.png"
            alt="gradient background image"
            className="absolute -z-10 h-full w-full bg-cover bg-no-repeat object-cover"
          />
          <div className="m-12 grid rounded-r-3xl bg-white p-11 shadow-xl xl:m-28">
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1702362108.png"
                alt="pagedone logo"
                className="mb-8 object-cover"
              />
              <h1 className="font-manrope mb-4 text-3xl leading-tight font-bold text-black lg:text-5xl">
                Hey, Hello!
              </h1>
              <a
                href="javascript:;"
                className="text-xl leading-8 font-normal text-indigo-600"
              >
                Join The Waitlist For The Design System!
              </a>
              <p className="pt-6 text-lg leading-7 font-normal text-gray-400">
                We provide all the advantages that can simplify all your
                financial transactions without any further requirements.
              </p>
            </div>
            <div className="flex items-end">
              <div>
                <p className="mb-6 text-lg leading-7 font-medium text-gray-900">
                  Don’t have an account?
                </p>
                <button className="h-12 w-36 rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 flex w-auto items-center justify-center 2xl:w-2/5">
          <form className="my-10 lg:my-0">
            <h2 className="font-manrope mb-3 text-center text-3xl leading-10 font-bold text-gray-900 lg:text-start">
              Sign In
            </h2>
            <p className="mb-11 text-center text-base leading-6 font-medium text-gray-500 lg:text-start">
              Let’s get started with your 30 days free trail.
            </p>
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
            <button className="h-12 w-full rounded-full bg-indigo-600 text-center text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Login
            </button>
            <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200 lg:my-9 xl:my-11">
              <span className="flex items-center justify-center px-6 text-lg leading-7 font-normal text-gray-400">
                OR
              </span>
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Google{" "}
              </button>
              <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Facebook{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
