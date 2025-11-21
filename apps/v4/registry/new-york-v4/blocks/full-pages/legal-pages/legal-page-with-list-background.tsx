export default function LegalPageWithListBackground() {
  return (
    <section>
      <div className="w-full">
        <nav className="w-auto border-b border-indigo-100 bg-indigo-50 px-12 py-5 lg:w-full xl:px-20">
          <div className="flex items-center justify-between">
            {/* Website Logo */}
            <a href="#" className="flex items-center pr-7 md:pr-10"></a>
            {/* Primary Navbar items */}
            <div className="hidden items-center lg:flex">
              <li className="list-none pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="list-none pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                >
                  About us
                </a>
              </li>
              <li className="flex items-center gap-2 pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                >
                  Products
                </a>
              </li>
              <li className="flex items-center gap-2 pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                >
                  Features
                </a>
              </li>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden items-center gap-5 lg:flex">
              <button className="hover:bg-indigo-800-100 flex h-11 w-24 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm leading-snug font-semibold text-white transition-all duration-500 ease-in-out">
                {" "}
                Login{" "}
              </button>
              <button className="flex h-11 w-24 cursor-pointer items-center justify-center rounded-[100px] bg-gray-900 text-sm leading-snug font-semibold text-white shadow-xs duration-500 ease-in-out hover:bg-gray-800">
                {" "}
                Sign up{" "}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center shadow-lg lg:hidden">
              <button className="mobile-menu-button outline-none"></button>
            </div>
          </div>
          {/* mobile menu */}
          <div className="mobile-menu hidden">
            <ul className="mt-2.5 grid items-center justify-center">
              <li className="pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-relaxed font-medium text-gray-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-6">
                <a
                  href="#"
                  className="px-3 text-base leading-relaxed font-medium text-gray-500"
                >
                  About us
                </a>
              </li>
              <li>
                <span className="flex" id="dropdown">
                  <button className="dropbtn flex items-center gap-2 px-3 text-base leading-relaxed font-medium text-gray-500">
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
                  <button className="dropbtn flex items-center gap-2 px-3 text-base leading-relaxed font-medium text-gray-500">
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
        <section className="w-auto bg-indigo-50 px-12 pt-16 pb-16 lg:w-full lg:pb-28 xl:px-20">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="h-max w-full rounded-2xl bg-white shadow-lg md:w-72">
              <h5 className="rounded-t-2xl bg-indigo-600 py-4 text-center text-xl leading-8 font-semibold text-white">
                Legal Policies
              </h5>
              <ul className="tab-nav flex flex-col items-center gap-6 p-8 md:items-start lg:gap-8">
                <li>
                  <a
                    href="#"
                    className="text-base leading-7 font-medium text-indigo-600"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-7 font-medium text-gray-500 hover:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-7 font-medium text-gray-500 hover:text-indigo-600"
                  >
                    Customer Conduct
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-7 font-medium text-gray-500 hover:text-indigo-600"
                  >
                    General Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-7 font-medium text-gray-500 hover:text-indigo-600"
                  >
                    Services &amp; Account
                  </a>
                </li>
              </ul>
            </div>
            <div className="tabe-pan w-full">
              <h2 className="font-manrope mb-5 text-3xl font-bold text-gray-900 lg:text-4xl">
                Terms &amp; Conditions
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xl leading-8 font-medium text-indigo-600">
                  Last updated: May 26, 2023
                </span>
              </div>

              <p className="mb-8 text-lg leading-8 font-normal text-gray-500 lg:mb-10">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Your Pagedone Account{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Payment{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
                  charges incurred once you have exhausted your
                  credits/matches.{" "}
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Refunds{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
                  {" "}
                  Pagedone does not provide refunds to users who request it,
                  regardless of the reason for the request.{" "}
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Support{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Damage and liability{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
                  {" "}
                  You expressly understand and agree that Pagedone shall not be
                  liable for any direct, indirect, incidental, special,
                  consequential, or exemplary damages, including but not limited
                  to: damages for loss of profits, goodwill, use, data, or other
                  intangible losses (even if Pagedone has been advised of the
                  possibility of such damages).{" "}
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Marketing{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
                  {" "}
                  By creating an account, you grant Pagedone a perpetual
                  worldwide license to use your company's name and logo(s) for
                  the sole purpose of Pagedone's marketing and sales efforts,
                  such as listing you as a Pagedone customer on the Website. You
                  may revoke this license at any time by notifying Pagedone via
                  email.{" "}
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Copyright Infringement{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Changes{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Termination{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
                  {" "}
                  Pagedone may terminate your access to all or any part of the
                  Services at any time, with or without cause, with or without
                  notice, effective immediately.{" "}
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Disclaimer of Warranties{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Limitation of Liability{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
              <div className="mb-8 lg:mb-10">
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  General Representation and Warranty{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
                <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
                  {" "}
                  Indemnification{" "}
                </h3>
                <p className="text-lg leading-8 font-normal text-gray-500">
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
        <footer className="w-auto bg-white px-12 lg:w-full xl:px-20">
          <div>
            {/*Grid*/}
            <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-6">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a
                  href="#"
                  className="flex justify-center lg:justify-start"
                ></a>
                <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
                  Trusted in more than 100 countries &amp; 5 million customers.
                  Have any query ?
                </p>
                <a
                  href="#"
                  className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
                >
                  {" "}
                  Contact us{" "}
                </a>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Pagedone
                </h4>
                <ul className="text-sm transition-all duration-500">
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
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Products
                </h4>
                <ul className="text-sm transition-all duration-500">
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
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Resources
                </h4>
                <ul className="text-sm transition-all duration-500">
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
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Blogs
                </h4>
                <ul className="text-sm transition-all duration-500">
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
            <div className="border-t border-gray-200 py-7">
              <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
                <span className="text-sm text-gray-500">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="flex space-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
