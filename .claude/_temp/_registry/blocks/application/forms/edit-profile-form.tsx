export default function EditProfileForm() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <h2 className="w-full text-gray-900 text-2xl font-bold font-manrope leading-9">
          Edit Profile
        </h2>
        <div className="w-full justify-center items-center gap-8 flex md:flex-row flex-col mt-12">
          <div className="w-[100px] h-[100px] rounded-full">
            <img
              className="object-cover"
              src="https://pagedone.io/asset/uploads/1710225484.png"
              alt="Emily image"
            />
          </div>
          <div className="w-full justify-end items-center gap-6 flex sm:flex-row flex-col">
            <button className="md:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Upload New Profile Picture{" "}
              </span>
            </button>
            <button className="md:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
              <span className="px-1.5 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-sm font-medium leading-6">
                Remove Profile Picture
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex my-10">
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                placeholder="kevinpatel.233"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
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
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                placeholder="Kevin"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                Last Name
              </label>
              <div className="w-full flex gap-2 relative">
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="Patel"
                />
                <a className="absolute right-5 top-4 ml-2"></a>
              </div>
            </div>
          </div>
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <span className="text-gray-600 text-sm font-medium leading-5">
                Phone Number
              </span>
              <div className="w-full flex relative items-center h-12">
                <button
                  id="dropdown-button"
                  data-target="dropdown-1"
                  className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                >
                  IN
                </button>
                <div
                  id="dropdown-1"
                  className="absolute top-10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
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
                    className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed block py-2.5 pr-4 pl-[74px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                    placeholder="94258 65025"
                  />
                  <a className="absolute right-5 top-4 ml-2 w-4 h-4 flex items-center justify-center"></a>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-6"
              >
                Email Address
              </label>
              <div className="w-full flex gap-2 relative">
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="kevin.patel1@gmail.com"
                />
                <a className="absolute right-5 top-4 ml-2 w-4 h-4 flex items-center justify-center"></a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start flex gap-1.5">
            <label
              htmlFor=""
              className="items-center text-gray-600 text-sm font-medium leading-6"
            >
              Address
            </label>
            <input
              type="text"
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
              placeholder="A - 1002 Alpha Plus, Raiya Telephone Exchange"
            />
          </div>
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <span className="text-gray-600 text-sm font-medium leading-5">
                Country
              </span>
              <div className="flex w-full">
                <div className="relative w-full ">
                  <select
                    id="countries"
                    className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                          shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
               border-gray-300 rounded-lg placeholder-gray-400 "
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
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <span className="text-gray-600 text-sm font-medium leading-5">
                State
              </span>
              <div className="flex w-full">
                <div className="relative w-full ">
                  <select
                    id="countries"
                    className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                          shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
               border-gray-300 rounded-lg placeholder-gray-400 "
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
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                City
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                placeholder="Rajkot"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                Zip Code
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
              />
            </div>
          </div>
          <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start flex gap-1.5">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                DOB (Date of Birth)
              </label>
              <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-5">
                <div className="flex w-full">
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                       border-gray-300 rounded-lg placeholder-gray-400"
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
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                   border-gray-300 rounded-lg placeholder-gray-400"
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
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                   border-gray-300 rounded-lg placeholder-gray-400"
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
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="items-center text-gray-600 text-sm font-medium leading-6"
              >
                Gender
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                  leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                placeholder="Male"
              />
            </div>
          </div>
          <div className="w-full justify-center items-end gap-8 flex sm:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start flex sm:flex-row md:gap-8 sm:gap-3 gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="items-center text-gray-600 text-sm font-medium leading-6"
                >
                  Linked In
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                      leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="linkedin//kevin/patel"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="items-center text-gray-600 text-sm font-medium leading-6"
                >
                  Twitter
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                      leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="twitter.com//kevinpatel"
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center items-center flex sm:flex-row md:gap-8 sm:gap-3 gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="items-center text-gray-600 text-sm font-medium leading-6"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
                      leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="facebook.com//kevinpatel"
                />
              </div>
              <div className="w-full group gap-5 items-center justify-center flex flex-col">
                <span />
                <a className="flex gap-2.5 items-center justify-center text-blue-700 group-hover:text-blue-800 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                  Add More Link
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start flex gap-1.5">
            <label
              htmlFor=""
              className="items-center text-gray-600 text-sm font-medium leading-6"
            >
              Bio
            </label>
            <textarea
              name=""
              rows={5}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal
              leading-6 resize-none px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
              placeholder="add bio here..."
            />
          </div>
        </div>
        <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
            Edit Profile
          </span>
        </button>
      </div>
    </section>
  );
}
