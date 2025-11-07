export default function LegalPageWithGradientBackgroundHeading() {
  return (
    <section>
      <div className="w-full">
        <nav className="w-full py-5 px-12 xl:px-20 fixed border-b border-indigo-200">
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
              <li className="pr-6 flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                >
                  Products
                </a>
              </li>
              <li className="pr-6 flex items-center justify-center gap-2">
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
              <button className="w-24 h-11 bg-white hover:bg-gray-100 ease-in-out duration-500 rounded-full justify-center items-center flex text-gray-900 text-sm font-semibold leading-snug cursor-pointer">
                {" "}
                Login{" "}
              </button>
              <button className="w-24 h-11 justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-gray-900 hover:bg-gray-800 ease-in-out duration-500 rounded-full shadow ">
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
        <div className="w-full bg-cover bg-center bg-no-repeat lg:pt-44 pt-28 lg:pb-24 pb-14 px-12 xl:px-20">
          <h1 className="mb-8 text-center text-gray-900 font-bold font-manrope leading-tight lg:text-5xl text-3xl">
            {" "}
            Terms of Use{" "}
          </h1>
          <p className="text-gray-900 text-lg leading-8 text-center font-normal px-4">
            {" "}
            We're here to help! Reach us by phone at [contact number] or email
            us at [email address] for any queries or concerns.{" "}
          </p>
        </div>
        <section className="w-full relative overflow-hidden lg:py-28 py-16">
          <div className="px-12 xl:px-20">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200">
                <ul className="tab-nav flex flex-col md:items-start items-center lg:gap-10 gap-6">
                  <li>
                    <a
                      href="#"
                      className="font-medium text-base leading-7 text-indigo-600"
                    >
                      Terms of Use
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
              <div className="w-full tab-pane max-md:px-4">
                <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">
                  Terms of Use
                </h2>
                <div className="flex items-center gap-3 lg:mb-10 mb-8">
                  <p className="font-medium text-xl leading-8 text-indigo-600">
                    Last updated: May 26, 2023
                  </p>
                </div>
                <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                  {" "}
                  These are terms and conditions (the “Terms”) on which we
                  supply products to you including digital content and services.
                  Please read these Terms carefully before you access our
                  digital content or use our services. These Terms together with
                  our referenced Privacy Policy and Cookies Policy detail how we
                  will provide digital content and/or services to you, how you
                  and we may change or end the contract, what do in the event of
                  a problem and other important information. <br />
                  <br /> Who we are - We are Pagedone. <br />
                  <br /> How to contact us - You can contact us by telephoning
                  our customer service team at [contact number] or by writing to
                  us [email address].
                </p>
                <h5 className="font-manrope font-bold md:text-3xl text-2xl text-gray-900 mb-4">
                  Contents
                </h5>
                <ul className="ml-8 lg:mb-10 mb-8">
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#01">
                      Your Agreement to these Terms through Your Access of the
                      Site or Your Use of the Site.
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#02">Content and Services</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#03">
                      agedone Does Not Offer and Does Not Provide Legal Advice
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#04">
                      Pagedone is Not a Law Firm. Pagedone is not offering legal
                      representation
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#05">Pagedone is Not a Referral Service</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#06">
                      There is No Attorney-Client relationship between You and
                      Pagedone and You Agree that You
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#07">
                      Attorney Users Are Not Employees of Pagedone
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#08">
                      All Legal Fees Are Paid to Attorney Users, Not to Pagedone
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#09">
                      There Is No Fee to Pagedone for Finding EngagementsThere
                      Is No Fee to Pagedone for Finding Engagements
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#10">Non-circumvention</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#11">Expectations</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#12">Your Responsibilities</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#13">Your Use and Restrictions</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#14">Confidentiality</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#15">Indemnification</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#16">Communication and Other Data</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#17">Electronic Notices and Agreements</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#18">Premium Services </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#19">Hyperlinks</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a>Copyright and Limited Use</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#21">Changes</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#22">Your Content</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#23">Copyright Complaints</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#24">Disclaimer</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#25">
                      Limitation of Liability. Pagedone provides the Site and
                      the Service “as is”, without warranty of any kind
                    </a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#26">Entire agreement</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#27">Assignability</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#28">Arbitration</a>
                  </li>
                  <li className="list-decimal font-normal text-lg text-gray-500">
                    <a href="#29">Minimum Age for Use</a>
                  </li>
                </ul>
                <ul className="flex flex-col ml-8 gap-10 list-outside list-decimal font-manrope font-bold text-3xl">
                  <li id="01" className="list-decimal">
                    <h2 className="font-manrope font-bold lg:text-3xl text-2xl text-gray-900">
                      {" "}
                      Your Agreement to these Terms through Your Access of the
                      Site or Your Use of the Site.{" "}
                    </h2>
                    <p className="mt-5 font-normal text-lg leading-8 text-gray-500">
                      {" "}
                      These Terms govern your use of the Site, both as a visitor
                      and as a registered user (each visitor and each registered
                      user is referred to generally for purposes of these Terms
                      as a "Client User"). BY USING THE SITE, AND/OR BY
                      REGISTERING WITH US, YOU AGREE TO THESE TERMS OF USE, You
                      consent to the information practices disclosed in our
                      Privacy Policy and our Cookies Policy which are
                      incorporated herein by reference, and that you consent to
                      resolve in the State of New York pursuant to the terms set
                      forth herein any dispute that you may have with us, or the
                      Site. Please note that we offer the Site "AS IS" and
                      without warranties. If you are registering an account or
                      using the Site on behalf of an individual or entity other
                      than yourself, you represent that you are authorized by
                      such individual or entity to accept these Terms on such
                      individual's or entity's behalf.{" "}
                    </p>
                  </li>
                  <li id="02" className="list-decimal">
                    <h2 className="font-manrope font-bold lg:text-3xl text-2xl text-gray-900">
                      Content and Services
                    </h2>
                    <p className="mt-5 font-normal text-lg leading-8 text-gray-500">
                      {" "}
                      Everything we offer on and through the Site is referred to
                      in these Terms collectively as the "Services". <br />
                      <br /> Some of what is on the Site is viewable without
                      registering with us, but to actively participate or store
                      your information, you must register as a member and
                      authorize the use and disclosure of your personal and
                      legal information pursuant to the terms of our Privacy
                      Policy for purposes of allowing us to provide the Services
                      and as otherwise disclosed in our Privacy Policy available
                      at{" "}
                      <span className="cursor-pointer underline underline-offset-4">
                        {" "}
                        www.pagedone.io/disclaimers-privacy.{" "}
                      </span>{" "}
                      Pagedone is an online platform that connects legal
                      professionals ("Attorney Users") with potential Client
                      Users seeking legal services. Pagedone itself does not
                      provide legal advice and does not provide legal services
                      of any nature whatsoever. And Pagedone does not guarantee
                      that Client Users will find legal representation through
                      its system. Pagedone offers no opinion nor does it take a
                      position on when or if an attorney-client relationship has
                      been formed between its Client Users and Attorney Users.
                      Pagedone is not a party to the agreements between Client
                      Users and Attorney Users governing the attorney-client
                      relationship nor is Pagedone involved in the actual
                      representation of clients. As a result, Pagedone cannot
                      ensure the completion of agreements between the Client
                      User and Attorney User, the accuracy or completeness of
                      the work-product of the Attorney User, or the integrity of
                      either party. The Client User is responsible for
                      evaluating the integrity and abilities of all Attorney
                      Users with whom the Client User communicates using the
                      Site. You acknowledge thathough some of the content, text,
                      data, graphics, images, information, suggestions,
                      guidance, and other material (collectively, "Information")
                      that is provided to you on the Site (including Information
                      provided in direct response to your questions or postings)
                      may be provided by individuals in the legal profession,
                      the provision of such Information does not create an
                      attorney-client relationship and does not constitute an
                      opinion or legal advice, but is provided to assist you
                      with locating an appropriate legal professional. Any form
                      of use of the Site by potential clients or subscribing
                      Attorney Users is not intended to and will not create an
                      attorney-client relationship between or among any person,
                      entity, and Pagedone. Any electronic communication sent to
                      anyone at Pagedone other than an Attorney User will not
                      create an attorney-client relationship between the Client
                      User and Pagedone.
                    </p>
                  </li>
                  <li id="03" className="list-decimal">
                    <h2 className="font-manrope font-bold lg:text-3xl text-2xl text-gray-900">
                      Pagedone Does Not Offer and Does Not Provide Legal Advice
                    </h2>
                    <p className="mt-5 font-normal text-lg leading-8 text-gray-500">
                      {" "}
                      The information that you receive from Pagedone, and its
                      affiliates is for informational and scheduling purposes
                      only. Pagedone is not a design firm nor does it offer you
                      design advice, recommendations, consultations or any kind
                      of counseling. Pagedone makes its Designers available to
                      you and any information provided to you by Pagedone (other
                      than through a Designer that you hire to work with you) is
                      (i) provided by independent design professionals and
                      organizations representing the interests of Pagedone, (ii)
                      is for informational purposes only, and (iii) does not
                      establish any designer-client relationship between you and
                      Pagedone.{" "}
                    </p>
                  </li>
                </ul>
                <button className="w-full rounded-full mt-10 flex items-center gap-2 justify-center bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 text-white py-3.5 px-5 text-center font-semibold text-base">
                  {" "}
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full bg-gray-900">
          <div className=" px-12 xl:px-20">
            {/*Grid*/}
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20">
              <div className="block">
                <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
                <ul className="text-lg  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Pro Version
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="block">
                <h4 className="text-xl text-white font-bold mb-7">Products</h4>
                <ul className="text-lg  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Figma UI System
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Responsive Blocks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Components Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Plugin Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="block">
                <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
                <ul className="text-lg  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      User Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Plugin Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="block">
                <h4 className="text-xl text-white font-bold mb-7">Support</h4>
                <ul className="text-lg  transition-all duration-500">
                  <li className="mb-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Customer Support
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Cookies
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      License
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Grid*/}
            <div className="py-7 border-t border-gray-700 ">
              <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                <a href="#" className="flex justify-center "></a>
                <span className="text-gray-400  block">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
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
