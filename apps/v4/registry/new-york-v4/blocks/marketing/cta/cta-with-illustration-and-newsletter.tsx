export default function CtaWithIllustrationAndNewsletter() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row xl:gap-28">
          <div className="w-full max-w-xl lg:w-3/5">
            <h2 className="font-manrope mb-9 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 lg:text-left">
              You can trust us for next project{" "}
            </h2>
            <p className="mb-20 text-center text-lg leading-8 text-gray-500 lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex flex-col items-center justify-center gap-7 md:flex-row md:items-start lg:justify-start">
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="after:content-[' '] relative flex w-full justify-center rounded-2xl after:absolute after:inset-0 after:-z-10 after:m-auto after:h-[400px] after:rounded-2xl after:bg-indigo-100 md:after:w-[490px] xl:w-2/5">
            <img
              src="https://pagedone.io/asset/uploads/1696242786.png"
              alt="CTA tailwind section"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
