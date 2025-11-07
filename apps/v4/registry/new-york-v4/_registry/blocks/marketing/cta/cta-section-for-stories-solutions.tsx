export default function CtaSectionForStoriesSolutions() {
  return (
    <section className="bg-gradient-to-l from-indigo-700 to-indigo-500 py-20">
      <div className="mx-auto w-full max-w-7xl rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-28">
          <div className="flex flex-col gap-8">
            <h2 className="font-manrope mb-3 text-center text-4xl leading-[52px] font-bold text-white md:text-start">
              Engaging Stories That Captivate Audiences Convert.
            </h2>
            <div className="flex items-center justify-center gap-5 md:justify-start">
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="img"
              />
              <a className="font-inter text-base leading-6 font-medium text-white">
                People have joined
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-inter text-center text-base leading-6 font-normal text-white md:text-start">
              Craft stories that do more than just tell—they captivate your
              audience and drive action. Our storytelling approach.
            </p>
            <ul className="mb-2 flex flex-col items-center justify-center gap-4 md:items-start md:justify-start">
              <li className="flex items-center gap-3 text-white">
                {/* SVG removed */}
                Premium Support
              </li>
              <li className="flex items-center gap-3 text-white">
                {/* SVG removed */}
                Fast Delivery
              </li>
              <li className="flex items-center gap-3 text-white">
                {/* SVG removed */}
                Library of Our Specialist Team
              </li>
            </ul>
            <button className="shadow-xs_shadow font-inter mx-auto w-fit rounded-xl bg-white px-6 py-2.5 text-base leading-7 font-semibold text-indigo-600 transition-all duration-500 hover:bg-gray-300 md:m-0">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
