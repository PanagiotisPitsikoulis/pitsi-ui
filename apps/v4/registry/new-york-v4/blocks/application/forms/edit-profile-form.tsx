export default function EditProfileForm() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <h2 className="font-manrope w-full text-2xl leading-9 font-bold text-gray-900">
          Edit Profile
        </h2>
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-8 md:flex-row">
          <div className="h-[100px] w-[100px] rounded-full">
            <img
              className="object-cover"
              src="https://pagedone.io/asset/uploads/1710225484.png"
              alt="Emily image"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-end gap-6 sm:flex-row">
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 md:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium text-white">
                Upload New Profile Picture{" "}
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-600 md:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                Remove Profile Picture
              </span>
            </button>
          </div>
        </div>
        <div className="my-10 inline-flex w-full flex-col items-start justify-start gap-8">
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="kevinpatel.233"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
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
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Kevin"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                Last Name
              </label>
              <div className="relative flex w-full gap-2">
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Patel"
                />
                <a className="absolute top-4 right-5 ml-2"></a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <span className="text-sm leading-5 font-medium text-gray-600">
                Phone Number
              </span>
              <div className="relative flex h-12 w-full items-center">
                <button
                  id="dropdown-button"
                  data-target="dropdown-1"
                  className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                >
                  IN
                </button>
                <div
                  id="dropdown-1"
                  className="absolute top-10 z-10 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="javascript:;"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        IN
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        US
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        FR
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[74px] text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="94258 65025"
                  />
                  <a className="absolute top-4 right-5 ml-2 flex h-4 w-4 items-center justify-center"></a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-sm leading-6 font-medium text-gray-600"
              >
                Email Address
              </label>
              <div className="relative flex w-full gap-2">
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="kevin.patel1@gmail.com"
                />
                <a className="absolute top-4 right-5 ml-2 flex h-4 w-4 items-center justify-center"></a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1.5">
            <label
              htmlFor=""
              className="items-center text-sm leading-6 font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
              placeholder="A - 1002 Alpha Plus, Raiya Telephone Exchange"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <span className="text-sm leading-5 font-medium text-gray-600">
                Country
              </span>
              <div className="flex w-full">
                <div className="relative w-full">
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  >
                    <option value={1}>India</option>
                    <option value={2} selected>
                      CANADA
                    </option>
                    <option value={3}>USA</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <span className="text-sm leading-5 font-medium text-gray-600">
                State
              </span>
              <div className="flex w-full">
                <div className="relative w-full">
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  >
                    <option value={1}>Gujrat</option>
                    <option value={2} selected>
                      Punjab
                    </option>
                    <option value={3}>Maharashtra</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Rajkot"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                Zip Code
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                DOB (Date of Birth)
              </label>
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    >
                      <option value={1}>June</option>
                      <option value={2} selected>
                        July
                      </option>
                      <option value={3}>May</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    >
                      <option value={1}>26</option>
                      <option value={2} selected>
                        27
                      </option>
                      <option value={3}>28</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    >
                      <option value={1}>2000</option>
                      <option value={2} selected>
                        2001
                      </option>
                      <option value={3}>2002</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="items-center text-sm leading-6 font-medium text-gray-600"
              >
                Gender
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Male"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-end justify-center gap-8 sm:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row sm:gap-3 md:gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="items-center text-sm leading-6 font-medium text-gray-600"
                >
                  Linked In
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="linkedin//kevin/patel"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="items-center text-sm leading-6 font-medium text-gray-600"
                >
                  Twitter
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="twitter.com//kevinpatel"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-3 md:gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="items-center text-sm leading-6 font-medium text-gray-600"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="facebook.com//kevinpatel"
                />
              </div>
              <div className="group flex w-full flex-col items-center justify-center gap-5">
                <span />
                <a className="flex items-center justify-center gap-2.5 text-base leading-relaxed font-medium text-blue-700 transition-all duration-700 ease-in-out group-hover:text-blue-800">
                  Add More Link
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1.5">
            <label
              htmlFor=""
              className="items-center text-sm leading-6 font-medium text-gray-600"
            >
              Bio
            </label>
            <textarea
              name=""
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-6 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
              placeholder="add bio here..."
            />
          </div>
        </div>
        <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
          <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
            Edit Profile
          </span>
        </button>
      </div>
    </section>
  )
}
