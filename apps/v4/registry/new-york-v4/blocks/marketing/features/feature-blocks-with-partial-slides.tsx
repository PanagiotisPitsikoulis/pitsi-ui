export default function FeatureBlocksWithPartialSlides() {
  return (
    <section className="py-24">
      <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 bg-white px-4 md:px-0 lg:pl-14 xl:pl-28">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-7 lg:grid-cols-12 xl:gap-12">
          <div className="col-span-12 inline-flex flex-col items-end justify-center gap-8 lg:col-span-4 xl:col-span-3">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 lg:max-w-lg lg:text-start">
              Explore Our Amazing Features
            </h2>
            <div className="inline-flex w-full items-center justify-center gap-2.5 lg:items-start lg:justify-start">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex h-[34px] w-[34px] items-center justify-center rounded-md bg-orange-50 transition-all duration-700 ease-in-out hover:bg-orange-100"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex h-[34px] w-[34px] items-center justify-center rounded-md bg-orange-50 transition-all duration-700 ease-in-out hover:bg-orange-100"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            {/*Slider wrapper*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Instant Communication
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Real-time exchange of information for swift collaboration
                      and decision-making.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Effortless File Sharing
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Seamlessly exchange files across teams for streamlined
                      collaboration and productivity.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Virtual Meeting
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Facilitate remote collaboration and discussions through
                      interactive online sessions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Robust Security
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Ensure comprehensive protection of data and systems
                      against cyber threats and unauthorized access.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Instant Communication
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Real-time exchange of information for swift collaboration
                      and decision-making.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Effortless File Sharing
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Seamlessly exchange files across teams for streamlined
                      collaboration and productivity.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Virtual Meeting
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Facilitate remote collaboration and discussions through
                      interactive online sessions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <div className="inline-flex h-6 w-6 items-center justify-center">
                        {/* SVG removed */}
                      </div>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        Robust Security
                      </h5>
                    </div>
                    <p className="max-w-96 text-sm leading-relaxed font-normal text-gray-500 lg:max-w-60">
                      Ensure comprehensive protection of data and systems
                      against cyber threats and unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*
      <div class="justify-start items-end gap-5 flex">
          <div class="w-full p-3 bg-gray-50 rounded-lg flex-col justify-start items-start gap-3 inline-flex">
              <div class="flex-col justify-start items-start gap-5 flex">
                  <div class="w-6 h-6 justify-center items-center inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44737 0.53418H11.5511C13.1509 0.534167 14.4227 0.534156 15.4299 0.653206C16.4656 0.775629 17.325 1.03339 18.0443 1.62373C18.2874 1.82319 18.5102 2.04605 18.7097 2.2891C19.3 3.00842 19.5578 3.86787 19.6802 4.90356C19.7993 5.91069 19.7993 7.18251 19.7993 8.78215L19.7993 10.9638C19.7996 12.2339 19.7998 13.0551 19.5864 13.7476C19.1187 15.2655 17.9305 16.4537 16.4127 16.9214C15.7202 17.1347 14.899 17.1345 13.6288 17.1342L13.477 17.1342C13.0492 17.1342 12.9397 17.1375 12.8465 17.1551C12.6054 17.2007 12.384 17.3192 12.2123 17.4945C12.146 17.5623 12.0825 17.6516 11.8452 18.0075L11.7618 18.1326C11.6081 18.3632 11.4693 18.5715 11.3422 18.7345C11.2091 18.9053 11.0409 19.0914 10.8068 19.2259C10.3107 19.511 9.70846 19.5431 9.18472 19.3125C8.93771 19.2037 8.75059 19.0366 8.60008 18.881C8.45636 18.7324 8.29612 18.5401 8.11879 18.3273L7.67427 17.7938C7.47395 17.5535 7.42137 17.4932 7.3693 17.4459C7.19071 17.2837 6.96736 17.1791 6.72842 17.1457C6.65875 17.136 6.57878 17.1342 6.26588 17.1342L6.13953 17.1342C5.08321 17.1344 4.40077 17.1346 3.81776 16.9865C2.11202 16.5533 0.78012 15.2214 0.346935 13.5157C0.198869 12.9326 0.199013 12.2502 0.199236 11.1939L0.199253 8.7823C0.199239 7.18257 0.199228 5.91073 0.318279 4.90356C0.440701 3.86787 0.698463 3.00842 1.2888 2.28909C1.48826 2.04605 1.71112 1.82319 1.95417 1.62373C2.6735 1.03339 3.53294 0.775629 4.56863 0.653206C5.5758 0.534156 6.84765 0.534167 8.44737 0.53418ZM5.1285 9.1249C5.56813 9.08093 5.88889 8.6889 5.84493 8.24927C5.80096 7.80963 5.40893 7.48888 4.96929 7.53284L4.91968 7.5378C4.48004 7.58176 4.15929 7.9738 4.20325 8.41343C4.24721 8.85307 4.63925 9.17382 5.07888 9.12986L5.1285 9.1249ZM10.7951 8.25415C10.8391 8.69378 10.5183 9.08582 10.0787 9.12978L10.0291 9.13474C9.58944 9.17871 9.19741 8.85795 9.15344 8.41832C9.10948 7.97868 9.43024 7.58665 9.86987 7.54268L9.91949 7.53772C10.3591 7.49376 10.7512 7.81451 10.7951 8.25415ZM15.0787 9.12978C15.5183 9.08582 15.8391 8.69378 15.7951 8.25415C15.7512 7.81451 15.3591 7.49376 14.9195 7.53772L14.8699 7.54268C14.4302 7.58665 14.1095 7.97868 14.1534 8.41832C14.1974 8.85795 14.5894 9.17871 15.0291 9.13474L15.0787 9.12978Z" fill="#FB923C"/>
                    </svg>
                  </div>
                  <h5 class="text-gray-900 text-lg font-medium leading-relaxed">Instant Communication</h5>
              </div>
              <p class="lg:max-w-60 max-w-96 text-gray-500 text-sm font-normal leading-relaxed">Real-time exchange of information for swift collaboration and decision-making.</p>
          </div>
          <div class="w-full p-3 bg-gray-50 rounded-lg flex-col justify-start items-start gap-3 inline-flex">
              <div class="flex-col justify-start items-start gap-5 flex">
                  <div class="w-6 h-6 justify-center items-center inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.44985 1.46353C9.70603 1.10263 9.62113 0.602379 9.26023 0.346199C9.06131 0.205002 8.82006 0.167418 8.60068 0.222552C3.94459 0.318357 0.20077 4.1239 0.203127 8.80242C0.203351 9.245 0.562317 9.60361 1.0049 9.60338C1.44749 9.60316 1.80609 9.24419 1.80587 8.80161C1.80422 5.53465 4.049 2.79117 7.08087 2.032L6.05616 3.4756C5.79998 3.83651 5.88488 4.33675 6.24578 4.59293C6.60669 4.84911 7.10694 4.76422 7.36311 4.40331L9.44985 1.46353Z" fill="#FB923C"/>
                      <path d="M11.2012 4.49971C11.2012 2.12488 13.1263 0.199707 15.5012 0.199707C17.876 0.199707 19.8012 2.12488 19.8012 4.49971C19.8012 6.87453 17.876 8.79971 15.5012 8.79971C13.1263 8.79971 11.2012 6.87453 11.2012 4.49971Z" fill="#FB923C"/>
                      <path d="M4.4607 11.1997H4.54165C5.20938 11.1997 5.77033 11.1997 6.22521 11.2459C6.70264 11.2945 7.15119 11.4006 7.55677 11.6716C7.8625 11.8759 8.12501 12.1384 8.32929 12.4441C8.60029 12.8497 8.70637 13.2982 8.75494 13.7757C8.80121 14.2306 8.8012 14.7915 8.80118 15.4592V15.5402C8.8012 16.208 8.80121 16.7689 8.75494 17.2237C8.70637 17.7012 8.60029 18.1497 8.32929 18.5553C8.12501 18.861 7.8625 19.1235 7.55677 19.3278C7.15119 19.5988 6.70264 19.7049 6.22521 19.7535C5.77033 19.7997 5.20937 19.7997 4.54165 19.7997H4.46066C3.79293 19.7997 3.23202 19.7997 2.77714 19.7535C2.29971 19.7049 1.85116 19.5988 1.44558 19.3278C1.13985 19.1235 0.877344 18.861 0.67306 18.5553C0.40206 18.1497 0.295983 17.7012 0.247415 17.2237C0.201142 16.7689 0.201156 16.2079 0.201172 15.5402V15.4592C0.201156 14.7915 0.201142 14.2305 0.247415 13.7757C0.295983 13.2982 0.40206 12.8497 0.67306 12.4441C0.877344 12.1384 1.13985 11.8759 1.44558 11.6716C1.85116 11.4006 2.29971 11.2945 2.77714 11.2459C3.23202 11.1997 3.79297 11.1997 4.4607 11.1997Z" fill="#FB923C"/>
                      <path d="M19.0012 10.2988C19.4438 10.2988 19.8026 10.6576 19.8026 11.1002C19.8026 15.779 16.0565 19.5828 11.4 19.6758C11.1804 19.7312 10.9387 19.6936 10.7396 19.5521C10.3788 19.2957 10.2942 18.7954 10.5505 18.4347L12.6388 15.4959C12.8951 15.1352 13.3954 15.0505 13.7562 15.3069C14.117 15.5632 14.2016 16.0635 13.9452 16.4243L12.9197 17.8676C15.9528 17.1106 18.1999 14.3678 18.1999 11.1002C18.1999 10.6576 18.5586 10.2988 19.0012 10.2988Z" fill="#FB923C"/>
                    </svg>
                  </div>
                  <h5 class="text-gray-900 text-lg font-medium leading-relaxed">Effortless File Sharing</h5>
              </div>
              <p class="lg:max-w-60 max-w-96 text-gray-500 text-sm font-normal leading-relaxed">Seamlessly exchange files across teams for streamlined collaboration and productivity.</p>
          </div>
          <div class="w-full p-3 bg-gray-50 rounded-lg flex-col justify-start items-start gap-3 inline-flex">
              <div class="flex-col justify-start items-start gap-5 flex">
                  <div class="w-6 h-6 justify-center items-center inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3.49922 7.19961C1.67668 7.19961 0.199219 8.67707 0.199219 10.4996V11.4996C0.199219 13.3221 1.67668 14.7996 3.49922 14.7996C5.32176 14.7996 6.79922 13.3221 6.79922 11.4996V10.4996C6.79922 8.67707 5.32176 7.19961 3.49922 7.19961Z" fill="#FB923C"/>
                      <path d="M16.4992 14.7992C18.3218 14.7992 19.7992 13.3218 19.7992 11.4992V10.4992C19.7992 8.67668 18.3218 7.19922 16.4992 7.19922C14.6767 7.19922 13.1992 8.67668 13.1992 10.4992V11.4992C13.1992 13.3218 14.6767 14.7992 16.4992 14.7992Z" fill="#FB923C"/>
                      <path d="M9.99951 19.7994C10.9936 19.7994 11.7995 18.9935 11.7995 17.9994C11.7995 17.0053 10.9936 16.1994 9.99951 16.1994C9.0054 16.1994 8.19951 17.0053 8.19951 17.9994C8.19951 18.9935 9.0054 19.7994 9.99951 19.7994Z" fill="#FB923C"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19927 6.99922C3.19927 3.24368 6.24373 0.199219 9.99927 0.199219C13.7548 0.199219 16.7993 3.24368 16.7993 6.99922V7.99922H15.1993V6.99922C15.1993 4.12734 12.8711 1.79922 9.99927 1.79922C7.12739 1.79922 4.79927 4.12734 4.79927 6.99922V7.99922H3.19927V6.99922Z" fill="#FB923C"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7996 13.9993C16.7996 16.6503 14.6506 18.7993 11.9996 18.7993H10.9996V17.1993H11.9996C13.7669 17.1993 15.1996 15.7666 15.1996 13.9993H16.7996Z" fill="#FB923C"/>
                    </svg>
                  </div>
                  <h5 class="text-gray-900 text-lg font-medium leading-relaxed">Virtual Meeting</h5>
              </div>
              <p class="lg:max-w-60 max-w-96 text-gray-500 text-sm font-normal leading-relaxed">Facilitate remote collaboration and discussions through interactive online sessions.</p>
          </div>
          <div class="w-full p-3 bg-gray-50 rounded-lg flex-col justify-start items-start gap-3 inline-flex">
              <div class="flex-col justify-start items-start gap-5 flex">
                  <div class="w-6 h-6 justify-center items-center inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M8.99727 6.56826C8.33452 6.56826 7.79727 7.10552 7.79727 7.76826C7.79727 8.431 8.33452 8.96826 8.99727 8.96826C9.66001 8.96826 10.1973 8.431 10.1973 7.76826C10.1973 7.10552 9.66001 6.56826 8.99727 6.56826Z" fill="#FB923C"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58303 1.3408C7.42072 0.961339 8.17708 0.741211 9.00048 0.741211C9.82388 0.741211 10.5802 0.961339 11.4179 1.3408C12.2314 1.70931 13.1749 2.25406 14.3646 2.94093L15.2265 3.43857C15.6874 3.70465 16.0825 3.93273 16.3923 4.15476C16.7235 4.39213 17.0088 4.6574 17.2196 5.02241C17.4303 5.38742 17.5174 5.76715 17.5574 6.17267C17.5947 6.55197 17.5947 7.00817 17.5947 7.54038V11.995C17.5947 12.5272 17.5947 12.9834 17.5574 13.3627C17.5174 13.7683 17.4303 14.148 17.2196 14.513C17.0088 14.878 16.7235 15.1433 16.3923 15.3807C16.0825 15.6027 15.6874 15.8308 15.2265 16.0969L11.3686 18.3242C10.9078 18.5903 10.5127 18.8184 10.1655 18.9757C9.79435 19.1438 9.42196 19.2583 9.00048 19.2583C8.579 19.2583 8.20662 19.1438 7.83544 18.9757C7.48826 18.8184 7.0932 18.5903 6.63232 18.3242L2.77443 16.0969C2.31352 15.8308 1.91844 15.6027 1.60865 15.3807C1.27745 15.1433 0.992121 14.878 0.781382 14.513C0.570643 14.148 0.48358 13.7683 0.443606 13.3627C0.406218 12.9835 0.406233 12.5273 0.406251 11.9951V7.54033C0.406233 7.00816 0.406218 6.55196 0.443606 6.17267C0.48358 5.76715 0.570643 5.38742 0.781382 5.02241C0.992121 4.6574 1.27745 4.39213 1.60865 4.15476C1.91844 3.93273 2.31353 3.70464 2.77443 3.43856L3.63637 2.94092C4.82603 2.25406 5.76955 1.70931 6.58303 1.3408ZM11.7973 7.76826C11.7973 9.03667 10.9539 10.1081 9.79727 10.4523V13.7683C9.79727 14.2101 9.43909 14.5683 8.99727 14.5683C8.55544 14.5683 8.19727 14.2101 8.19727 13.7683V10.4523C7.04067 10.1081 6.19727 9.03667 6.19727 7.76826C6.19727 6.22186 7.45087 4.96826 8.99727 4.96826C10.5437 4.96826 11.7973 6.22186 11.7973 7.76826Z" fill="#FB923C"/>
                    </svg>
                  </div>
                  <h5 class="text-gray-900 text-lg font-medium leading-relaxed">Robust Security</h5>
              </div>
              <p class="lg:max-w-60 max-w-96 text-gray-500 text-sm font-normal leading-relaxed">Ensure comprehensive protection of data and systems against cyber threats and unauthorized access.</p>
          </div>
      </div>
      */}
        </div>
      </div>
    </section>
  )
}
