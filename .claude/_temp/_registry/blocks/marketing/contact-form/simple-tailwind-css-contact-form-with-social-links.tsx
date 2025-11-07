export default function SimpleTailwindCssContactFormWithSocialLinks() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10">
          <div>
            <h2 className="text-gray-900 text-4xl font-bold leading-10 font-manrope">
              Let’s Work Together
            </h2>
            <p className="max-w-3xl font-inter text-gray-500 text-lg font-normal leading-8 pt-1.5">
              We’re ready to assist and chat with you
            </p>
            <div className="mt-14 p-6 border border-gray-200 rounded-xl">
              <h4 className="text-2xl font-semibold leading-9 text-black font-manrope">
                Contact Us
              </h4>
              <p className="pt-2.5 text-gray-500 text-sm font-normal leading-5">
                You can call, email, or visit us at our office. We look forward
                to connecting with you!
              </p>
              <div className="flex flex-col gap-5 pt-8 font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:border-t lg:border-gray-200 pt-5">
                  <div>
                    <h6 className="flex items-center gap-2.5 text-base font-medium leading-7 text-gray-500">
                      {/* SVG removed */}Hotline
                    </h6>
                    <a className="text-sm font-medium leading-5 text-gray-900 pt-1.5 ">
                      +00 00000 00000
                    </a>
                  </div>
                  <div className="lg:border-l lg:border-gray-200 lg:pl-5">
                    <h6 className="flex items-center gap-2.5 text-base font-medium leading-7 text-gray-500">
                      {/* SVG removed */}Email
                    </h6>
                    <a className="text-sm font-medium leading-5 text-gray-900 pt-1.5 ">
                      mail@pagedone.io
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:border-t lg:border-gray-200 lg:pt-5">
                  <div>
                    <h6 className="flex items-center gap-2.5 text-base font-medium leading-7 text-gray-500">
                      {/* SVG removed */}Address
                    </h6>
                    <a className="text-sm font-medium leading-5 text-gray-900 pt-1.5 ">
                      Mythic Design, Rajkot
                    </a>
                  </div>
                  <div className="lg:border-l lg:border-gray-200 lg:pl-5">
                    <h6 className="flex items-center gap-2.5 text-base font-medium leading-7 text-gray-500">
                      {/* SVG removed */}Address
                    </h6>
                    <a className="text-sm font-medium leading-5 text-gray-900 pt-1.5 ">
                      Mythic Design, Ahmedabad
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 p-6 border border-gray-200 rounded-xl">
              <h4 className="text-2xl font-semibold leading-9 text-black font-manrope">
                Follow Us
              </h4>
              <p className="pt-2.5 text-gray-500 text-sm font-normal leading-5">
                You can call, email, or visit us at our office. We look forward
                to connecting with you!
              </p>
              <div className="pt-8 flex flex-wrap sm:flex-nowrap items-center gap-5">
                <a className="flex items-center gap-1.5 text-sm font-normal leading-5 text-gray-900">
                  {/* SVG removed */}Instagram
                </a>
                {/* SVG removed */}
                <a className="flex items-center gap-1.5 text-sm font-normal leading-5 text-gray-900">
                  {/* SVG removed */}Facebook
                </a>
                {/* SVG removed */}
                <a className="flex items-center gap-1.5 text-sm font-normal leading-5 text-gray-900">
                  {/* SVG removed */}LinkedIn
                </a>
              </div>
              <div className="pt-10">
                <button className="w-40 bg-indigo-600 rounded-xl text-white py-2.5 px-5 text-center text-base font-semibold leading-7 font-inter flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-700">
                  Contact Us {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1759222938.png"
              alt="image"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
