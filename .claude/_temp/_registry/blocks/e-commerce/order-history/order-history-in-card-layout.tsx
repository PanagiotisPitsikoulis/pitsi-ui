export default function OrderHistoryInCardLayout() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <h2 className="w-full text-black text-3xl font-extrabold font-manrope leading-normal text-center lg:text-left">
          Your Orders
        </h2>
        <div className="w-full p-9 bg-gray-50 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-8 inline-flex mt-10 mb-6">
          <div className="w-full justify-start items-center gap-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="text-center sm:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Number
                <span className="text-black">#2562015893</span>
              </h6>
            </div>
            <div className="text-center lg:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Date
                <span className="text-black">Jan 18, 2022</span>
              </h6>
            </div>
            <div className="text-center sm:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Delivery Date
                <span className="text-black">Jan 26, 2022</span>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Ship To
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 flex py-8 border-y border-gray-300">
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581370.png"
                alt="Polo Black T-Shirt image"
              />
              <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 flex">
                <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                  <div className="w-full justify-between md:items-start items-center gap-2.5 flex md:flex-row flex-col">
                    <h4 className="text-black text-xl font-medium leading-loose">
                      Men's Regular Fit Polo Black T-Shirt
                    </h4>
                    <h4 className="text-right text-black text-xl font-semibold leading-loose">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Color :<span className="text-gray-900"> Black</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="w-full md:justify-start justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581381.png"
                alt="Regular Fit T-Shirt image"
              />
              <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                  <div className="w-full justify-between md:items-start items-center gap-2.5 flex md:flex-row flex-col">
                    <h4 className="text-black text-xl font-medium leading-loose md:text-start text-center">
                      Men's Cotton Solid Round Neck Regular Fit T-Shirt
                    </h4>
                    <h4 className="text-right text-black text-xl font-semibold leading-loose">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Color :
                    <span className="text-gray-900"> Heather Purple</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="w-full md:justify-start justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-between items-center flex md:flex-row flex-col gap-4">
            <div className="flex flex-row items-center">
              <h5 className="text-gray-400 text-lg font-semibold leading-[30px]">
                Total Amount :{" "}
              </h5>
              <h6 className="text-gray-900 text-xl font-semibold leading-loose">
                {" "}
                $160
              </h6>
            </div>
            <div className="justify-end items-center gap-2.5 flex">
              <a href="#"></a>
              <h6 className="text-right text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                Download Invoice
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full p-9 bg-gray-50 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-8 inline-flex">
          <div className="w-full justify-start items-center gap-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="text-center sm:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Number
                <span className="text-black">#2562015893</span>
              </h6>
            </div>
            <div className="text-center lg:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Date
                <span className="text-black">Jan 18, 2022</span>
              </h6>
            </div>
            <div className="text-center sm:border-r sm:border-b-0 border-b border-gray-300 sm:pr-3 md:pb-0 pb-3">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Delivery Date
                <span className="text-black">Jan 26, 2022</span>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Ship To
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 flex py-8 border-y border-gray-300">
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581395.png"
                alt="Sofa & Washable Cover image"
              />
              <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 flex">
                <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                  <div className="w-full justify-between md:items-start items-center gap-2.5 flex md:flex-row flex-col">
                    <h4 className="text-black text-xl font-medium leading-loose md:text-start text-center">
                      Polycotton Fabric Rounded 78x44x10 Inches Sofa &amp;
                      Washable Cover With 6 Cushions
                    </h4>
                    <h4 className="text-right text-black text-xl font-semibold leading-loose">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Color :<span className="text-gray-900"> White</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="w-full md:justify-start justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581408.png"
                alt="Hanging Stand image"
              />
              <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                  <div className="w-full justify-between md:items-start items-center gap-2.5 flex md:flex-row flex-col">
                    <h4 className="text-black text-xl font-medium leading-loose md:text-start text-center">
                      Wall Round Hanging Stand{" "}
                    </h4>
                    <h4 className="text-right text-black text-xl font-semibold leading-loose">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Color :
                    <span className="text-gray-900"> Heather Purple</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="w-full md:justify-start justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-between items-center flex md:flex-row flex-col gap-4">
            <div className="flex flex-row items-center">
              <h5 className="text-gray-400 text-lg font-semibold leading-[30px]">
                Total Amount :{" "}
              </h5>
              <h6 className="text-gray-900 text-xl font-semibold leading-loose">
                {" "}
                $160
              </h6>
            </div>
            <div className="justify-end items-center gap-2.5 flex">
              <a href="#"></a>
              <h6 className="text-right text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer">
                Download Invoice
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
