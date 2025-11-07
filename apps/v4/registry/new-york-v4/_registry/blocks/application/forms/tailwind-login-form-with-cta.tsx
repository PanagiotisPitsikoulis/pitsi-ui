export default function TailwindLoginFormWithCta() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mx-auto max-w-lg">
          <div className="inline-flex w-full flex-col items-center justify-start gap-7 rounded-2xl border border-gray-200 bg-white p-8 backdrop-blur-[26px]">
            <div className="flex w-full flex-col items-center justify-start gap-8">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-full border border-sky-100 p-1">
                <img
                  src="https://pagedone.io/asset/uploads/1716270407.png"
                  alt="avtar image"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-3.5">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-400"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="pagedone123"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-400"
                    >
                      Password
                    </label>
                    <div className="relative flex w-full gap-2">
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder=".........."
                      />
                      <a className="absolute top-4 right-5 ml-2"></a>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-1.5">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      className="mr-2 h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white checked:border-gray-900 checked:bg-gray-100 checked:bg-center checked:bg-no-repeat"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="cursor-pointer text-sm leading-normal font-normal text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <a className="text-right text-xs leading-5 font-normal text-blue-700">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-3.5">
                <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Login
                  </span>
                </button>
                <p className="text-xs leading-5 font-normal text-gray-400">
                  Don't have an Account?
                  <a className="text-sm leading-snug font-medium text-blue-700">
                    Register
                  </a>
                </p>
              </div>
            </div>
            <span className="text-center text-base leading-relaxed font-medium text-gray-400">
              or
            </span>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                  Login with Google
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                  Login with Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
