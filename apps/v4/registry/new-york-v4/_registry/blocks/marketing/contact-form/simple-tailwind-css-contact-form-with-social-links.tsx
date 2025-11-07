export default function SimpleTailwindCssContactFormWithSocialLinks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-manrope text-4xl leading-10 font-bold text-gray-900">
              Let’s Work Together
            </h2>
            <p className="font-inter max-w-3xl pt-1.5 text-lg leading-8 font-normal text-gray-500">
              We’re ready to assist and chat with you
            </p>
            <div className="mt-14 rounded-xl border border-gray-200 p-6">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                Contact Us
              </h4>
              <p className="pt-2.5 text-sm leading-5 font-normal text-gray-500">
                You can call, email, or visit us at our office. We look forward
                to connecting with you!
              </p>
              <div className="font-inter flex flex-col gap-5 pt-8">
                <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:border-t lg:border-gray-200">
                  <div>
                    <h6 className="flex items-center gap-2.5 text-base leading-7 font-medium text-gray-500">
                      {/* SVG removed */}Hotline
                    </h6>
                    <a className="pt-1.5 text-sm leading-5 font-medium text-gray-900">
                      +00 00000 00000
                    </a>
                  </div>
                  <div className="lg:border-l lg:border-gray-200 lg:pl-5">
                    <h6 className="flex items-center gap-2.5 text-base leading-7 font-medium text-gray-500">
                      {/* SVG removed */}Email
                    </h6>
                    <a className="pt-1.5 text-sm leading-5 font-medium text-gray-900">
                      mail@pagedone.io
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:border-t lg:border-gray-200 lg:pt-5">
                  <div>
                    <h6 className="flex items-center gap-2.5 text-base leading-7 font-medium text-gray-500">
                      {/* SVG removed */}Address
                    </h6>
                    <a className="pt-1.5 text-sm leading-5 font-medium text-gray-900">
                      Mythic Design, Rajkot
                    </a>
                  </div>
                  <div className="lg:border-l lg:border-gray-200 lg:pl-5">
                    <h6 className="flex items-center gap-2.5 text-base leading-7 font-medium text-gray-500">
                      {/* SVG removed */}Address
                    </h6>
                    <a className="pt-1.5 text-sm leading-5 font-medium text-gray-900">
                      Mythic Design, Ahmedabad
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 rounded-xl border border-gray-200 p-6">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                Follow Us
              </h4>
              <p className="pt-2.5 text-sm leading-5 font-normal text-gray-500">
                You can call, email, or visit us at our office. We look forward
                to connecting with you!
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-8 sm:flex-nowrap">
                <a className="flex items-center gap-1.5 text-sm leading-5 font-normal text-gray-900">
                  {/* SVG removed */}Instagram
                </a>
                {/* SVG removed */}
                <a className="flex items-center gap-1.5 text-sm leading-5 font-normal text-gray-900">
                  {/* SVG removed */}Facebook
                </a>
                {/* SVG removed */}
                <a className="flex items-center gap-1.5 text-sm leading-5 font-normal text-gray-900">
                  {/* SVG removed */}LinkedIn
                </a>
              </div>
              <div className="pt-10">
                <button className="font-inter flex w-40 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
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
  )
}
