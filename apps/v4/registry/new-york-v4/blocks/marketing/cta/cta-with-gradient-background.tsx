export default function CtaWithGradientBackground() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 lg:flex-row lg:px-20 lg:py-14">
          <div className="mb-5 block text-center lg:mb-0 lg:text-left">
            <h2 className="font-manrope mb-5 text-4xl font-semibold text-white lg:mb-2">
              Connect with us
            </h2>
            <p className="text-xl text-indigo-100">
              Contact us with any query or any idea.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm transition-all duration-500"
          >
            Get In Touch
            {/* SVG removed */}
          </a>
        </div>
      </div>
    </section>
  )
}
