export default function CtaSectionForSubscription() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl bg-red-600">
        <div className="sm:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-4xl font-semibold font-manrope text-white text-center lg:text-left leading-[52px]">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm font-normal leading-5 text-gray-100 text-center lg:text-left font-inter">
              Ready to boost your productivity? Download Pagedone and
              streamline.
            </p>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center lg:justify-start gap-3.5 font-inter">
            <input
              type="text"
              className="w-full sm:w-[351px] py-2.5 px-4 bg-white rounded-lg shadow-sm text-base font-normal leading-7 placeholder:text-red-600 outline-none"
              placeholder="Your mail id.."
            />
            <button className="bg-white w-full sm:w-fit px-6 py-2.5 text-red-600 leading-7 text-base font-semibold rounded-lg transition-all duration-500 hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
