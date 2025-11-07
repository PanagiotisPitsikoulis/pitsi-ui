export default function SeeTheStatsBehindOurSuccess() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <div className="px-2.5 py-0.5 border border-indigo-400 bg-indigo-50 text-xs font-medium leading-5 text-indigo-600 w-fit rounded-full mx-auto">
            Numbers
          </div>
          <h2 className="text-4xl font-bold font-manrope text-black text-center">
            See the Stats Behind Our Success
          </h2>
          <p className="text-lg font-normal leading-8 text-gray-500 text-center pt-1">
            {" "}
            Explore the data that showcases our achievements and drives our
            continued success.
          </p>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-10/12  md:w-full">
            <div className="border border-r-gray-200 bg-gray-50 rounded-2xl py-10 px-5 flex flex-col gap-3">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
                99+
              </h3>
              <p className="text-base font-normal leading-6 text-gray-500 text-center">
                Expert consultants delivering impactful results through proven
                strategies
              </p>
            </div>
            <div className="border border-r-gray-200 bg-gray-50 rounded-2xl py-10 px-5 flex flex-col gap-3">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
                130+
              </h3>
              <p className="text-base font-normal leading-6 text-gray-500 text-center">
                Supporting a growing network of active clients worldwide
              </p>
            </div>
            <div className="border border-r-gray-200 bg-gray-50 rounded-2xl py-10 px-5 flex flex-col gap-3">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
                80+
              </h3>
              <p className="text-base font-normal leading-6 text-gray-500 text-center">
                Successfully delivered projects that drive lasting impact
              </p>
            </div>
            <div className="lg:col-span-3 w-full max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              <div className="border border-r-gray-200 bg-gray-50 rounded-2xl py-10 px-5 flex flex-col gap-3">
                <h3 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
                  60+
                </h3>
                <p className="text-base font-normal leading-6 text-gray-500 text-center">
                  Current orders in queue, ready for prompt delivery
                </p>
              </div>
              <div className="border border-r-gray-200 bg-gray-50 rounded-2xl py-10 px-5 flex flex-col gap-3">
                <h3 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
                  14+
                </h3>
                <p className="text-base font-normal leading-6 text-gray-500 text-center">
                  Successfully delivered projects that drive lasting impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
