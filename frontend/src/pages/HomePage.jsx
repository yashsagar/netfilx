import {
  Trending,
  GenerateEmailInput,
  InfoBlock,
  FaqDropDown,
} from "../component";

const HomePage = () => {
  console.log("homepage rendering");

  return (
    <>
      <div className="min-h-screen -mt-24 lg:-mt-[80px]">
        <div className="pt-[55%] xs:pt-[40%] md:pt-[30%] lg:pt-[22%] 2xl:pt-[17%] text-center main-wrapper">
          <h2 className="font-sans text-[2.2rem] lg:text-[3rem]  font-bold leading-[125%] ">
            Unlimited movies, TV shows and more
          </h2>
          <p className="my-2 text-lg">Starts at ₹149. Cancel anytime.</p>
          <p className=" mt-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <GenerateEmailInput id="email-1" />

          <button className="flex mt-4 mb-28 px-4 py-2.5 text-lg gap-0.5 font-[500] bg-accent hover:bg-accent-hover active:bg-accent-avtive font-netflix rounded-md mx-auto items-center">
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
              className="mt-[0.25rem]"
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
          <p className="mt-16 text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <GenerateEmailInput id="email-2" />
          <button className="flex mt-4 mb-10 mx-auto px-4 py-2.5 text-lg gap-0.5 font-[500] bg-accent hover:bg-accent-hover active:bg-accent-avtive font-netflix rounded-md  items-center ">
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
              className="mt-[0.25rem]"
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
    </>
  );
};
export default HomePage;
