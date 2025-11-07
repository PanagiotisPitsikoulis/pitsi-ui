export default function OurGrowthInNumbers() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col lg:flex-row  items-center lg:items-start gap-8 ">
          <div className="lg:w-2/5 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-black font-manrope text-center lg:text-start">
              Our Growth in Numbers
            </h2>
            <p className="text-base font-normal leading-7 text-gray-600 text-center lg:text-start">
              Our growth is more than just words—it’s in the numbers. Discover
              how we’ve scaled our operations, improved results
            </p>
            <button className="w-fit mt-6 mx-auto lg:mx-0 bg-cyan-500 shadow-sm py-3 px-6 rounded-full text-base font-semibold text-white flex justify-center transition-all duration-500 hover:bg-cyan-600">
              Lets get started
            </button>
            <div className="mt-10">
              <img
                src="https://pagedone.io/asset/uploads/1760003815.png"
                alt="img"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="px-5 py-11 rounded-xl bg-gray-50 flex flex-col gap-3.5">
              <h3 className="font-manrope font-bold text-5xl text-cyan-500 text-center">
                200+
              </h3>
              <h4 className="text-xl text-black font-medium leading-8 text-center">
                Active Clients
              </h4>
              <p className="text-sm font-normal text-gray-600 text-center pt-1.5">
                Our active clients are at the heart of everything we do. We’re
                proud to collaborate.
              </p>
            </div>
            <div className="px-5 py-11 rounded-xl bg-gray-50 flex flex-col gap-3.5">
              <h3 className="font-manrope font-bold text-5xl text-cyan-500 text-center">
                55M
              </h3>
              <h4 className="text-xl text-black font-medium leading-8 text-center">
                Revenue Generated
              </h4>
              <p className="text-sm font-normal text-gray-600 text-center pt-1.5">
                Our strategies have helped generate substantial revenue,
                reflecting our ability to turn opportunities
              </p>
            </div>
            <div className="px-5 py-11 rounded-xl bg-gray-50 flex flex-col gap-3.5">
              <h3 className="font-manrope font-bold text-5xl text-cyan-500 text-center">
                89+
              </h3>
              <h4 className="text-xl text-black font-medium leading-8 text-center">
                Orders in Queue
              </h4>
              <p className="text-sm font-normal text-gray-600 text-center pt-1.5">
                Our orders in queue reflect the trust clients place in us. We’re
                actively processing orders with precision.
              </p>
            </div>
            <div className="px-5 py-11 rounded-xl bg-gray-50 flex flex-col gap-3.5">
              <h3 className="font-manrope font-bold text-5xl text-cyan-500 text-center">
                175+
              </h3>
              <h4 className="text-xl text-black font-medium leading-8 text-center">
                Team Members
              </h4>
              <p className="text-sm font-normal text-gray-600 text-center pt-1.5">
                Our team members are the backbone of our success, bringing
                expertiseand dedication to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
