export default function CtaWithIllustrationAndNewsletter() {
  return (
    <section className="py-12 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 xl:gap-28 lg:flex-row">
          <div className="w-full max-w-xl lg:w-3/5">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-9 text-center lg:text-left">
              You can trust us for next project{" "}
            </h2>
            <p className="text-lg text-gray-500 leading-8 mb-20 text-center lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex flex-col items-center md:flex-row gap-7 md:items-start lg:justify-start justify-center">
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center relative after:content-[' '] md:after:w-[490px] rounded-2xl after:h-[400px] after:absolute after:bg-indigo-100 after:inset-0 after:m-auto after:-z-10 after:rounded-2xl">
            <img
              src="https://pagedone.io/asset/uploads/1696242786.png"
              alt="CTA tailwind section"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
