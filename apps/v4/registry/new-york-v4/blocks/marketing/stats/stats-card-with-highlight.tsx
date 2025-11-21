export default function StatsCardWithHighlight() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-10/12 grid-cols-1 gap-8 sm:w-full sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-16 rounded-2xl bg-amber-50 p-6 text-center">
            <h3 className="font-manrope text-center text-6xl font-bold text-gray-900">
              260<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl leading-8 font-semibold text-gray-900">
                Expert Consultants
              </h4>
              <p className="text-sm leading-6 font-light text-gray-900">
                Our expert consultants offer unparalleled industry insights and
                hands-on experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-16 rounded-2xl bg-amber-50 p-6 text-center">
            <h3 className="font-manrope text-center text-6xl font-bold text-gray-900">
              975<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl leading-8 font-semibold text-gray-900">
                Active Clients
              </h4>
              <p className="text-sm leading-6 font-light text-gray-900">
                Our growing number of active clients reflects the trust and
                confidence businesses.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-16 rounded-2xl bg-amber-50 p-6 text-center">
            <h3 className="font-manrope text-center text-6xl font-bold text-gray-900">
              724<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl leading-8 font-semibold text-gray-900">
                Projects Delivered
              </h4>
              <p className="text-sm leading-6 font-light text-gray-900">
                We take pride in the successful delivery of numerous projects,
                each crafted with precision
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-16 rounded-2xl bg-amber-50 p-6 text-center">
            <h3 className="font-manrope text-center text-6xl font-bold text-gray-900">
              175<span className="text-amber-600">+</span>
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl leading-8 font-semibold text-gray-900">
                Orders in Queue
              </h4>
              <p className="text-sm leading-6 font-light text-gray-900">
                Our orders in queue reflect the trust clients place in us to
                deliver quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
