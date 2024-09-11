import {
  Trending,
  GenerateEmailInput,
  InfoBlock,
  FaqDropDown,
} from "../component";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen -mt-24 lg:-mt-[80px] 2xl:-mt-[150px]">
        <div className="pt-[55%] xs:pt-[40%] sm:pt-[30%] md:pt-[25%]   2xl:pt-[30%] text-center main-wrapper">
          <h2 className="font-sans text-[2.2rem] mx-auto xs:max-w-[550px] sm:max-w-[650px] xl:sm:max-w-[850px] sm:text-[3rem] font-bold leading-[125%] xl:text-[3.5rem]">
            Unlimited movies, TV shows and more
          </h2>
          <p className="my-2 text-lg xl:text-xl">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className=" mt-3 xs:max-w-[500px] mx-auto xl:text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="xs:flex gap-4 pt-2 xs:max-w-[500px] mx-auto">
            <div className="xs:w-2/3">
              <GenerateEmailInput id="email-1" />
            </div>
            <button className="flex justify-center items-center mt-4 mb-28 px-4 py-2.5 text-lg gap-0.5 font-[500] bg-accent hover:bg-accent-hover active:bg-accent-avtive font-netflix rounded-md mx-auto  xs:w-1/3">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronRightStandard"
                aria-hidden="true"
                className="mb-[0.05rem] xs:mt-0 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" curve-wrapper">
        <div className="curve"></div>
      </div>
      <Trending />
      {/*info block */}
      <InfoBlock />
      {/* FAQ block */}
      <FaqDropDown />
      <div className="bg-black">
        <div className="main-wrapper py-1">
          <p className="mt-16 text-lg mx-auto text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="xs:flex gap-4 pt-2 xs:max-w-[500px] mx-auto">
            <div className="xs:w-2/3">
              <GenerateEmailInput id="email-2" />
            </div>
            <button className="flex justify-center items-center mt-4 mb-28 px-4 py-2.5 text-lg gap-0.5 font-[500] bg-accent hover:bg-accent-hover active:bg-accent-avtive font-netflix rounded-md mx-auto  xs:w-1/3">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronRightStandard"
                aria-hidden="true"
                className="mb-[0.05rem] xs:mt-0 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
