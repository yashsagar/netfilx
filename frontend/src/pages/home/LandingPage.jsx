import { useEffect } from "react";
import {
  Trending,
  GenerateEmailInput,
  InfoBlock,
  FaqDropDown,
} from "../../component";

import { useAuthStore } from "../../store/authUser.js";

const HomePage = () => {
  const { navBtnUpdate, footerupdate } = useAuthStore((store) => ({
    navBtnUpdate: store.navBtnUpdate,
    footerupdate: store.footerupdate,
  }));

  useEffect(() => {
    navBtnUpdate(true);
    footerupdate(true);
    return () => {
      navBtnUpdate(false);
      footerupdate(false);
    };
  }, [navBtnUpdate, footerupdate]);

  return (
    <>
      <div className="hero-bg-singin -mb-5  ">
        <div className="pt-[55%] xs:pt-[40%] sm:pt-[40%] md:pt-[40%] lg:pt-[25%] 2xl:pt-[20%] text-center main-wrapper relative z-10">
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
          <GenerateEmailInput id="email-1" />
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
          <GenerateEmailInput id="email-2" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
