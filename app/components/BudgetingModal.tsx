"use client";

interface BudgetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetingModal({
  isOpen,
  onClose,
}: BudgetingModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-[#1f2937] rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-0 bg-white">
            <div className="flex justify-center bg-[#0C2841] pt-10 px-10">
              <div className="bg-[#061520] w-full flex justify-center p-10 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3333 73.3327H46.6667C63.3333 73.3327 70 66.666 70 49.9994V29.9994C70 13.3327 63.3333 6.66602 46.6667 6.66602H33.3333C16.6667 6.66602 10 13.3327 10 29.9994V49.9994C10 66.666 16.6667 73.3327 33.3333 73.3327Z"
                      stroke="white"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M55 25.2676V28.6009C55 31.3342 52.7667 33.6009 50 33.6009H30C27.2667 33.6009 25 31.3676 25 28.6009V25.2676C25 22.5342 27.2333 20.2676 30 20.2676H50C52.7667 20.2676 55 22.5009 55 25.2676Z"
                      stroke="white"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.1204 46.6667H27.1589"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.9847 46.6667H40.0232"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M52.846 46.6667H52.8845"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.1204 58.3327H27.1589"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.9847 58.3327H40.0232"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M52.846 58.3327H52.8845"
                      stroke="white"
                      stroke-width="4.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-10 p-10">
              <div className="flex gap-1 items-start">
                <div className="w-12 h-12  flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6.5H16"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6.5H2"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 17.5H18"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 17.5H2"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#191919] mb-2.5 leading-tight">
                    Set up annual budgets by account category
                  </h3>
                  <p className="text-[#191919] text-sm leading-relaxed">
                    Allocate funds across income and expense lines with full
                    visibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-1 items-start">
                <div className=" w-12 h-12 rounded-lg  flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5 9.5H16.5V11.5"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#191919] mb-2.5 leading-tight">
                    Track actuals vs budget in real time
                  </h3>
                  <p className="text-[#191919] text-sm leading-relaxed">
                    See how your community is performing against plan, month by
                    month.
                  </p>
                </div>
              </div>

              <div className="flex gap-1 items-start">
                <div className=" w-12 h-12 rounded-lg  flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 19H22"
                      stroke="#52525B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#191919] mb-2.5 leading-tight">
                    Adjust figures and forecast with ease
                  </h3>
                  <p className="text-[#191919] text-sm leading-relaxed">
                    Edit amounts, apply percentage changes, or roll forward last
                    year's data-all in one place.
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-full transition-colors text-base"
              >
                Create Budget
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
