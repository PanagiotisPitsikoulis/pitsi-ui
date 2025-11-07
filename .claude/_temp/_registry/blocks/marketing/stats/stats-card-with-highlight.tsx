export default function StatsCardWithHighlight() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-10/12 mx-auto sm:w-full">
          <div className="p-6 rounded-2xl bg-amber-50 flex flex-col gap-16 text-center">
            <h3 className="text-6xl font-bold font-manrope text-gray-900 text-center">
              260<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-900 text-xl font-semibold leading-8">
                Expert Consultants
              </h4>
              <p className="text-sm font-light leading-6 text-gray-900">
                Our expert consultants offer unparalleled industry insights and
                hands-on experience.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-amber-50 flex flex-col gap-16 text-center">
            <h3 className="text-6xl font-bold font-manrope text-gray-900 text-center">
              975<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-900 text-xl font-semibold leading-8">
                Active Clients
              </h4>
              <p className="text-sm font-light leading-6 text-gray-900">
                Our growing number of active clients reflects the trust and
                confidence businesses.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-amber-50 flex flex-col gap-16 text-center">
            <h3 className="text-6xl font-bold font-manrope text-gray-900 text-center">
              724<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-900 text-xl font-semibold leading-8">
                Projects Delivered
              </h4>
              <p className="text-sm font-light leading-6 text-gray-900">
                We take pride in the successful delivery of numerous projects,
                each crafted with precision
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-amber-50 flex flex-col gap-16 text-center">
            <h3 className="text-6xl font-bold font-manrope text-gray-900 text-center">
              175<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-900 text-xl font-semibold leading-8">
                Orders in Queue
              </h4>
              <p className="text-sm font-light leading-6 text-gray-900">
                Our orders in queue reflect the trust clients place in us to
                deliver quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
