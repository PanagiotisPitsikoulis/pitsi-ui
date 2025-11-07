export default function TailwindCardsWithDifferentLayout() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3 inline-flex mb-12">
          <h2 className="text-center text-black text-5xl font-bold font-manrope leading-tight">
            Our Latest Blog
          </h2>
          <p className="text-center text-gray-600 text-lg font-normal leading-7">
            A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry
            of Ideas and Inspiration.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-4 col-span-12 p-8 bg-emerald-50 rounded-xl flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <h3 className="text-emerald-900 text-2xl font-normal font-manrope leading-tight">
                Unlocking Bancassurance Horizons: A Diverse Exploration of
                Strategic Models.
              </h3>
              <p className="text-emerald-900 text-sm font-normal leading-snug">
                Embark on a transformative journey through the dynamic terrain
                of bancassurance models. In this exploration, we delve into the
                intricacies of strategic insights that not only redefine
                financial partnerships but also play a pivotal...
              </p>
            </div>
            <a className="text-green-700 text-lg font-semibold leading-7 hover:text-green-800 transition-all duration-700 ease-in-out">
              Read More...
            </a>
          </div>
          <div className="lg:col-span-8 col-span-12 p-8 rounded-xl flex-col justify-between items-start inline-flex bg-no-repeat bg-right bg-gray-100 bg-[url('https://pagedone.io/asset/uploads/1710841368.png')]">
            <div className="flex-col justify-start items-start gap-4 flex lg:pb-0 pb-5">
              <h3 className="text-gray-900 text-3xl font-normal font-manrope leading-tight">
                Revolutionizing Finance: A <br />
                Closer Look at How <br />
                Open Finance Sparks <br />
                Product Innovation.
              </h3>
              <p className="text-gray-900 text-sm font-normal leading-snug">
                Embark on a journey through the financial frontier as we <br />
                dissect the revolutionary impact of Open Finance, delving <br />
                into the intricacies of how it ignites product innovation.{" "}
                <br />
                Explore real-world examples, transformative...{" "}
              </p>
            </div>
            <a className="text-green-700 text-lg font-semibold leading-7 hover:text-green-800 transition-all duration-700 ease-in-out">
              Read More...
            </a>
          </div>
        </div>
        <div className="lg:grid grid-cols-12 gap-8 flex flex-col-reverse">
          <div className="lg:col-span-8 col-span-12 bg-gray-900 p-8 rounded-xl flex-col justify-between items-start inline-flex bg-no-repeat bg-auto bg-right bg-[url('https://pagedone.io/asset/uploads/1710841384.png')]">
            <div className="flex-col justify-start items-start gap-4 flex pb-8">
              <h3 className="text-white text-3xl font-normal font-manrope leading-tight">
                Cracking the Code: The Crucial <br />
                Link Between Transparency, <br />
                Trust, and Open Data.
              </h3>
              <p className="text-white text-sm font-normal leading-snug">
                Dive into the intricate web of transparency, trust, and open
                data, <br />
                exploring how the symbiotic relationship among these elements{" "}
                <br />
                becomes the key to unlocking new dimensions of reliability and{" "}
                <br />
                credibility in various...
              </p>
            </div>
            <a className="text-green-700 text-lg font-semibold leading-7 hover:text-green-800 transition-all duration-700 ease-in-out">
              Read More...
            </a>
          </div>
          <div className="lg:col-span-4 col-span-12 p-8 bg-lime-400 rounded-xl flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <h3 className="text-gray-900 text-2xl font-normal font-manrope leading-tight">
                Innovation Echo: Charting the Unseen Waves of Transformation by
                FIDA &amp; PSD3.
              </h3>
              <p className="text-emerald-900 text-sm font-normal leading-snug">
                Embark on a journey through the dynamic world of financial
                innovation as we explore the seismic shifts ushered in by FIDA
                &amp; PSD3. Dive into the unseen waves of transformation,
                unraveling how these regulatory forces...
              </p>
            </div>
            <a className="text-green-700 text-lg font-semibold leading-7 hover:text-green-800 transition-all duration-700 ease-in-out">
              Read More...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
