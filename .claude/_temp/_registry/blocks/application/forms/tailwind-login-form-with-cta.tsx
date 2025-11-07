export default function TailwindLoginFormWithCta() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="w-full p-8 bg-white rounded-2xl border border-gray-200 backdrop-blur-[26px] flex-col justify-start items-center gap-7 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-8 flex">
              <div className="p-1 rounded-full border border-sky-100 justify-start items-start gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1716270407.png"
                  alt="avtar image"
                  className="object-cover"
                />
              </div>
              <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label
                      htmlFor=""
                      className="flex gap-1 items-center text-gray-400 text-sm font-medium leading-snug"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="pagedone123"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label
                      htmlFor=""
                      className="flex gap-1 items-center text-gray-400 text-sm font-medium leading-snug"
                    >
                      Password
                    </label>
                    <div className="w-full flex gap-2 relative">
                      <input
                        type="text"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                        placeholder=".........."
                      />
                      <a className="absolute right-5 top-4 ml-2"></a>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center gap-1.5 inline-flex">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      className="w-4 h-4 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 bg-white checked:bg-no-repeat checked:bg-center checked:border-gray-900 checked:bg-gray-100"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="text-sm font-normal leading-normal cursor-pointer text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <a className="text-right text-blue-700 text-xs font-normal leading-5">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-center gap-3.5 flex">
                <button className="w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Login
                  </span>
                </button>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  Don't have an Account?
                  <a className="text-blue-700 text-sm font-medium leading-snug">
                    Register
                  </a>
                </p>
              </div>
            </div>
            <span className="text-center text-gray-400 text-base font-medium leading-relaxed">
              or
            </span>
            <div className="w-full sm:flex-row flex-col justify-center items-center gap-4 flex">
              <button className="w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center gap-1 flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed whitespace-nowrap">
                  Login with Google
                </span>
              </button>
              <button className="w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed whitespace-nowrap">
                  Login with Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
