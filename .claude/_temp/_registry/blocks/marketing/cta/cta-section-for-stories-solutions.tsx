export default function CtaSectionForStoriesSolutions() {
  return (
    <section className="py-20 bg-gradient-to-l from-indigo-700 to-indigo-500">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-28">
          <div className="flex flex-col gap-8">
            <h2 className="font-manrope text-4xl text-white text-center md:text-start font-bold mb-3 leading-[52px]">
              Engaging Stories That Captivate Audiences Convert.
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="img"
              />
              <a className="text-base font-medium leading-6 text-white font-inter">
                People have joined
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base font-normal leading-6 text-white font-inter text-center md:text-start">
              Craft stories that do more than just tell—they captivate your
              audience and drive action. Our storytelling approach.
            </p>
            <ul className="flex justify-center items-center md:justify-start md:items-start flex-col mb-2 gap-4">
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
            <button className="mx-auto md:m-0 w-fit px-6 py-2.5 bg-white shadow-xs_shadow text-indigo-600 rounded-xl font-inter text-base font-semibold leading-7 transition-all duration-500 hover:bg-gray-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
