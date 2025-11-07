export default function LegalPageWithListBackground() {
  return (
    <section>
      <div className="w-full">
        <nav className="lg:w-full w-auto py-5 px-12 xl:px-20 bg-indigo-50 border-b border-indigo-100">
          <div className="flex justify-between items-center">
            {/* Website Logo */}
            <a href="#" className="flex items-center md:pr-10 pr-7"></a>
            {/* Primary Navbar items */}
            <div className="hidden lg:flex items-center">
              <li className="pr-6 list-none">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-6 list-none">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                >
                  About us
                </a>
              </li>
              <li className="pr-6 flex items-center gap-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                >
                  Products
                </a>
              </li>
              <li className="pr-6 flex items-center gap-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                >
                  Features
                </a>
              </li>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden lg:flex items-center gap-5">
              <button className="w-24 h-11 bg-indigo-600 text-white transition-all hover:bg-indigo-800-100 ease-in-out duration-500 rounded-full justify-center items-center flex text-sm font-semibold leading-snug cursor-pointer">
                {" "}
                Login{" "}
              </button>
              <button className="w-24 h-11 justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-gray-900 hover:bg-gray-800 ease-in-out duration-500 rounded-[100px] shadow-xs">
                {" "}
                Sign up{" "}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center shadow-lg">
              <button className="outline-none mobile-menu-button"></button>
            </div>
          </div>
          {/* mobile menu */}
          <div className="hidden mobile-menu">
            <ul className="grid items-center justify-center mt-2.5">
              <li className="pr-6">
                <a
                  href="#"
                  className="text-gray-500 text-base font-medium leading-relaxed px-3"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-6">
                <a
                  href="#"
                  className="text-gray-500 text-base font-medium leading-relaxed px-3"
                >
                  About us
                </a>
              </li>
              <li>
                <span className="flex" id="dropdown">
                  <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-3 gap-2">
                    Products
                  </button>
                  <div id="myDropdown" className="dropdown-content">
                    <a href="#home" className="text-gray-500">
                      Home
                    </a>
                    <a href="#about" className="text-gray-500">
                      About
                    </a>
                    <a href="#contact" className="text-gray-500">
                      Contact
                    </a>
                  </div>
                </span>
              </li>
              <li>
                <span className="flex" id="dropdown1">
                  <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-3 gap-2">
                    Features
                  </button>
                  <div id="myDropdown1" className="dropdown-content">
                    <a href="#home" className="text-gray-500">
                      Home
                    </a>
                    <a href="#about" className="text-gray-500">
                      About
                    </a>
                    <a href="#contact" className="text-gray-500">
                      Contact
                    </a>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <section className="lg:w-full w-auto px-12 xl:px-20 pt-16 lg:pb-28 pb-16 bg-indigo-50">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-72 h-max rounded-2xl bg-white shadow-lg">
              <h5 className="text-center rounded-t-2xl bg-indigo-600 py-4 font-semibold text-xl leading-8 text-white">
                Legal Policies
              </h5>
              <ul className="tab-nav p-8 flex flex-col md:items-start items-center lg:gap-8 gap-6">
                <li>
                  <a
                    href="#"
                    className="font-medium text-base leading-7 text-indigo-600"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    Customer Conduct
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    General Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    Services &amp; Account
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full tabe-pan">
              <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">
                Terms &amp; Conditions
              </h2>
              <div className="flex items-center gap-3 ">
                <span className="font-medium text-xl leading-8 text-indigo-600">
                  Last updated: May 26, 2023
                </span>
              </div>

              <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                {" "}
                The following terms and conditions govern all use of the
                Pagedone website and all content, services, and APIs available
                at or connected to the Pagedone domain pagedone.io (the
                "Website"). The Services are offered subject to your acceptance,
                without modification, of all of the terms and conditions
                contained herein and all other operating rules, policies, and
                procedures that may be published on this Website by Pagedone
                (collectively, the "Agreement"). <br /> Please read this
                Agreement carefully before accessing or using the Services. By
                accessing or using any part of the Website, you agree to be
                bound by the terms and conditions of this Agreement. If you do
                not agree to all the terms and conditions of this Agreement,
                then you may not access or use the Services. If these terms and
                conditions are considered an offer by Pagedone, acceptance is
                expressly limited to these terms. The Services are available
                only to individuals who are at least 18 years old.{" "}
              </p>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Your Pagedone Account{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  If you create an account for the Services, you are responsible
                  for maintaining the security of your account, and you are
                  fully responsible for all activities that occur under the
                  account and any other actions taken in connection with the
                  account. You must immediately notify Pagedone of any
                  unauthorized uses of your account or any other breaches of
                  security. Pagedone will not be liable for any acts or
                  omissions by you, including any damages of any kind incurred
                  as a result of such acts or omissions. You must be a human.
                  Accounts registered by "bots" or other automated methods are
                  not permitted. You must provide your legal name, a valid email
                  address, and any other information requested in order to
                  complete the sign-up process. Accounts may only be accessed
                  and used by the individual whose details were entered upon
                  account creation. The account login credentials cannot be
                  shared with any other individual or company. You must not, in
                  the use of the Services, violate any laws in your jurisdiction
                  and in the United States (including but not limited to
                  copyright or trademark laws). You must not create more than
                  one account.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Payment{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  Optional paid services, including any scans, exports, or
                  enrichments beyond the included free credits and free matches,
                  are available on the Services. <br /> By choosing to perform a
                  scan or an enrichment using Pagedone, you agree to pay
                  Pagedone the fees for that task based on your current pricing
                  tier, which is dictated by your current plan. Payments will be
                  billed automatically and may be processed in groups. Some
                  payments may be charged up to 10 days later. <br /> Should you
                  wish to cancel your plan, you will lose all remaining
                  credits/matches in your account at the end of the billing
                  cycle. You may no longer have access to credits/matches that
                  rolled over from previous billing cycles when you change your
                  plan. <br /> You agree to be responsible for any overage
                  charges incurred once you have exhausted your credits/matches.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Refunds{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  Pagedone does not provide refunds to users who request it,
                  regardless of the reason for the request.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Support{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  The Services include access to email support. "Email support"
                  means the ability to make requests for technical support
                  assistance by email at any time (with reasonable efforts by
                  Pagedone to respond within three business days) concerning the
                  use of the Services. All Pagedone support will be provided in
                  accordance with Pagedone standard practices, procedures, and
                  policies.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Damage and liability{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  You expressly understand and agree that Pagedone shall not be
                  liable for any direct, indirect, incidental, special,
                  consequential, or exemplary damages, including but not limited
                  to: damages for loss of profits, goodwill, use, data, or other
                  intangible losses (even if Pagedone has been advised of the
                  possibility of such damages).{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Marketing{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  By creating an account, you grant Pagedone a perpetual
                  worldwide license to use your company's name and logo(s) for
                  the sole purpose of Pagedone's marketing and sales efforts,
                  such as listing you as a Pagedone customer on the Website. You
                  may revoke this license at any time by notifying Pagedone via
                  email.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Copyright Infringement{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  As Pagedone asks others to respect its intellectual property
                  rights, it respects the intellectual property rights of
                  others. If you believe that material located on or linked to
                  by Pagedone violates your copyright, you are encouraged to
                  notify Pagedone. Pagedone will respond to all such notices,
                  including as required or appropriate, by removing the
                  infringing material or disabling all links to the infringing
                  material. Pagedone will terminate a visitor's access to and
                  use of the Services if, under appropriate circumstances, the
                  visitor is determined to be a repeat infringer of the
                  copyrights or other intellectual property rights of Pagedone
                  or others. <br />
                  <br /> Intellectual Property: Pagedone does not transfer to
                  you any Pagedone or third-party intellectual property, and all
                  right, title, and interest in and to such property will remain
                  (as between the parties) solely with Pagedone. Pagedone, the
                  Pagedone logo, and all other trademarks, service marks,
                  graphics, and logos used in connection with Pagedone or the
                  Services are trademarks or registered trademarks of Pagedone
                  or Pagedone licensors. Other trademarks, service marks,
                  graphics, and logos used in connection with the Services may
                  be the trademarks of other third parties. Your use of the
                  Services grants you no right or license to reproduce or
                  otherwise use any Pagedone or third-party trademarks.
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Changes{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  Pagedone reserves the right, at its sole discretion, to modify
                  or replace any part of this Agreement. It is your
                  responsibility to check this Agreement periodically for
                  changes. Your continued use of or access to the Services
                  following the posting of any changes to this Agreement
                  constitutes acceptance of those changes. Pagedone may also, in
                  the future, offer new services and/or features through the
                  Services (including the release of new tools and resources).
                  Such new features and/or services shall be subject to the
                  terms and conditions of this Agreement.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Termination{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  Pagedone may terminate your access to all or any part of the
                  Services at any time, with or without cause, with or without
                  notice, effective immediately.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Disclaimer of Warranties{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  The Services are provided "as is". Pagedone and its suppliers
                  and licensors hereby disclaim all warranties of any kind,
                  express or implied, including, without limitation, the
                  warranties of merchantability, fitness for a particular
                  purpose, and non-infringement. Neither Pagedone nor its
                  suppliers and licensors make any warranty that the Services
                  will be error-free or that access thereto will be continuous
                  or uninterrupted. You understand that you download from, or
                  otherwise obtain content or services through, the Services at
                  your own discretion and risk.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Limitation of Liability{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  In no event will Pagedone, or its suppliers or licensors, be
                  liable with respect to any subject matter of this Agreement
                  under any contract, negligence, strict liability, or other
                  legal or equitable theory for: (i) any special, incidental, or
                  consequential damages; (ii) the cost of procurement for
                  substitute products or services; (iii) interruption of use or
                  loss or corruption of data; or (iv) any amounts that exceed
                  the fees paid by you to Pagedone under this Agreement during
                  the twelve (12) month period prior to the cause of action.
                  Pagedone shall have no liability for any failure or delay due
                  to matters beyond or not within their reasonable control. The
                  foregoing shall not apply to the extent prohibited by
                  applicable law.{" "}
                </p>
              </div>
              <div className="lg:mb-10 mb-8">
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  General Representation and Warranty{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  You represent and warrant that (i) your use of the Services
                  will be in strict accordance with the Pagedone Privacy Policy,
                  with this Agreement, and with all applicable laws and
                  regulations (including without limitation any local laws or
                  regulations in your country, state, city, or other
                  governmental area, regarding online conduct and acceptable
                  content, and including all applicable laws regarding the
                  transmission of technical data exported from the United States
                  or the country in which you reside), and (ii) your use of the
                  Services will not infringe or misappropriate the intellectual
                  property rights of any third party.{" "}
                </p>
              </div>
              <div>
                <h3 className="font-manrope font-bold text-3xl text-gray-900 mb-4">
                  {" "}
                  Indemnification{" "}
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-500">
                  {" "}
                  You agree to indemnify and hold harmless Pagedone, its
                  contractors, its licensors, and their respective directors,
                  officers, employees, and agents from and against any and all
                  claims and expenses, including attorneys' fees, arising out of
                  your use of the Services, including but not limited to your
                  violation of this Agreement.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="lg:w-full w-auto px-12 xl:px-20 bg-white ">
          <div>
            {/*Grid*/}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 py-12">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a
                  href="#"
                  className="flex justify-center lg:justify-start"
                ></a>
                <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                  Trusted in more than 100 countries &amp; 5 million customers.
                  Have any query ?
                </p>
                <a
                  href="#"
                  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
                >
                  {" "}
                  Contact us{" "}
                </a>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Pagedone
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Products
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Figma UI System
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Resources
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Blogs
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      News
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Tips &amp; Tricks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      New Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Grid*/}
            <div className="py-7 border-t border-gray-200">
              <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row gap-4">
                <span className="text-sm text-gray-500 ">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="flex space-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
