export default function MaintenancePageWithSocialLinks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-24 lg:gap-48">
          <a href="#"></a>
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:gap-14">
            <div className="flex w-full flex-col items-center justify-start gap-2.5">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
                We're sorry! The site is under maintenance right now.
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                Our website is currently down for scheduled maintenance. We'll
                return shortly. We appreciate your patience. <br />
                Contact us for further information.
                <br />
                <a className="font-medium text-gray-900">mail@pagedone.com</a>
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                Follow Us!
              </h6>
              <div className="inline-flex items-center justify-center gap-3.5">
                <a className="group flex items-start justify-start gap-2.5 rounded-full bg-indigo-700 p-2 transition-all duration-700 ease-in-out hover:bg-indigo-800"></a>
                <a className="group flex items-start justify-start gap-2.5 rounded-full bg-indigo-700 p-2 transition-all duration-700 ease-in-out hover:bg-indigo-800"></a>
                <a className="group flex items-start justify-start gap-2.5 rounded-full bg-indigo-700 p-2 transition-all duration-700 ease-in-out hover:bg-indigo-800"></a>
                <a className="group flex items-start justify-start gap-2.5 rounded-full bg-indigo-700 p-2 transition-all duration-700 ease-in-out hover:bg-indigo-800"></a>
                <a className="group flex items-start justify-start gap-2.5 rounded-full bg-indigo-700 p-2 transition-all duration-700 ease-in-out hover:bg-indigo-800"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
