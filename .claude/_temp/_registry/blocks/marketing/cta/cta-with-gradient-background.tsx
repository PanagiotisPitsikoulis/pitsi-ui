export default function CtaWithGradientBackground() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Connect with us
            </h2>
            <p className="text-xl text-indigo-100">
              Contact us with any query or any idea.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
          >
            Get In Touch
            {/* SVG removed */}
          </a>
        </div>
      </div>
    </section>
  );
}
