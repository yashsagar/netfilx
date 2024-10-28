import { useCallback, useEffect, useState } from "react";
import { Detailpage } from "../component";
import ENV_VAR from "../config/envVars.js";

const Trending = () => {
  const [data, setData] = useState("");
  const [contentType, setContentType] = useState("movie");
  const [block, setBlock] = useState("india");
  const [detailPageConfig, setDetailPageConfig] = useState({
    isVisible: false,
    showsDetails: "",
  });

  const fetchData = useCallback(async (type) => {
    const response = await fetch(
      `${ENV_VAR.BACKEND}/v1/landingPageData/${type}`
    );

    const fetchData = await response.json();
    setData(fetchData);
  }, []);

  useEffect(() => {
    fetchData(contentType);
  }, [fetchData, contentType]);

  function filterData() {
    if (!data) return null;
    if (data.success) {
      let lists;
      if (block === "india") {
        lists = data.content.filter((item) =>
          item.original_language === "en" ? true : false
        );
        lists.length >= 10 && (lists = lists.slice(0, 10));
      } else {
        lists = data.content.filter((item) =>
          item.original_language === "en" ? false : true
        );
        if (lists.length >= 10) {
          lists = lists.slice(0, 10);
        } else {
          data.content.forEach((item) => {
            lists.length < 10 &&
              item.original_language === "en" &&
              lists.push(item);
          });
        }
      }
      return lists;
    }
    return null;
  }

  const handelOnchange = (type, value) => {
    if (type === "contentType") {
      setContentType(value);
    } else if (type === "block") {
      setBlock(value);
    }
  };

  function handelDetails(item) {
    setDetailPageConfig({
      isVisible: true,
      showsDetails: item,
    });
  }

  const filteredData = filterData();

  return (
    <div className="bg-black -mt-8">
      <div className=" main-wrapper">
        <p className="text-xl mb-8 lg:text-2xl lg:font-bold xl:text-3xl relative z-10">
          Trending Now
        </p>
        <form className=" space-y-2 lg:grid lg:grid-cols-[150px_150px] lg:space-y-0 gap-2">
          <div className="flex justify-between items-center border-2 border-gray-500 rounded-sm bg-slate-600/20 relative">
            <select
              name="block"
              className="bg-transparent w-full h-full py-2 pl-2 outline-none appearance-none"
              onChange={(event) => {
                handelOnchange("block", event.target.value);
              }}
            >
              <option value="india" className="text-slate-800 ">
                India
              </option>
              <option value="Global" className="text-slate-800">
                Global
              </option>
            </select>
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="CaretDownSmall"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-500 rounded-sm bg-slate-600/20 relative">
            <select
              list="typeList"
              className="bg-transparent w-full h-full py-2 pl-2 outline-none appearance-none"
              onChange={(event) => {
                handelOnchange("contentType", event.target.value);
              }}
            >
              <option value="movie" className="text-slate-800">
                Movies
              </option>
              <option value="tv" className="text-slate-800">
                Tv
              </option>
            </select>
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="CaretDownSmall"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </form>
        {/* trending result display */}
        <div
          className="grid grid-flow-col auto-cols-[125px] lg:auto-cols-[180px] xl:auto-cols-[220px] overflow-x-scroll overflow-y-hidden gap-6 lg:gap-10 trending-wrapper mt-8 px-4 lg:px-6 select-none"
          draggable="false"
        >
          {filteredData &&
            filteredData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer rounded-lg relative "
                  onClick={() => {
                    handelDetails(item);
                  }}
                >
                  <div className="aspect-[12/16] ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt="poster pic"
                      className="w-full h-full object-cover rounded-lg"
                      draggable="false"
                    />
                  </div>
                  <p className=" ratingNumber">{index + 1}</p>
                  <p className="topTen">
                    Top<span className="block pl-1">10</span>
                  </p>
                </div>
              );
            })}
        </div>
        {/*detail info block*/}
        {detailPageConfig.isVisible && (
          <Detailpage
            configaration={{ detailPageConfig, setDetailPageConfig }}
          />
        )}
      </div>
    </div>
  );
};
export default Trending;
