export default function LoginPageWithGradientBackgroundImage() {
  return (
    <section>
      <div className="flex flex-col justify-end gap-11 lg:flex-row lg:gap-16 xl:gap-28">
        <div className="flex items-center justify-center px-8 py-4 lg:w-2/5 lg:py-5 xl:py-0 2xl:px-0">
          <form>
            <img
              src="https://pagedone.io/asset/uploads/1702362108.png"
              alt="pagedone logo"
              className="mx-auto mb-6 object-cover lg:mb-8"
            />
            <h2 className="font-manrope mb-3 text-center text-3xl leading-10 font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mb-8 text-center text-base leading-6 font-medium text-gray-500">
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
            <a className="mb-6 flex justify-center">
              <span className="text-right text-base leading-6 font-normal text-indigo-600">
                Forgot Password?
              </span>
            </a>
            <button className="h-12 w-full rounded-full bg-indigo-600 text-center text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Login
            </button>
            <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200 lg:my-8">
              <span className="flex items-center justify-center px-6 text-lg leading-7 font-normal text-gray-400">
                OR
              </span>
            </div>
            <div className="mb-8 flex flex-col gap-6 md:flex-row">
              <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Google{" "}
              </button>
              <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Facebook{" "}
              </button>
            </div>
            <h6 className="text-center text-base leading-6 font-medium text-gray-900">
              Don’t have an account?{" "}
              <a className="pl-2 text-base leading-6 font-semibold text-indigo-600">
                Sign Up
              </a>
            </h6>
          </form>
        </div>
        <div className="ml-8 rounded-tl-3xl bg-gradient-to-r from-indigo-700 to-indigo-500 pt-24 pl-24 lg:ml-0 lg:w-3/5">
          <h3 className="font-manrope mb-3 text-3xl leading-tight font-bold text-gray-50">
            Control your Finances <br /> With Our Smart Tool{" "}
          </h3>
          <p className="mb-16 text-base leading-6 font-normal text-gray-100">
            Invest intelligently and discover a better way to manage <br /> your
            entire wealth easily.{" "}
          </p>
          <img
            src="https://pagedone.io/asset/uploads/1702446674.png"
            alt="deshboard image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
