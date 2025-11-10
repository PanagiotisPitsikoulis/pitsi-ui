export default function OurGrowthStatsWithNumbers() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-manrope text-4xl font-bold">
            Our Growth in Numbers
          </h2>
          <p className="text-base font-normal text-gray-600">
            Our growth is more than just words—it’s in the numbers. Discover how
            we’ve scaled our operations, improved results
          </p>
        </div>
        <div className="mt-14 border-t-2 border-gray-100 pt-14">
          <div className="mx-auto grid w-10/12 grid-cols-1 gap-8 md:w-full md:grid-cols-3">
            <div className="flex flex-col gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold">13M</h3>
              <p className="text-lg font-normal text-gray-600">
                We have reach more than 13 millions user in around the world
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold">50M</h3>
              <p className="text-lg font-normal text-gray-600">
                Pagedone is one of most downloaded on google play
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold">98%</h3>
              <p className="text-lg font-normal text-gray-600">
                Our user are satisfied using our services in their daily site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
