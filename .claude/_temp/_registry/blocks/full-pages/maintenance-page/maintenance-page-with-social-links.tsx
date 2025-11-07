export default function MaintenancePageWithSocialLinks() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-48 gap-24 inline-flex">
          <a href="#"></a>
          <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 flex">
            <div className="w-full flex-col justify-start items-center gap-2.5 flex">
              <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                We're sorry! The site is under maintenance right now.
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Our website is currently down for scheduled maintenance. We'll
                return shortly. We appreciate your patience. <br />
                Contact us for further information.
                <br />
                <a className="text-gray-900 font-medium ">mail@pagedone.com</a>
              </p>
            </div>
            <div className="w-full flex-col justify-center items-center gap-2.5 flex">
              <h6 className="text-center text-gray-900 text-base font-medium leading-relaxed">
                Follow Us!
              </h6>
              <div className="justify-center items-center gap-3.5 inline-flex">
                <a className="group p-2 bg-indigo-700 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex"></a>
                <a className="group p-2 bg-indigo-700 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex"></a>
                <a className="group p-2 bg-indigo-700 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex"></a>
                <a className="group p-2 bg-indigo-700 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex"></a>
                <a className="group p-2 bg-indigo-700 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
