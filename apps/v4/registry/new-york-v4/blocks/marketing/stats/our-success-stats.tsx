export default function OurSuccessStats() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="font-manrope text-center text-4xl font-bold text-gray-900 lg:text-start">
              See the Numbers Behind Our{" "}
              <span className="text-indigo-600">Success</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-start">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-3xl font-bold text-indigo-600">99+</h3>
                <p className="text-lg font-normal text-gray-500">
                  Expert Consultants
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-3xl font-bold text-indigo-600">130+</h3>
                <p className="text-lg font-normal text-gray-500">
                  Client Sinification
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-3xl font-bold text-indigo-600">80+</h3>
                <p className="text-lg font-normal text-gray-500">
                  Project Finalized
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-3xl font-bold text-indigo-600">64+</h3>
                <p className="text-lg font-normal text-gray-500">
                  Orders in Queue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
