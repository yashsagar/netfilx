import { useRef, useEffect } from "react";
import { getGenre } from "../utils/getGenre";
import { X } from "lucide-react";

const Detailpage = ({
  configaration: { detailPageConfig },
  configaration: { setDetailPageConfig },
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    detailPageConfig.isVisible && dialogRef.current.showModal();
  }, [detailPageConfig.isVisible]);

  function handelDetails() {
    setDetailPageConfig((prevState) => ({ ...prevState, isVisible: false }));
  }

  const imageUrl = `https://image.tmdb.org/t/p/w780/${detailPageConfig.showsDetails.poster_path}`;
  const genre = getGenre(
    detailPageConfig.showsDetails?.genre_ids,
    detailPageConfig.showsDetails?.media_type
  );
  return (
    <dialog
      ref={dialogRef}
      className="w-full h-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] shadow-md shadow-white/50 outline-none"
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          inset: "0",
        }}
      >
        <X
          className="absolute top-2 right-2 cursor-pointer hover:bg-slate-500 rounded-full p-1"
          size={30}
          strokeWidth={2}
          color="red"
          onClick={handelDetails}
        />
        <div className="bg-gradient-to-t from-black from-10%  w-full h-full"></div>
        <div className=" absolute left-0 bottom-8 text-white px-4">
          <div className="flex gap-2">
            {genre.map((list) => (
              <p key={list} className="px-3 py-1 bg-zinc-600 rounded-md my-2">
                {list}
              </p>
            ))}
          </div>
          <p className="">{detailPageConfig.showsDetails.overview}</p>
        </div>
      </div>
    </dialog>
  );
};
export default Detailpage;
