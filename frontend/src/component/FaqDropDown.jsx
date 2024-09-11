import { Plus } from "lucide-react";
import { useState } from "react";

const FaqDropDown = () => {
  const [isOpen, setIsopen] = useState({});

  return (
    <div className=" pt-12 bg-black">
      <div className="main-wrapper">
        <p className="text-xl">Frequently Asked Questions</p>
        <div className="mt-4 space-y-2 mx-auto text-white/80 ">
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 1: !prevState["1"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                What is Netflix?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["1"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["1"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 2: !prevState["2"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center gap-1">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                How much does Netflix cost?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["2"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["2"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹149 to ₹649 a month. No extra costs, no contracts.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 3: !prevState["3"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                Where can I watch?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["3"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["3"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </p>
                <p>
                  You can also download your favourite shows with the iOS or
                  Android app. Use downloads to watch while you're on the go and
                  without an internet connection. Take Netflix with you
                  anywhere.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 4: !prevState["4"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                How do I cancel?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["4"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["4"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 5: !prevState["5"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                What can I watch on Netflix?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["5"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["5"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setIsopen((prevState) => ({ 6: !prevState["6"] }));
            }}
          >
            <div className="p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
              <p className="text-xl tracking-wider xl:text-2xl xl:font-medium">
                Is Netflix good for kids?
              </p>
              <Plus
                size={35}
                strokeWidth={1.5}
                className={isOpen["5"] ? "rotate-45" : ""}
              />
            </div>
            {isOpen["6"] && (
              <div className="p-6 bg-[#2d2d2d] text-lg xl:text-xl xl:font-medium space-y-4 mt-1 tracking-wide">
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                </p>
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqDropDown;
