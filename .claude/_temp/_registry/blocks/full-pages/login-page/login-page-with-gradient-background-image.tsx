export default function LoginPageWithGradientBackgroundImage() {
  return (
    <section>
      <div className="flex lg:flex-row flex-col justify-end xl:gap-28 lg:gap-16 gap-11">
        <div className="lg:w-2/5 flex items-center justify-center 2xl:px-0 px-8 xl:py-0 lg:py-5 py-4">
          <form>
            <img
              src="https://pagedone.io/asset/uploads/1702362108.png"
              alt="pagedone logo"
              className="mx-auto lg:mb-8 mb-6 object-cover"
            />
            <h2 className="text-gray-900 text-center text-3xl font-bold font-manrope leading-10 mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-center text-base font-medium leading-6 mb-8">
              Let’s get started with your 30 days free trail.
            </p>
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <a className="flex justify-center mb-6">
              <span className="text-indigo-600 text-right text-base font-normal leading-6">
                Forgot Password?
              </span>
            </a>
            <button className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm">
              Login
            </button>
            <div className="lg:my-8 my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200">
              <span className="flex items-center justify-center text-gray-400 text-lg font-normal leading-7 px-6">
                OR
              </span>
            </div>
            <div className="flex md:flex-row flex-col gap-6 mb-8">
              <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                Google{" "}
              </button>
              <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                Facebook{" "}
              </button>
            </div>
            <h6 className="text-gray-900 text-center text-base font-medium leading-6">
              Don’t have an account?{" "}
              <a className="pl-2 text-indigo-600 text-base font-semibold leading-6">
                Sign Up
              </a>
            </h6>
          </form>
        </div>
        <div className="lg:w-3/5 bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-tl-3xl pt-24 pl-24 lg:ml-0 ml-8">
          <h3 className="text-gray-50 font-manrope text-3xl font-bold leading-tight mb-3">
            Control your Finances <br /> With Our Smart Tool{" "}
          </h3>
          <p className="text-gray-100 text-base font-normal leading-6 mb-16">
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
  );
}
