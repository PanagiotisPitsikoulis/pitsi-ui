export default function TailwindCardsWithDifferentLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 inline-flex w-full flex-col items-center justify-start gap-3">
          <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-black">
            Our Latest Blog
          </h2>
          <p className="text-center text-lg leading-7 font-normal text-gray-600">
            A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry
            of Ideas and Inspiration.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-12 gap-8">
          <div className="col-span-12 inline-flex flex-col items-start justify-start gap-12 rounded-xl bg-emerald-50 p-8 lg:col-span-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-manrope text-2xl leading-tight font-normal text-emerald-900">
                Unlocking Bancassurance Horizons: A Diverse Exploration of
                Strategic Models.
              </h3>
              <p className="text-sm leading-snug font-normal text-emerald-900">
                Embark on a transformative journey through the dynamic terrain
                of bancassurance models. In this exploration, we delve into the
                intricacies of strategic insights that not only redefine
                financial partnerships but also play a pivotal...
              </p>
            </div>
            <a className="text-lg leading-7 font-semibold text-green-700 transition-all duration-700 ease-in-out hover:text-green-800">
              Read More...
            </a>
          </div>
          <div className="col-span-12 inline-flex flex-col items-start justify-between rounded-xl bg-gray-100 bg-[url('https://pagedone.io/asset/uploads/1710841368.png')] bg-right bg-no-repeat p-8 lg:col-span-8">
            <div className="flex flex-col items-start justify-start gap-4 pb-5 lg:pb-0">
              <h3 className="font-manrope text-3xl leading-tight font-normal text-gray-900">
                Revolutionizing Finance: A <br />
                Closer Look at How <br />
                Open Finance Sparks <br />
                Product Innovation.
              </h3>
              <p className="text-sm leading-snug font-normal text-gray-900">
                Embark on a journey through the financial frontier as we <br />
                dissect the revolutionary impact of Open Finance, delving <br />
                into the intricacies of how it ignites product innovation.{" "}
                <br />
                Explore real-world examples, transformative...{" "}
              </p>
            </div>
            <a className="text-lg leading-7 font-semibold text-green-700 transition-all duration-700 ease-in-out hover:text-green-800">
              Read More...
            </a>
          </div>
        </div>
        <div className="flex grid-cols-12 flex-col-reverse gap-8 lg:grid">
          <div className="col-span-12 inline-flex flex-col items-start justify-between rounded-xl bg-gray-900 bg-[url('https://pagedone.io/asset/uploads/1710841384.png')] bg-auto bg-right bg-no-repeat p-8 lg:col-span-8">
            <div className="flex flex-col items-start justify-start gap-4 pb-8">
              <h3 className="font-manrope text-3xl leading-tight font-normal text-white">
                Cracking the Code: The Crucial <br />
                Link Between Transparency, <br />
                Trust, and Open Data.
              </h3>
              <p className="text-sm leading-snug font-normal text-white">
                Dive into the intricate web of transparency, trust, and open
                data, <br />
                exploring how the symbiotic relationship among these elements{" "}
                <br />
                becomes the key to unlocking new dimensions of reliability and{" "}
                <br />
                credibility in various...
              </p>
            </div>
            <a className="text-lg leading-7 font-semibold text-green-700 transition-all duration-700 ease-in-out hover:text-green-800">
              Read More...
            </a>
          </div>
          <div className="col-span-12 inline-flex flex-col items-start justify-start gap-12 rounded-xl bg-lime-400 p-8 lg:col-span-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-manrope text-2xl leading-tight font-normal text-gray-900">
                Innovation Echo: Charting the Unseen Waves of Transformation by
                FIDA &amp; PSD3.
              </h3>
              <p className="text-sm leading-snug font-normal text-emerald-900">
                Embark on a journey through the dynamic world of financial
                innovation as we explore the seismic shifts ushered in by FIDA
                &amp; PSD3. Dive into the unseen waves of transformation,
                unraveling how these regulatory forces...
              </p>
            </div>
            <a className="text-lg leading-7 font-semibold text-green-700 transition-all duration-700 ease-in-out hover:text-green-800">
              Read More...
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
