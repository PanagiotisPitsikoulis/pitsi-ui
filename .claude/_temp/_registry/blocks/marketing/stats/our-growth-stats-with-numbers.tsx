export default function OurGrowthStatsWithNumbers() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold font-manrope">
            Our Growth in Numbers
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Our growth is more than just words—it’s in the numbers. Discover how
            we’ve scaled our operations, improved results
          </p>
        </div>
        <div className="mt-14 pt-14 border-t-2 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto md:w-full">
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-5xl font-bold font-manrope">13M</h3>
              <p className="text-lg font-normal text-gray-600">
                We have reach more than 13 millions user in around the world
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-5xl font-bold font-manrope">50M</h3>
              <p className="text-lg font-normal text-gray-600">
                Pagedone is one of most downloaded on google play
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-5xl font-bold font-manrope">98%</h3>
              <p className="text-lg font-normal text-gray-600">
                Our user are satisfied using our services in their daily site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
